import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Input, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function OtherUserDetails({ filename }) {
  //Other User Details
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [file, setFile] = useState();
  const [dob, setDOB] = useState("");

  //Residential Adress Details
  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const navigate = useNavigate();
  const [review, setReview] = useState(false);

  //Review Part
  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(true);
  };

  const handleStudentDetailsNext = () => {
    navigate("/student/high-school/payment");
    // const formData = new FormData();
    // formData.append("file", file);

    // axios
    //   .post("http://localhost:8080/uploadPhoto", formData)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/user_apply_personal_details", {
        name,
        dob,
        gender,
        age,
        aadhar,
        mobileNo,
        email,
        fatherName,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/user_apply_residential_details", {
        email,
        district,
        mandal,
        village,
        address,
        postalCode,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

      axios.post("http://localhost:8080/applicaiton_emails", {
        email,
      })
      .then((res) => {})
      .catch((err) => console.log(err))
  };

  const handleEdit = () => {
    setReview(false);
  };

  const handleNextPreview = () => {
     if(dob.length <= 0) {
      alert("Date of Birth is required");
    }
    else if(name.length <= 0) {
      alert("Name is required");
    }
    else if(fatherName.length <= 0) {
      alert("Father name is required");
    }
    else if(gender.length <= 0) {
      alert("Gender is required");
    }
    else if(mobileNo.length <= 0) {
      alert("Mobile number is required");
    }
     else {
      setReview(true);
    }

    // setReview(true);
  };

  return (
    <React.Fragment>
      {!review ? (
        <div
          style={{
            backgroundColor: "white",
            margin: "auto",
            width: "80%",
            padding: "10px",
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            USER PASS Apply
          </Typography>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            <spam>User Details</spam>
          </Typography>
          <div style={{ marginLeft: "15px", marginRight: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="father/Guardiansname"
                  name="father/Guardiansname"
                  label="Father/Guardian's Name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                  onChange={(e) => setDOB(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="gender"
                  name="gender"
                  label="Gender"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Female">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="age"
                  name="age"
                  label="Age"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="aadhar"
                  name="aadhar"
                  label="Aadhar"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="number"
                  id="mobileNo"
                  name="mobileNo"
                  label="Mobile No"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="photo"
                  name="photo"
                  label="Photo"
                  type="file"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setFile(e.target.files[0])}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            <spam>Residential Address Details</spam>
          </Typography>
          <div style={{ marginLeft: "15px", marginRight: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="district"
                  name="district"
                  label="District"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  {/* <MenuItem value="">SSC Board Type</MenuItem> */}
                  <MenuItem value="Sangareddy">Sangareddy</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="mandal"
                  name="mandal"
                  label="Mandal"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={(e) => setMandal(e.target.value)}
                >
                  {/* <MenuItem value="">SSC Board Type</MenuItem> */}
                  <MenuItem value="Nrayankhed">Nrayankhed</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="village"
                  name="village"
                  label="Village"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setVillage(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="address"
                  name="address"
                  label="Address(complete address)"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="postalCode"
                  name="postalCode"
                  label="Postal Code"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button type="text" onClick={handleNextPreview}>
                Next To Preview
              </Button>
            </Grid>
          </div>
        </div>
      ) : (
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "90vh",
            padding: "25px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "10px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            <spam>APPLICATION</spam>
          </Typography>
          {/* <div style={{display:"flex", flex:1}}>
          {imageData && (
          <img
            src={`data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')}`}
            alt="Your Image"
          />
          )}
          </div> */}
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ flex: 1 }}>
              <tbody>
                <th>Student Details</th>
                <tr>
                  <td>Name </td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>
                    Father/
                    <br />
                    Guardian Name{" "}
                  </td>
                  <td>{fatherName}</td>
                </tr>
                <tr>
                  <td>Date of Birth </td>
                  <td>{dob}</td>
                </tr>
                <tr>
                  <td>Gender </td>
                  <td>{gender}</td>
                </tr>
                <tr>
                  <td>Age </td>
                  <td>{age}</td>
                </tr>
                <tr>
                  <td>Aadhar </td>
                  <td>{aadhar}</td>
                </tr>
                <tr>
                  <td>Mobile </td>
                  <td>{mobileNo}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{email}</td>
                </tr>
              </tbody>
            </div>
            <div style={{ flex: 1 }}>
              <tbody>
                <th>Residential Address Details</th>
                <tr>
                  <td>District </td>
                  <td>{district}</td>
                </tr>
                <tr>
                  <td>Mandal </td>
                  <td>{mandal}</td>
                </tr>
                <tr>
                  <td>Village </td>
                  <td>{village}</td>
                </tr>
                <tr>
                  <td>Address </td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>postalCode </td>
                  <td>{postalCode}</td>
                </tr>
              </tbody>
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <Button type="text" onClick={handleEdit}>
              Edit
            </Button>
            <Button type="text" onClick={handleStudentDetailsNext}>
              NEXT
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
