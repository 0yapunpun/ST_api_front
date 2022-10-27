function Table({ personListFiltered, setCurrentInfoModal }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th className="text-center">Detail</th>
          </tr>
        </thead>
        <tbody>
          {personListFiltered.length != 0
            ? personListFiltered.map((person, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.gender}</td>
                  <td>{person.height}</td>
                  <td className="text-center">
                    <button
                      onClick={(e) => setCurrentInfoModal(i)}
                      className="btn btn-sm btn-primary d-flex alig-items-center mx-auto btnTable"
                      style={{ padding: "2px" }}
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
