import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./Table";
import Modal from "./Modal";

import images from "../utils/images";

const api_url = "https://swapi.dev/api/people/";

function App() {
  const [state, setState] = useState({
    personList: [],
    personListFiltered: [],
    checkboxes: new Array(3).fill(true),
    currentPerson: {},
    currentView: "table",
    isVisibleModal: false,
  });

  const getData = async () => {
    let rawResponse = await fetch(api_url);
    let response = await rawResponse.json();

    setState({
      ...state,
      personList: response.results,
      personListFiltered: response.results,
      currentPerson: response.results[0],
    });
  };

  const searchFilter = (string) => {
    // Reload state on empty field
    if (string == "") {
      return setState({
        ...state,
        personListFiltered: state.personList,
        checkboxes: new Array(3).fill(true),
      });
    }

    // Filter by name
    let filtered = state.personListFiltered.filter(function (v, i) {
      if (v.name.toLowerCase().indexOf(string) >= 0) {
        return true;
      }
    });

    setState({
      ...state,
      personListFiltered: filtered,
    });
  };

  const checkboxFilter = (index) => {
    let filtered = [];
    const list = state.personList.slice();
    const checkboxes = state.checkboxes.slice();
    checkboxes[index] = !checkboxes[index]; // Update State

    for (let i = 0; i < list.length; i++) {
      if (checkboxes[0] && list[i].gender == "female") {
        filtered.push(list[i]);
      }

      if (checkboxes[1] && list[i].gender == "male") {
        filtered.push(list[i]);
      }

      if (checkboxes[2] && list[i].gender == "n/a") {
        filtered.push(list[i]);
      }
    }

    setState({
      ...state,
      checkboxes: checkboxes,
      personListFiltered: filtered,
    });
  };

  const cleanCheckboxFilter = () => {
    setState({
      ...state,
      personListFiltered: state.personList,
      checkboxes: new Array(3).fill(true),
    });
  };

  const setCurrentInfoModal = (index) => {
    let currentState = state.isVisibleModal;
    let personListFiltered = state.personListFiltered;
    let currentPerson = personListFiltered[index];

    setState({
      ...state,
      isVisibleModal: !currentState,
      currentPerson: currentPerson,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      isVisibleModal: false,
    });
  };

  const setStateView = (newState) => {
    setState({
      ...state,
      currentView: newState,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-wrapper sidebar-bg bg1 m-0 p-3">
      <Sidebar
        checkboxes={state.checkboxes}
        searchFilter={searchFilter}
        checkboxFilter={checkboxFilter}
        cleanCheckboxFilter={cleanCheckboxFilter}
      />

      <div
        className="main mainClass p-0 pt-5 "
        style={{ backgroundColor: "#181b1e" }}
      >
        {/* Conditional view, table or cards */}
        {state.currentView == "cards" ? (
          <div className="w-100 d-flex flex-wrap justify-content-center">
            {state.personListFiltered.length != 0 ? (
              state.personListFiltered.map((person, i) => (
                <Card
                  key={i}
                  person={person}
                  image={images.images[person.name]}
                />
              ))
            ) : (
              <p className="">Loading Items</p>
            )}
          </div>
        ) : (
          <div className="w-100 d-flex flex-wrap justify-content-center mt- px-3 ">
            <Table
              personListFiltered={state.personListFiltered}
              setCurrentInfoModal={setCurrentInfoModal}
            />
          </div>
        )}

        <div className="layoutBtns">
          <div
            onClick={() => setStateView("table")}
            style={{ width: "50px" }}
            className={
              "btn btn-round btn-sm btn-outline-secondary mx-2 " +
              (state.currentView == "table" ? "btnLayoutActive" : "")
            }
          >
            Table
          </div>
          <div
            onClick={() => setStateView("cards")}
            style={{ width: "50px" }}
            className={
              "btn btn-round btn-sm btn-outline-secondary " +
              (state.currentView == "cards" ? "btnLayoutActive" : "")
            }
          >
            Cards
          </div>
        </div>
      </div>

      <Modal
        currentPerson={state.currentPerson}
        isVisibleModal={state.isVisibleModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
