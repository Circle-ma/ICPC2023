import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Schedule() {
  return (
    <>
      <Typography
        variant="h3"
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
          <StyledTableRow key="13:00-14:15">
            <StyledTableCell component="th" scope="row" align="center">
              13:00-14:15
            </StyledTableCell>
            <StyledTableCell>
              <strong>Registration</strong>
              <br />
              ● Verification of contestant details <br />● Contestants have to
              bring their travel documents and student ID cards <br />●
              Collection of welcome pack
            </StyledTableCell>
            <StyledTableCell align="center">
              LT, 9/F, William M.W. Mong Engineering Building
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="14:15-14:45">
            <StyledTableCell component="th" scope="row" align="center">
              14:15-14:45
            </StyledTableCell>
            <StyledTableCell>
              <strong>Opening Ceremony</strong>
              <br />
              ● RCD welcome speech <br />● Team introduction
            </StyledTableCell>
            <StyledTableCell align="center">
              LT, 9/F, William M.W. Mong Engineering Building
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow key="15:30-16:30">
            <StyledTableCell component="th" scope="row" align="center">
              15:30-16:30
            </StyledTableCell>
            <StyledTableCell>
              <strong>Practice Session</strong>
              <br />
              ● Rule Briefing <br />● Practice time
            </StyledTableCell>
            <StyledTableCell align="center">
              Rm 924, 9/F, Ho Sin-Hang Engineering Building
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
