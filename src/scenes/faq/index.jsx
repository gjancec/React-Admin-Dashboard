import {Box, useTheme, Typography} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary  from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {tokens} from "../../theme"
import Header from "../../components/Header";

const FAQ =() => {
const theme=useTheme();
const colors = tokens(theme.palette.mode);


return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Accordion from Matrial UI"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 1
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
       <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 2
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
       <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
       <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
       <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
       <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color={colors.violet[100]} variant="h5">
                    Question 6
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </Typography>
            </AccordionDetails>

       </Accordion>
    </Box>
)
}
export default FAQ;