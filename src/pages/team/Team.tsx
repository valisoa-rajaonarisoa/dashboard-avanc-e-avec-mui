import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Headers from "../../components/Headers";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// Importer les icônes nécessaires
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

type Props = {};

type e = {
  row: {
    id: number;
    access: string;
  };
};

const Team = ({}: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // État pour suivre la cellule sélectionnée
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);

  // Fonction pour gérer la suppression d'une ligne
  const handleDelete = (id: number) => {
    console.log(`Suppression de la ligne avec l'ID : ${id}`);
  };

  // Fonction pour gérer la lecture d'une ligne
  const handleRead = (id: number) => {
    console.log(`Lecture de la ligne avec l'ID : ${id}`);
  };

  // Fonction pour gérer la modification d'une ligne
  const handleEdit = (id: number) => {
    console.log(`Modification de la ligne avec l'ID : ${id}`);
  };

  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
    },
    { field: "phone", headerName: "Phone Number", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "access",
      headerName: "Access Level",
      width: 150,
      cellClassName: "class-access",
      renderCell: ({ row: { access } }: e) => {
        return (
          <Box
            sx={{
              width: "100%",
              m: "0 auto",
              p: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[800],
              borderRadius: "4px",
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{ ml: "5px", fontSize: "14px" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: ({ row: { id } }: e) => {
        return (
          <Box sx={{ display: "flex", gap: "5px" }}>
            {/* Bouton Lire */}
            <IconButton
              onClick={() => handleRead(id)}
              sx={{ color: colors.greenAccent[400] }}
            >
              <VisibilityIcon />
            </IconButton>

            {/* Bouton Modifier */}
            <IconButton
              onClick={() => handleEdit(id)}
              sx={{ color: colors.blueAccent[400] }}
            >
              <EditIcon />
            </IconButton>

            {/* Bouton Supprimer */}
            <IconButton
              onClick={() => handleDelete(id)}
              sx={{ color: colors.redAccent[400] }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ margin: "20px" }}>
      <Headers title="TEAM" subtitle="Welcome to your team" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "14px",
            transition: "border 0.3s ease", // Animation pour la bordure
            "&.selected-cell": {
              border: "none !important", // Supprimer la bordure pour la cellule sélectionnée
            },
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
            fontSize: "16px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },



          // *************footer***********************
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[600],
            
          },

          "& .MuiDataGrid-footerContainer p": {
           
            fontSize:"15px"
          },

          "& .MuiDataGrid-footerContainer div": {
           
            fontSize:"15px"
          },
          "& .class-access": {
            display: "flex !important",
            padding: "5px 4px !important",
            fontSize: "16px",
            borderBottom: "none",
            border: "none",
          },


          // ****************header*******************
          "& .MuiDataGrid-topCantainer": {
            backgroundColor:"yellow"
          },


          // ****************tool bar le filter *****************
          "& .MuiDataGrid-toolbarContainer": {
           
          },

          "& .MuiDataGrid-toolbarContainer button ": {
            color:colors.grey[100]
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={mockDataTeam}
          rowHeight={50}
          onCellClick={(params) => {
            // Ajouter la classe "selected-cell" à la cellule cliquée
            setSelectedCellId(params.id as number);
          }}
          sx={{
            "& .MuiDataGrid-cell:focus": {
              outline: "none", // Supprimer le focus par défaut
            },
          }}


          // **************tooolbar filter *******************
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;