import React from "react";
import "../style.css";
import { TextField } from "@mui/material";

function PassApply() {

  const handleNext1 =()=>{
    document.getElementById("Form1").style.left = "-720px";
    document.getElementById("Form2").style.left = "162px";
    document.getElementById("progress").style.width = "480px";
  }

  const handleBack1 =()=> {
    document.getElementById("Form1").style.left = "162px";
    document.getElementById("Form2").style.left = "720px";
    document.getElementById("progress").style.width = "240px";
  }

  const handleNext2 =()=>{
    document.getElementById("Form2").style.left = "-720px";
    document.getElementById("Form3").style.left = "162px";
    document.getElementById("progress").style.width = "720px";
  }

  const handleBack2 =()=>{
    document.getElementById("Form2").style.left = "162px";
    document.getElementById("Form3").style.left = "720px";
    document.getElementById("progress").style.width = "480px";
  }

  return (
    <div className="apply-container">
      <form id="Form1">
        <h3>Personal Details</h3>
        <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
        <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
        <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
        <div className="btn-box">
          <button type="button" onClick={handleNext1}>Next</button>
        </div>
      </form>

      <form id="Form2">
        <h3>Payment</h3>
        <div className="btn-box">
          <button type="button" onClick={handleBack1}>Back</button>
          <button type="button" onClick={handleNext2}>Next</button>
        </div>
      </form>

      <form id="Form3">
        <h3>Status</h3>
        <div className="btn-box">
          <button type="button" onClick={handleBack2}>Back</button>
          <button type="Submit">Submit</button>
        </div>
      </form>

      <div className="step-row">
        <div id="progress">

        </div>
        <div className="step-col"><small>Step1</small></div>
        <div className="step-col"><small>Step2</small></div>
        <div className="step-col"><small>Step3</small></div>
      </div>
    </div>
  );
}

export default PassApply;
