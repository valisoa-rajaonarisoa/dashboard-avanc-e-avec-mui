import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";

// / Définition du composant fonctionnel `Topbar`.
const Topbar = () => {
  // Utilise le hook `useTheme` pour accéder au thème actuel de Material-UI.
  const theme = useTheme();

  // Récupère les couleurs correspondantes au mode actuel (`dark` ou `light`) en utilisant la fonction `tokens`.
  const colors = tokens(theme.palette.mode);

  // Accède au contexte `ColorModeContext` pour gérer le mode clair/sombre.
  const colorMode = useContext(ColorModeContext);

  // Utilise le hook `useProSidebar` pour obtenir des fonctions et des états liés à la barre latérale.
  const { toggleSidebar, broken, rtl } = useProSidebar();
  // - `toggleSidebar` : Une fonction pour afficher ou masquer la barre latérale.
  // - `broken` : Indique si l'écran est trop petit pour afficher la barre latérale en permanence.
  // - `rtl` : Indique si le texte est en mode "droite à gauche" (Right-to-Left).

  return (
    // Le conteneur principal de la barre supérieure (top bar).
    // - `display="flex"` : Organise les éléments horizontalement avec Flexbox.
    // - `justifyContent="space-between"` : Place les éléments aux extrémités (gauche et droite).
    // - `p={2}` : Ajoute un padding de 2 unités autour du conteneur.
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Conteneur pour les éléments à gauche de la barre supérieure. */}
      <Box display="flex">
        {/* Affiche un bouton de menu si l'écran est trop petit (`broken`) et que le mode RTL n'est pas activé (`!rtl`). */}
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6px 0 2px" }} // Ajoute des marges autour du bouton.
            onClick={() => toggleSidebar()} // Appelle `toggleSidebar` pour afficher/masquer la barre latérale.
          >
            {/* Icône de menu. */}
            <MenuOutlinedIcon />
          </IconButton>
        )}

        {/* Conteneur pour la barre de recherche. */}
        <Box
          sx={{
            display: "flex", // Organise les éléments horizontalement.
            backgroundColor: colors.primary[400], // Couleur de fond basée sur le thème.
            padding: 0.2, // Ajoute un espace interne.
            borderRadius: 1, // Arrondit les coins.
          }}
        >
          {/* Champ de saisie pour la recherche. */}
          <InputBase
            sx={{ ml: 1, flex: 1 }} // Ajoute une marge à gauche et fait occuper tout l'espace disponible.
            placeholder="Search" // Texte d'exemple dans le champ.
          />
          {/* Bouton de recherche avec une icône. */}
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Conteneur pour les éléments à droite de la barre supérieure. */}
      <Box display="flex">
        {/* Bouton pour basculer entre les modes clair et sombre. */}
        <IconButton onClick={colorMode?.toggleColorMode}>
          {/* Si le mode actuel est sombre, affiche une icône de lumière. Sinon, affiche une icône de mode sombre. */}
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        {/* Bouton pour afficher les notifications. */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* Bouton pour accéder aux paramètres. */}
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        {/* Bouton pour accéder au profil utilisateur. */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

        {/* Affiche un bouton de menu à droite si l'écran est trop petit (`broken`) et que le mode RTL est activé. */}
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6px 0 2px" }} // Ajoute des marges autour du bouton.
            onClick={() => toggleSidebar()} // Appelle `toggleSidebar` pour afficher/masquer la barre latérale.
          >
            {/* Icône de menu. */}
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
