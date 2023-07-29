import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/64b4ec710181f1689578609.png"
          alt="Logo"
          width={50}
        />
      </div>

      <a href="#" className="user">
        <img src="shield.png" alt="" width={50} />
      </a>
      <a href="#">
        <img
          src="https://cdn.icon-icons.com/icons2/2714/PNG/512/hash_straight_thin_icon_171725.png"
          alt=""
          width={50}
        />
      </a>
      <a href="#" className="Setting">
        <img
          src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
          alt=""
          width={50}
        />
      </a>
    </div>
  );
};

export default Sidebar;
