import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

type Props = {
  title: string;
  subtitle: string;
};

const Headers = ({ title, subtitle }: Props) => {
  //   ******************* S T A T E *****************

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ****************** R E N D E R ************************
  return (
    <Box sx={{ mb: "10px" }}>
      <Typography
        variant="h2" //le fontsize ou  hauter
        color={colors.grey[100]} //la couluer 
        fontWeight="bold" //font 
        sx={{ mb: "3px" }} //margin-bottom , pour qu'on puisse avoir un petite aeration
      >
        {title}
      </Typography>

      <Typography variant="h4" color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Headers;
