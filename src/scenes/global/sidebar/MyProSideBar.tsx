import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./sidebarContext"; // Assure-toi que ce fichier existe et contient les bons hooks.
import { tokens } from "../../../theme"; // Vérifie que ce fichier existe et contient la logique pour la palette de couleurs.

import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

type itemType = {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  name: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const Item = ({ title, to, icon, selected, setSelected, name }: itemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ************hover ************
  const [hover, setHover] = useState(false);

  const { pathname } = useLocation();

  let isPageStyle=""

  // ************localisation du page et hover *********
  if(hover || pathname.split('/').includes(name)){
    isPageStyle=colors.greenAccent[500]
  }else if(name=="dashboard" && pathname=="/"){
    isPageStyle=colors.greenAccent[500]
  }else{
    isPageStyle=colors.grey[100]
  }
  return (
    <Link to={to} >
      <MenuItem
        active={selected === title}
        style={{
          color: isPageStyle,
          background: hover ? "transparent" : "transparent",
        }}
        onClick={() => setSelected(title)}
        icon={icon as React.ReactNode}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography >{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const MyProSidebar = () => {
  // ********************* S T  A T ES APPEL DES CONTEXT*****************

  // ***Theme**
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();

  // ****************side-pro
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      // **************************position , sass
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      {/* ****************sidebar********* */}
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : (
                sidebarRTL && (
                  <SwitchLeftOutlinedIcon
                    onClick={() => setSidebarRTL(!sidebarRTL)}
                  />
                )
              )
            }
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px" textAlign="center">
              <img
                alt="profile user"
                width="100px"
                height="100px"
                src={
                  "https://img.freepik.com/free-photo/cheerful-young-woman-taking-notes-while-sitting-steps-street_1153-6840.jpg?t=st=1742908585~exp=1742912185~hmac=996f987692cdade3b5f9c79303776512e99b8fd3e5b2c24e09d9a7b6156eb11b&w=740"
                } // Vérifie que l'image est à cet emplacement
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Harun Jeylan
              </Typography>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              name="dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              name="team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              name="contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Calendar"
              to="/calendar"
              name="calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* ****************titre** */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              name="bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
