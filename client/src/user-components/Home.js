import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Button } from "@mui/material";
import { useState, useEffect } from "react";
import SellTwoToneIcon from "@mui/icons-material/SellTwoTone";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import SignInPage from "./SignInPage";
import UserSignIn from "./UserSignIn";
import AdminSignIn from "./AdminSignIn";
import UserRegistration from "./UserRegistration";
import UserPortal from "./UserPortal";
import ApplyPassSub from "./ApplyPassSub";
import StudentHighSchool from "./StudentHighSchool";
import axios from "axios";
import ModificationPage from "./ModificationPage";
import StudentDetails from "./SudentDetails";
import StudentPayment from "./StudentPayment";
import PaymentSuccessPage from "./PaymentSuccessPage";
import StudentReview from "./StudentReview";
import UserHome from "./UserHome";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function stringAvatar(name) {
  return {
    children: name
      .split(" ")
      .map((word) => word[0])
      .join(""),
  };
}

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = useState(false);
  const [openSubsection1, setOpenSubsection1] = useState(false);
  const [openSubsection2, setOpenSubsection2] = useState(false);
  const [titleHandle, setTitleHandle] = useState(false); //title Handle is bcz when we click on menu the title shoud appear in Drawer header not in App bar
  const [profileOpen, setProfileOpen] = useState(false);
  const [wallet, setWallet] = useState(0);
  const [userData, setUserData] = useState([])

  const isUserLoggedin =  localStorage.getItem("userSignIn");
  const userEmail = localStorage.getItem("userEmail"); /*"mahipalkelut@gmail.com";*/

  

  useEffect(() => {
    axios.get("http://localhost:8080/getUserWallet")
    .then((result) => setUserData(result.data))
    .then(
      userData.map(user => {
        if(userEmail === user.email) {
          setWallet(user.wallet)
          console.log(wallet);
        }
      })
    )
    .catch((err) => console.log(err))
  }, [])
  console.log(userEmail);
  console.log(wallet);

  const handleDrawerOpen = () => {
    setOpen(true);
    setTitleHandle(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTitleHandle(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleListItemMouseEnter = () => {
    setHovered(true);
  };

  const handleListItemClick1 = () => {
    setOpenSubsection1(!openSubsection1);
  };

  const handleListItemClick2 = () => {
    setOpenSubsection2(!openSubsection2);
  };

  const handleStudentHighSchool = () => {
    navigate("/student/high-school");
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  const handleAddWallet = () => {
    navigate("/wallet/update");
  }

  const divStyleAvatar = {
    position: "fixed", // or 'absolute' depending on your layout requirements
    top: 0,
    right: 0,
    padding: "15px",
  };

  const divStyleLogin = {
    position: "fixed", // or 'absolute' depending on your layout requirements
    top: 0,
    right: 75,
    padding: "15px",
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F2F2F2" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#231F20" }}
      >
        <Toolbar>
          {isUserLoggedin && (<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>)}
          {!titleHandle && (
            <Typography variant="h6" noWrap component="div">
              My-Project
            </Typography>
          )}
          {!isUserLoggedin && (
            <div style={divStyleAvatar}>
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          )}
          <div style={divStyleLogin}>
            <Button
              variant="text"
              style={{ color: "white" }}
              onClick={handleLogin}
            >
              About
            </Button>
          </div>
          {isUserLoggedin && (<div style={divStyleAvatar}>
            <Avatar
              {...stringAvatar("Keluth Mahipal")}
              style={{ cursor: "pointer", color: "black" }}
              onClick={() => setProfileOpen((prev) => !prev)}
            ></Avatar>
          </div>)}
        </Toolbar>
      </AppBar>

      {isUserLoggedin && (<Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#231F20", color: "#F2F2F2" }}>
          {titleHandle && (
            <Typography variant="h6" noWrap component="div">
              My-Project
            </Typography>
          )}
          <IconButton onClick={handleDrawerClose} style={{ color: "#F2F2F2" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ overflow: "hidden", cursor:"pointer" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                {/* <a href='/' style={{textDecoration:"none",color:"black"}}>Home</a> */}
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onMouseEnter={handleListItemMouseEnter}>
            <ListItemButton onClick={handleListItemClick1}>
              <ListItemIcon>
                <SellTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Apply Pass" />
              {openSubsection1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openSubsection1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ overflow: "hidden" }}>
              <ListItem>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText onClick={handleStudentHighSchool}>
                    Studnet(Till 10th)
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <Collapse in={openSubsection1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ overflow: "hidden" }}>
              <ListItem>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>
         
                    Studnet(Intermediate)
                
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          {["Renewal Pass", "View Pass"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding onMouseEnter={handleListItemMouseEnter}>
            <ListItemButton onClick={handleListItemClick2}>
              <ListItemIcon>
                <SellTwoToneIcon />
              </ListItemIcon>
              <ListItemText>wallet: {wallet}</ListItemText>
              {openSubsection2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openSubsection2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ overflow: "hidden" }}>
              <ListItem>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText onClick={handleAddWallet}>
                    Add wallet
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText onClick={handleLogout}>
                {/* <a href='/' style={{textDecoration:"none",color:"black"}}>Home</a> */}
                logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>)}
      <Box component="main" sx={{ flexGrow: 1, p: 3 , height:"100vh" }}>
        <DrawerHeader />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/user-signin" element={<UserSignIn />}></Route>
          <Route path="/admin-signin" element={<AdminSignIn />}></Route>
          <Route
            path="/user-registration"
            element={<UserRegistration />}
          ></Route>
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/user-apply-pass" element={<ApplyPassSub />}></Route>
          <Route path="/student/high-school" element={<StudentDetails />}></Route>
          <Route path="/wallet/update" element={<ModificationPage />}></Route>
          <Route path="/student/high-school/payment" element={<StudentPayment />}></Route>
          <Route path="/student/high-school/payment/status" element={<PaymentSuccessPage />}></Route>
          <Route path="/student/high-school/review" element={<StudentReview/>}></Route>
          <Route path="/userhome" element={<UserHome />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
