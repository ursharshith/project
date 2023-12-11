import { Button, Typography, Avatar } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignInPage from "./SignInPage";
import UserSignIn from "./UserSignIn";
import AdminSignIn from "./AdminSignIn";
import UserRegistration from "./UserRegistration";
import UserPortal from "./UserPortal";
import AdminPortal from "./AdminPortal";
import ApplyPassSub from "../SubComponents/ApplyPassSub";
import StudentCheckout from "../user portal pages/StudentCheckout";

import React, { useState, useEffect, useRef } from "react";
function stringAvatar(name) {
  return {
    children: name
      .split(" ")
      .map((word) => word[0])
      .join(""),
  };
}

function Content() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleStudent = () => {
    navigate("/student");
  };

  const wallet = 50;
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            NAME
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply Pass
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={handleStudent} style={{ cursor: "pointer" }}>
                    <a class="dropdown-item">Student</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Clg Student
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </li>
              {localStorage.getItem("userSignIn") && (
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Renewal Pass
                  </a>
                </li>
              )}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Pass Status
                </a>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "10px" }}>
            <Typography variant="h6">Wallet:{wallet}</Typography>
          </div>
          <div style={{ marginRight: "10px" }}>
            <Button color="inherit" onClick={handleSignIn}>
              SignIn
            </Button>
          </div>
          <div>
            <Avatar
              {...stringAvatar("Keluth Mahipal")}
              style={{ cursor: "pointer", color: "black" }}
              onClick={() => setProfileOpen((prev) => !prev)}
            ></Avatar>
          </div>

          {profileOpen && <ProfileAttributes />}
        </div>
      </nav>

      <div className="content-div">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signin" element={<SignInPage />}></Route>
          <Route path="user-signin" element={<UserSignIn />}></Route>
          <Route path="admin-signin" element={<AdminSignIn />}></Route>
          <Route
            path="user-registration"
            element={<UserRegistration />}
          ></Route>
          <Route path="user-portal" element={<UserPortal />} />
          <Route path="admin-portal" element={<AdminPortal />}></Route>
          <Route path="user-apply-pass" element={<ApplyPassSub />}></Route>
          <Route path="/student" element={<StudentCheckout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

function ProfileAttributes() {
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col profileAttributes">
      <label className="attributes">profile</label>
      <label className="attributes">settings</label>
      <label className="attributes" onClick={LogOut}>
        logout
      </label>
    </div>
  );
}

export default Content;
