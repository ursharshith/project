import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Input, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

export default function StudentDetails({ filename }) {
  // const [showAmount, setShowAmount] = useState(false);
  // const [routeDetails, setRouteDetails] = useState([]);
  // const [routeAmount, setRouteAmount] = useState(0);
  // const [fromplace, setFromPlace] = useState("");
  // const [toplace, setToPlace] = useState("");
  // const [error, setError] = useState(false); //For input validations

  // const handleCheckCost = () => {
  //   setShowAmount(true);
  //   axios
  //     .get("http://localhost:8080/routeCost")
  //     .then((result) => setRouteDetails(result.data))
  //     .then(
  //       routeDetails.map((route) => {
  //         if (route.fromplace === fromplace && route.Toplace === toplace) {
  //           setRouteAmount(route.Amount);
  //         }
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // };

  //Student 10th details
  const [sscBoard, setSSCBoard] = useState("");
  const [sscType, setSSCType] = useState("");
  const [sscPassYear, setSSCPassYear] = useState("");
  const [sscHallTicket, setSSCHallTicket] = useState("");
  const [dob, setDOB] = useState("");

  //Student Details
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();

  //Residential Adress Details
  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  //Institutional Details
  const [districtInstitution, setDistrictInstitution] = useState("");
  const [mandalInstitution, setMandalInstitution] = useState("");
  const [institutionname, setInstitutionName] = useState("");
  const [coursename, setCourseName] = useState("");
  const [admissionnumber, setAdmissionNumber] = useState("");
  const [addressInstitution, setAddressInstitution] = useState("");

  const navigate = useNavigate();
  const [review, setReview] = useState(false);

  //Review Part

  const [formData, setFormData] = useState({
    sscBoardType: "",
    sscType: "",
    sscPassYear: "",
    sscHallTicket: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReview(true);
  };

  const handleStudentDetailsNext = () => {
    navigate("/student/high-school/payment");
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:8080/uploadPhoto", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/student_personal_details", {
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
      .post("http://localhost:8080/student_study_details", {
        email,
        sscBoard,
        sscType,
        sscPassYear,
        sscHallTicket,
        dob,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/residential_address_details", {
        district,
        mandal,
        village,
        address,
        postalCode,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/institution_detail", {
        districtInstitution,
        mandalInstitution,
        institutionname,
        coursename,
        admissionnumber,
        addressInstitution,
      })
      .then((res) => {})
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:8080/applicaiton_emails", {
        email,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setReview(false);
  };

  const handleNextPreview = () => {
    // const formData = new FormData();
    // formData.append("file", file);

    // axios
    //   .post("http://localhost:8080/uploadPhoto", formData)
    //   .then((res) =>{
    //      console.log(res)
    //      setImageUrl(res.data)
    //      console.log(res.data.image)
    //      console.log("Image ", imageUrl)
    //   })
    //   .catch((err) => console.log(err));
    if (sscBoard.length <= 0) {
      alert("SSC Board Type is required");
    } else if (sscType.length <= 0) {
      alert("SSC Type is required");
    } else if (sscPassYear.length <= 0) {
      alert("SSC Pass Year is required");
    } else if (sscHallTicket.length <= 0) {
      alert("SSC Hall Ticket is required");
    } else if (dob.length <= 0) {
      alert("Date of Birth is required");
    } else if (name.length <= 0) {
      alert("Name is required");
    } else if (fatherName.length <= 0) {
      alert("Father name is required");
    } else if (gender.length <= 0) {
      alert("Gender is required");
    } else if (mobileNo.length <= 0) {
      alert("Mobile number is required");
    } else if (districtInstitution.length <= 0) {
      alert("Institution District is required");
    } else if (mandalInstitution.length <= 0) {
      alert("Institution Mandal is required");
    } else if (institutionname.length <= 0) {
      alert("Institution Name is required");
    } else if (coursename.length <= 0) {
      alert("Course name is required");
    } else if (admissionnumber.length <= 0) {
      alert("Admission Number is required");
    } else {
      setReview(true);
    }
  };

  return (
    <div className="student-details-div">
      {!review ? (
        <div className="main-sub-div">
          <Typography component="h1" variant="h4" align="center">
            STUDENT PASS Apply
          </Typography>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{ margin: "20px 0", fontSize: "20px" }}
          >
            <spam>Student Education Details</spam>
          </Typography>
          <div className="sub-divs">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="board"
                  name="board"
                  label="Education Board Type"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setSSCBoard(e.target.value)}
                >
                  <MenuItem value="oprion1">oprion1</MenuItem>
                  <MenuItem value="oprion2">oprion2</MenuItem>
                  <MenuItem value="oprion3">oprion3</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="type"
                  name="type"
                  label="Education Type"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setSSCType(e.target.value)}
                >
                  <MenuItem value="Regular">Regular</MenuItem>
                  <MenuItem value="Supplimentary">Supplimentary</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="passYear"
                  name="passYear"
                  label="Pass Year"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="outlined"
                  onChange={(e) => setSSCPassYear(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="hallTicket"
                  name="hallTicket"
                  label="Hall Ticket no"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="outlined"
                  onChange={(e) => setSSCHallTicket(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="Date"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="outlined"
                  onChange={(e) => setDOB(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            <spam>Student Details</spam>
          </Typography>
          <div className="sub-divs">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  onChange={(e) => setGender(e.target.value)}
                >
                  {/* <MenuItem value="">SSC Board Type</MenuItem> */}
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  onChange={(e) => setFile(e.target.files[0])}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            <spam>Residential Address Details</spam>
          </Typography>
          <div className="sub-divs">
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              fontSize: "20px",
            }}
          >
            Institution Details
          </Typography>
          <div className="sub-divs">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="districtInstitution"
                  name="district"
                  label="District"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setDistrictInstitution(e.target.value)}
                >
                  <MenuItem value="Sangareddy">Sangareddy</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="mandalInstitution"
                  name="mandal"
                  label="Mandal"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setMandalInstitution(e.target.value)}
                >
                  <MenuItem value="Nrayankhed">Nrayankhed</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="institutionname"
                  name="institutionname"
                  label="Institution Name"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setInstitutionName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="coursename"
                  name="coursename"
                  label="Course Name"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  onChange={(e) => setCourseName(e.target.value)}
                >
                  <MenuItem value="Course A">Nrayankhed</MenuItem>
                  <MenuItem value="Course B">Hyderabad</MenuItem>
                  <MenuItem value="Course C">Nirmal</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="admissionnumber"
                  name="admissionnumber"
                  label="Admission Number"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setAdmissionNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="address"
                  name="address"
                  label="Address(complete address)"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  onChange={(e) => setAddressInstitution(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <Button
            type="text"
            onClick={handleNextPreview}
            variant="contained"
            style={{ marginBottom: "5px" }}
          >
            Next To Preview
          </Button>
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
              <table>
                <tbody>
                  <th>SSC 10th Details</th>
                  <tr>
                    <td>SSC Board </td>
                    <td>{sscBoard}</td>
                  </tr>
                  <tr>
                    <td>
                      SSC(Regular/
                      <br />
                      Supplimentary){" "}
                    </td>
                    <td>{sscType}</td>
                  </tr>
                  <tr>
                    <td>SSC Pass Year </td>
                    <td>{sscPassYear}</td>
                  </tr>
                  <tr>
                    <td>SSC Hall Ticket </td>
                    <td>{sscHallTicket}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth </td>
                    <td>{dob}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          </div>
          <div style={{ display: "flex", flex: 1 }}>
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
            <div style={{ flex: 1 }}>
              <tbody>
                <th>Institution Details</th>
                <tr>
                  <td>District </td>
                  <td>{districtInstitution}</td>
                </tr>
                <tr>
                  <td>Mandal </td>
                  <td>{mandalInstitution}</td>
                </tr>
                <tr>
                  <td>Institution Name </td>
                  <td>{institutionname}</td>
                </tr>
                <tr>
                  <td>Course Name </td>
                  <td>{coursename}</td>
                </tr>
                <tr>
                  <td>Admission Number </td>
                  <td>{admissionnumber}</td>
                </tr>
                <tr>
                  <td>Address :</td>
                  <td>{addressInstitution}</td>
                </tr>
              </tbody>
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <img src={`http://localhost:8080/${imageUrl}`} alt="" />
            <Button type="text" onClick={handleEdit}>
              Edit
            </Button>
            <Button type="text" onClick={handleStudentDetailsNext}>
              NEXT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
