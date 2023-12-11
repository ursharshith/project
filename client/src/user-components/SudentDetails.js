import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Input, MenuItem } from "@mui/material";
import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentDetails({filename}) {
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
  // console.log(file);
  // console.log("File name ", file.name)

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
    // const formData = new FormData();
    // formData.append("file", file);

    // axios
    //   .post("http://localhost:8080/uploadPhoto", formData)
    //   .then((res) => setImageName(res.data))
    //   .catch((err) => console.log(err));

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
      .post("http://localhost:8080/institution_details", {
        districtInstitution,
        mandalInstitution,
        institutionname,
        coursename,
        admissionnumber,
        addressInstitution,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setReview(false);
  }

  const handleNextPreview = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:8080/uploadPhoto", formData)
      .then((res) =>{
         console.log(res)
         setImageUrl(res.data)
         console.log(res.data.image)
         console.log("Image ", imageUrl)
      })
      .catch((err) => console.log(err));
    // if(sscBoard.length <= 0) {
    //   alert("SSC Board Type is required");
    // }
    // else if(sscType.length <= 0) {
    //   alert("SSC Type is required");
    // }
    // else if(sscPassYear.length <= 0) {
    //   alert("SSC Pass Year is required");
    // }
    // else if(sscHallTicket.length <= 0) {
    //   alert("SSC Hall Ticket is required");
    // }
    // else if(dob.length <= 0) {
    //   alert("Date of Birth is required");
    // }
    // else if(name.length <= 0) {
    //   alert("Name is required");
    // }
    // else if(fatherName.length <= 0) {
    //   alert("Father name is required");
    // }
    // else if(gender.length <= 0) {
    //   alert("Gender is required");
    // }
    // else if(mobileNo.length <= 0) {
    //   alert("Mobile number is required");
    // }
    // else if(districtInstitution.length <= 0) {
    //   alert("Institution District is required");
    // }
    // else if(mandalInstitution.length <= 0) {
    //   alert("Institution Mandal is required");
    // }
    // else if(institutionname.length <= 0) {
    //   alert("Institution Name is required");
    // }
    // else if(coursename.length <= 0) {
    //   alert("Course name is required");
    // }
    // else if(admissionnumber.length <= 0) {
    //   alert("Admission Number is required");
    // } else {
      setReview(true);
    // }
  }

  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   // const fetchImage = async () => {
  //   //   try {
  //   //     const response = await axios.get(`http://localhost:8080/image_retrieve/${file.filename}`);

  //   //     setImageData(response.data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching image:', error);
  //   //   }
  //   // };

  //   // fetchImage();
  //   axios.get(`http://localhost:8080/getImage`)
  //   .then((res) => setImage(res.data[0].image))
  //   .catch((err) => console.log(err))
    
  // }, []);

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
            Student PASS Apply
          </Typography>
          <hr />
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "10px" }}
          >
            <spam>Student 10th Details</spam>
          </Typography>
          <div style={{ marginLeft: "15px", marginRight: "15px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="sscBoard"
                  name="sscBoard"
                  label="SSC Board Type"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
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
                  id="sscType"
                  name="sscType"
                  label="SSC Type"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={(e) => setSSCType(e.target.value)}
                >
                  <MenuItem value="Regular">Regular</MenuItem>
                  <MenuItem value="Supplimentary">Supplimentary</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="sscPassYear"
                  name="sscPassYear"
                  label="SSC Pass Year"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  onChange={(e) => setSSCPassYear(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="sscHallTicket"
                  name="sscHallTicket"
                  label="SSC Hall Ticket no"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
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
                  variant="standard"
                  onChange={(e) => setDOB(e.target.value)}
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
            <spam>Student Details</spam>
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
                  {/* <MenuItem value="">SSC Board Type</MenuItem> */}
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
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
          </div>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "40px", marginBottom: "10px" }}
          >
            Institution Details
          </Typography>
          <div style={{ marginLeft: "15px", marginRight: "15px" }}>
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
                  variant="standard"
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
                  variant="standard"
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
                  variant="standard"
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
                  variant="standard"
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
                  variant="standard"
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
                  variant="standard"
                  onChange={(e) => setAddressInstitution(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button type="text" onClick={handleNextPreview}>
                  Next To Preview
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      ) : (
        <div style={{textAlign:"left", display:"flex", flexDirection:"column", borderRadius:"10px", backgroundColor:"white", height:"90vh", padding:"25px"}}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginTop: "10px", marginBottom: "40px", textAlign:"center" }}
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
            <div style={{display:"flex", flex:1}}>
            <div style={{flex:1}}>
            <table>
              <tbody>
                <th>SSC 10th Details</th>
                <tr><td>SSC Board  </td><td>{sscBoard}</td></tr>
                <tr><td>SSC(Regular/<br/>Supplimentary)  </td><td>{sscType}</td></tr>
                <tr><td>SSC Pass Year  </td><td>{sscPassYear}</td></tr>
                <tr><td>SSC Hall Ticket  </td><td>{sscHallTicket}</td></tr>
                <tr><td>Date of Birth  </td><td>{dob}</td></tr>
              </tbody>
            </table>
            </div>
            <div style={{flex:1}}>
            <tbody>
                <th>Student Details</th>
                <tr><td>Name  </td><td>{name}</td></tr>
                <tr><td>Father/<br/>Guardian Name   </td><td>{fatherName}</td></tr>
                <tr><td>Date of Birth  </td><td>{dob}</td></tr>
                <tr><td>Gender  </td><td>{gender}</td></tr>
                <tr><td>Age  </td><td>{age}</td></tr>
                <tr><td>Aadhar  </td><td>{aadhar}</td></tr>
                <tr><td>Mobile  </td><td>{mobileNo}</td></tr>
                <tr><td>Email</td><td>{email}</td></tr>
              </tbody>
            </div>
            </div>
            <div style={{display:"flex", flex:1}}>
            <div style={{flex:1}}>
            <tbody>
                <th>Residential Address Details</th>
                <tr><td>District  </td><td>{district}</td></tr>
                <tr><td>Mandal  </td><td>{mandal}</td></tr>
                <tr><td>Village  </td><td>{village}</td></tr>
                <tr><td>Address  </td><td>{address}</td></tr>
                <tr><td>postalCode  </td><td>{postalCode}</td></tr>
              </tbody>
            </div>
            <div style={{flex:1}}>
            <tbody>
                <th>Institution Details</th>
                <tr><td>District  </td><td>{districtInstitution}</td></tr>
                <tr><td>Mandal   </td><td>{mandal}</td></tr>
                <tr><td>Institution Name  </td><td>{institutionname}</td></tr>
                <tr><td>Course Name  </td><td>{coursename}</td></tr>
                <tr><td>Admission Number  </td><td>{admissionnumber}</td></tr>
                <tr><td>Address  </td><td>{addressInstitution}</td></tr>
              </tbody>
            </div>
            </div>
            <div style={{margin:"auto"}}>
            <img src={`http://localhost:8080/${imageUrl}`} alt=""/>
            <Button type="text" onClick={handleEdit} >Edit</Button>
            <Button type="text" onClick={handleStudentDetailsNext}>NEXT</Button>
            </div>
        </div>
      )}
    </React.Fragment>
  );
}
