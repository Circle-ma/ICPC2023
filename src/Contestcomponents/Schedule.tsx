import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Schedule() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        marginY={5}
        color="transparent"
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#2ca2b4,#5598de 24%,#7f87ff 45%,#f65aad 76%,#ec3d43);",
          WebkitBackgroundClip: "text",
        }}
      >
        Schedule
      </Typography>
      <Container>
        <CustomizedTables />
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5810ff",
    color: theme.palette.common.white,
    // color: "#000000",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Event</StyledTableCell>
            <StyledTableCell align="center">Venue</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key="08:30-08:50">
            <StyledTableCell component="th" scope="row" align="center">
              08:30&ndash;08:50
              <br />
              <em>
                <small>*Updated*</small>
              </em>
            </StyledTableCell>
            <StyledTableCell>
              <strong>Opening Speech</strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              T.Y. Wong Hall, 5/F,
              <Link
                href="https://goo.gl/maps/A2eqXT7soZVyrUDQ7"
                underline="hover"
                target="_blank"
              >
                Ho Sin-Hang Engineering Building, CUHK
              </Link>{" "}
              <br />+<br />
              <Link
                href="https://cuhk.zoom.us/j/95766318014?pwd=L0ljempEbHdTbzl3MURweVlJTTVvZz09"
                underline="hover"
                target="_blank"
              >
                Livestreamed on Zoom Webinar
              </Link>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="08:50-09:10">
            <StyledTableCell component="th" scope="row" align="center">
              08:50–09:10
              <br />
              <em>
                <small>*Updated*</small>
              </em>
            </StyledTableCell>
            <StyledTableCell>
              <strong>
                Registration <br />
                (simultaneous for both onsite and online teams)
              </strong>
              <br />
              ● Verification of contestant details <br />● Contestants have to
              present their student ID cards
            </StyledTableCell>
            <StyledTableCell align="center">
              T.Y. Wong Hall, 5/F, Ho Sin-Hang Engineering Building, CUHK
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="09:30-11:30">
            <StyledTableCell component="th" scope="row" align="center">
              09:30–11:00
            </StyledTableCell>
            <StyledTableCell>
              <strong>
                Practice Contest
                <br />
                (simultaneous for both onsite and online teams)
              </strong>
              <br />
              ● Rule Briefing <br />● Practice time
            </StyledTableCell>
            <StyledTableCell align="center">
              Room 924, 9/F, Ho Sin-Hang Engineering Building, CUHK
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="12:30-17:30">
            <StyledTableCell component="th" scope="row" align="center">
              12:30&ndash;17:30
            </StyledTableCell>
            <StyledTableCell>
              <strong>
                Programming Contest
                <br />
                (simultaneous for both onsite and online teams)
              </strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              Room 924, 9/F, Ho Sin-Hang Engineering Building <br />+<br />
              <Link
                href="https://cuhk.zoom.us/j/95766318014?pwd=L0ljempEbHdTbzl3MURweVlJTTVvZz09"
                underline="hover"
                target="_blank"
              >
                Livestreamed on Zoom Webinar
              </Link>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="18:30-19:30">
            <StyledTableCell component="th" scope="row" align="center">
              18:30&ndash;19:30
            </StyledTableCell>
            <StyledTableCell>
              <strong>Closing Ceremony and Banquet</strong>
              <br />
              ● Problem analysis <br />● Award ceremony
            </StyledTableCell>
            <StyledTableCell align="center">
              <Link
                href="https://goo.gl/maps/eH2XFxLZvoVPzSmR8"
                underline="hover"
                target="_blank"
              >
                Ho Sin Hang Hall, S.H. Ho College
              </Link>
              , CUHK <br />+<br />
              <Link
                href="https://cuhk.zoom.us/j/95766318014?pwd=L0ljempEbHdTbzl3MURweVlJTTVvZz09"
                underline="hover"
                target="_blank"
              >
                Livestreamed on Zoom Webinar
              </Link>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
