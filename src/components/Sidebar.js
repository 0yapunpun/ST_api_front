function Sidebar({
  checkboxes,
  searchFilter,
  checkboxFilter,
  cleanCheckboxFilter,
}) {
  return (
    <div id="sidebar" className="sidebar mt-5" style={{ height: "240px" }}>
      <div className="sidebar-content p-2">
        <div className="d-flex justfy-content center flex-column">
          <div className="input-group w-100">
            <div className="form-outline w-100">
              <input
                onChange={(e) => searchFilter(e.target.value)}
                type="search"
                className="form-control inputWidth mx-3 mt-3"
                placeholder="Search"
              />
            </div>
          </div>

          <span className="mt-3 ml-3">Gender</span>
          <div className="mt-1 ml-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={checkboxes[0]}
                onChange={(e) => checkboxFilter(0)}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Females
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={checkboxes[1]}
                onChange={(e) => checkboxFilter(1)}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Males
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={checkboxes[2]}
                onChange={(e) => checkboxFilter(2)}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                N/A
              </label>
            </div>
          </div>
          <button
            onClick={() => {
              cleanCheckboxFilter();
            }}
            className="btn btn-primary m-3"
            type="submit"
          >
            Clean Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
