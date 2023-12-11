import React from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import "../style.css";
import UserSignIn from "./UserSignIn";

function UserPortal() {
  const navigate = useNavigate();

  const handleApllyPass = () => {
    navigate("/user-apply-pass");
  };

  const handleViewPass = () => {
    navigate("/user-view-pass");
  };

  const handleRenewalPass = () => {
    navigate("/user-renewal-pass");
  };

  return (
      <div className="user-portal-main-div">
        {/* <h6 onClick={handleApllyPass}>ApllyPass</h6>
        <h6 onClick={handleViewPass}>ViewPass</h6>
        <h6 onClick={handleRenewalPass}>RenewalPass</h6> */}
        {/* <div className="user-portal-side-div"> */}
          {/* <header className="App-header"> */}
          {/* <Space>
            <Menu
              mode="inline"
              onClick={({ key }) => {
                navigate(key);
              }}
              items={[
                {
                  label: "Apply Pass",
                  key: "applyPass",
                  children: [
                    { label: "Student", key: "/student" },
                    { label: "Clg Student", key: "/clgStudent" },
                    { label: "Others", key: "/others" },
                  ],
                },
                { label: "Renewal Pass", key: "/renewalPass" },
                { label: "Pass Status", key: "/passStatus" },
              ]}
            ></Menu>
          </Space> */}
          {/* </header> */}
        {/* </div>
        <div className="user-portal-content-div">
          <Routes>
          <Route path="/student" element={<UserSignIn/>}></Route>
            
          </Routes>
        </div> */}
      </div>
  );
}

export default UserPortal;
