const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRegistrationModel = require("./models/UserRegistration");
const RouteDetailsModel = require("./models/RouteDetailsModel");
const PhotoModel = require("./models/PhotoModel");
const multer = require("multer");
const StudentPersonalDetailsModel = require("./models/StudentPersonalDetails");
const StudentStudyDetailsModel = require("./models/StudentStudyDetails");
const InstitutionDetailsModel = require("./models/InstitutionDetails");
const ResidentialAddressDetailsModel = require("./models/ResidentialAddressDetails");
const path = require('path');

const app = express();
app.use(express.json());
app.use('/Images', express.static('Images'))
app.use(cors());
const PORT = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/major-project");

app.post("/user-signin", (req, res) => {
  const { email, password } = req.body;
  UserRegistrationModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("password incorrect");
      }
    } else {
      res.json("user does not exist");
    }
  });
});

app.get("/routeCost", (req, res) => {
  RouteDetailsModel.find()
    .then((userdetails) => res.json(userdetails))
    .catch((err) => res.json(err));
});

app.get("/getUserWallet", (req, res) => {
  UserRegistrationModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  UserRegistrationModel.create(req.body)
    .then((registration) => res.json(registration))
    .catch((err) => res.json(err));
});

app.put("/wallet/:email", async (req, res) => {
  const { newWallet } = req.body;
  const email = req.params.email;
  try {
    const result = await UserRegistrationModel.updateOne(
      { email: email },
      {
        $inc: {
          wallet: newWallet,
        },
      }
    );

    if (result.modifiedCount > 0) {
      res.json({ success: true, message: "wallent updated success" });
    } else {
      res.json({ success: false, message: "wallet update failed" });
    }
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.put("/payment/:email", async (req, res) => {
  const { cost } = req.body;
  const email = req.params.email;
  try {
    const result = await UserRegistrationModel.updateOne(
      { email: email },
      {
        $inc: {
          wallet: -parseFloat(cost),
        },
      }
    );

    if (result.modifiedCount > 0) {
      res.json({ success: true, message: "wallent updated success" });
    } else {
      res.json({ success: false, message: "wallet update failed" });
    }
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Image Upload and Retrive********

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/images')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname))
//   }
// })

const upload = multer({dest: 'images/'})
// const upload = multer({
//   storage:storage
// })

app.post("/uploadPhoto", upload.single('file'), async (req, res) => {
  console.log(req.file);
  // try {
  //   const photo = new PhotoModel({
  //     image: req.file.originalname,
  //     filename: req.file.filename,
  //   });

  //   await photo.save();
  //   res.status(201).send(req.file.originalname);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Internal Server Error');
  // }
  PhotoModel.create({image: req.file.path})
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

app.get('/getImage', (req, res) => {
  PhotoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(res))
})

app.post("/student_personal_details", (req, res) => {
  console.log(req.body);
    StudentPersonalDetailsModel.create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

app.post("/student_study_details", (req, res) => {
  StudentStudyDetailsModel.create(req.body)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

app.post("/institution_details", (req, res) => {
  InstitutionDetailsModel.create(req.body)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

app.post("/residential_address_details", (req, res) => {
  ResidentialAddressDetailsModel.create(req.body)
  .then((result) => res.json(result))
  .catch((err) => res.json(err))
})

//Image retrieve
// app.get("/image_retrieve/:filename", async (req, res) => {
//   try{
//     const image = await PhotoModel.findOne({file: req.params.filename});
//     const imagePath = path.json(__dirname, '../images/', image.filename);
//     res.sendFile(imagePath);
//   }
//   catch(err) {
//     res.status(500).send('Internal Server Error');
//   }
// })

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
