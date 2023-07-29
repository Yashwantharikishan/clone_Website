import React, { useState, useEffect } from "react";
import axios from "axios";

const TableContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleInputChange = (event) => {
    setSearchTerm(document.querySelector("#input").value);
  };

  const filteredData = data.filter((item) => {
    if (searchTerm)
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return true;
  });

  return (
    <div className="main">
      <div id="navbar">
        <div className="nav-item options">
          <div className="option">Users</div>
          <div className="option">Compaign</div>
          <div className="option">Tables</div>
          <div className="option">List</div>
        </div>
        <button className="refresh-icon nav-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61444.png"
            alt=""
            width={25}
          />
        </button>
        <div className="Download nav-item">
          <div className="option1">
            <img
              src="https://cdn.icon-icons.com/icons2/1875/PNG/512/download_120262.png"
              alt=""
              width={25}
            />
            Download
          </div>
        </div>
        <div className="searchbox">
          <div className="search-icon"></div>
          <input id="input" type="text" placeholder="Search..." />
        </div>
        <div className="button nav-item" onClick={handleInputChange}>
          <button className="btn btn-secondary">Search</button>
        </div>
        <div className="doner">
          <img
            src="https://static.thenounproject.com/png/756730-200.png"
            alt=""
            width={30}
          />
        </div>
      </div>
      <div className="Table-Container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((items) => (
              <tr key={items.name}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td> {items.username}</td>
                <td>{items.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
