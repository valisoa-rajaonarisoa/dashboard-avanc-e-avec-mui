import { ThemeProvider } from "@emotion/react";
import { useMode, ColorModeContext } from "./theme";
import { CssBaseline } from "@mui/material";
import Topbar from "./scenes/global/Topbar";

import { MyProSidebarProvider } from "./scenes/global/sidebar/sidebarContext";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

type Props = {};

const App = ({}: Props) => {
  // Utilisation du hook `useMode` pour obtenir le thème (`theme`) et l'objet `colorMode` contenant la méthode `toggleColorMode`
  const [theme, colorMode] = useMode();

  const {pathname}=useLocation()
  return (
    // Le `ColorModeContext.Provider` fournit l'objet `colorMode` à tous les composants enfants via le contexte React
    <ColorModeContext.Provider
      value={
        colorMode as {
          toggleColorMode: () => void;
        }
      }
    >
      {/* Le `ThemeProvider` applique le thème (`theme`) à tous les composants enfants */}
      <ThemeProvider theme={theme}>
        {/* `CssBaseline` réinitialise les styles CSS par défaut pour garantir une base propre et cohérente */}
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
              <Topbar />

              {/* *******************si c'est du / donc on met le dashboard ******* */}
               {
                pathname=="/" && <Dashboard/>
               }
              <Outlet/>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App; // Exporte le composant `App` comme composant par défaut
