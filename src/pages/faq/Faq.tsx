import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Headers from "../../components/Headers";
type Props = {};

const Faq = ({}: Props) => {
  //  ************************* S T A T E********************
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // ********************** R E N   D  E R ********************
  return (
    <Box margin="20px">
      <Headers title="FAQ" subtitle="your faq " />
      <Accordion sx={{ backgroundColor: colors.primary[400], marginTop: 3 }} defaultExpanded>
        {/* ************titre****************** */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
        </AccordionSummary>

        {/* ******************details ******************* */}
        <AccordionDetails>
          <Typography variant="h5">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, enim ad vel dignissimos cupiditate ab esse similique at quod deserunt a sint aliquid perferendis, animi commodi optio voluptas libero laboriosam rem labore, quibusdam molestias quasi! Nemo amet ipsa officiis ullam placeat quod iure natus sed dolores culpa, est velit doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{ backgroundColor: colors.primary[400], marginTop: 3 }}>
        {/* ************titre****************** */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
        </AccordionSummary>

        {/* ******************details ******************* */}
        <AccordionDetails>
          <Typography variant="h5">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, enim ad vel dignissimos cupiditate ab esse similique at quod deserunt a sint aliquid perferendis, animi commodi optio voluptas libero laboriosam rem labore, quibusdam molestias quasi! Nemo amet ipsa officiis ullam placeat quod iure natus sed dolores culpa, est velit doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: colors.primary[400], marginTop: 3 }}>
        {/* ************titre****************** */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
        </AccordionSummary>

        {/* ******************details ******************* */}
        <AccordionDetails>
          <Typography variant="h5">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, enim ad vel dignissimos cupiditate ab esse similique at quod deserunt a sint aliquid perferendis, animi commodi optio voluptas libero laboriosam rem labore, quibusdam molestias quasi! Nemo amet ipsa officiis ullam placeat quod iure natus sed dolores culpa, est velit doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: colors.primary[400], marginTop: 3 }}>
        {/* ************titre****************** */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Typography>
        </AccordionSummary>

        {/* ******************details ******************* */}
        <AccordionDetails>
          <Typography variant="h5">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, enim ad vel dignissimos cupiditate ab esse similique at quod deserunt a sint aliquid perferendis, animi commodi optio voluptas libero laboriosam rem labore, quibusdam molestias quasi! Nemo amet ipsa officiis ullam placeat quod iure natus sed dolores culpa, est velit doloremque!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
