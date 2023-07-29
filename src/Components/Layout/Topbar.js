import React from "react";

const Topbar = () => {
  return (
    <div className="top">
      <div id="user-dropdown">
        {/* <div className="drop-down"> */}
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="User Image"
          id="user-photo"
        />
        <button className="dropbtn">
          <span className="username">
            John Doe{" "}
            <img
              src="https://static.thenounproject.com/png/1123247-200.png"
              alt=""
              width={15}
            />
          </span>
          <div className="branch-info">
            <span className="branch">Branch </span>
          </div>
        </button>
        {/* </div> */}

        <div id="user-dropdown-content">
          <a href="#" className="user-option">
            Profile
          </a>
          <a href="#" className="user-option">
            Settings
          </a>
          <a href="#" className="user-option">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
