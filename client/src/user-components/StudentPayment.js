import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentPayment() {
  const [showAmount, setShowAmount] = useState(false);
  const [routeDetails, setRouteDetails] = useState([]);
  const [cost, setCost] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  //Payment and Route State variables
  const [passType, setPassType] = useState("");
  const [custom, setCustom] = useState(0);
  const [routeAmount, setRouteAmount] = useState(0);
  const [fromplace, setFromPlace] = useState("");
  const [toplace, setToPlace] = useState("");
  const [handleCustom, setHandleCustom] = useState(false);
  const [months, setMonths] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payButton, setPayButton] = useState(false)

  React.useEffect(() => {
    if (passType === "custom") {
      setHandleCustom(true);
    } else {
      setHandleCustom(false);
    }
  }, [passType]);

  React.useEffect(() => {
    setMonths(months);
    setRouteAmount(routeAmount);
    setTotalAmount(totalAmount);
  }, [months, routeAmount, totalAmount]);

  React.useEffect(() => {
    handleCheckCost();
  }, [months, routeAmount, totalAmount]);

  const handleCheckCost = () => {
    setShowAmount(true);
    
    axios
      .get("http://localhost:8080/routeCost")
      .then((result) => setRouteDetails(result.data))
      .then(
        routeDetails.map((route) => {
          if (route.fromplace === fromplace && route.Toplace === toplace) {
            setRouteAmount(route.Amount);
          }
        })
      )
      .catch((err) => console.log(err));
    
    if (passType === "year") {
      setMonths(12);
      setTotalAmount(routeAmount * months);
    } else if (passType === "half") {
      setMonths(6);
      setTotalAmount(routeAmount * months);
    } else if (passType === "quarter") {
      setMonths(3);
      setTotalAmount(routeAmount * months);
    } else {
      setMonths(custom);
      setTotalAmount(routeAmount * months);
    }

    if(totalAmount !== 0) {
      setPayButton(true);
    }
  };

  console.log("I am months :", months);
  console.log("I am cost", routeAmount);
  console.log("I am total Amount :", totalAmount);

  const handlePay = () => {
    axios
      .put(`http://localhost:8080/payment/${email}`, { cost })
      .then((result) => {
        setPaymentStatus(true);
        navigate("/student/high-school/payment/status");
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "white",
          margin: "auto",
          width: "75%",
          padding: "10px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="passtype"
              name="passtype"
              label="PASS Type"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => setPassType(e.target.value)}
            >
              <MenuItem value="year">year</MenuItem>
              <MenuItem value="half">half</MenuItem>
              <MenuItem value="quarter">quarter</MenuItem>
              <MenuItem value="custom">custom</MenuItem>
            </TextField>
          </Grid>

          {handleCustom && (
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="custom"
                name="custom"
                label="Custom"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => setCustom(e.target.value)}
              ></TextField>
            </Grid>
          )}
        </Grid>
        {!paymentStatus && (
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            <spam>Route Details</spam>
          </Typography>
        )}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="fromplace"
              name="fromplace"
              label="From Place"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => setFromPlace(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="toplace"
              name="toplace"
              label="To Place"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={(e) => setToPlace(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button type="text" onClick={handleCheckCost}>
              Check Cost
            </Button>
          </Grid>
          {!paymentStatus && showAmount && (
            <Grid item xs={12} sm={12}>
              <p style={{ textAlign: "center", color: "red" }}>
                For your pass you need to pay <spam>{totalAmount}</spam>{" "}
                rupees!!!{" "}
              </p>
            </Grid>
          )}

          <Grid item xs={12} sm={3}>
            <TextField
              type="decimal"
              id="cost"
              name="cost"
              label="Total Amount"
              fullWidth
              value={totalAmount}
              onChange={(e) => setCost(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={9}></Grid>
          <Grid item xs={12} sm={3}>
            <Button type="text" onClick={handlePay} disabled={!payButton}>
              pay
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
