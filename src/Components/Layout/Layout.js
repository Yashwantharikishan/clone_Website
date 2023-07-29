import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import TableContainer from "./TableContainer";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="right-main-content">
        <Topbar />
        <TableContainer />
      </div>
    </div>
  );
};

export default Layout;
