import {
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Image } from "./Venues";

export default function Info() {
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
        Onsite Contest Info
      </Typography>
      <Container>
        <Typography>
          ● Computing Environment:
          <br />
          <br />
          &emsp;&emsp;○ OS:
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ Ubuntu
          <br />
          <br />
          &emsp;&emsp;○ Editors:
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ vi/vim
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ gvim
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ emacs
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ gedit
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ geany
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ kate
          <br />
          <br />
          &emsp;&emsp;○ Languages:
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ <strong>Java</strong>   (Openjdk version 17.0.5  2022-10-18)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ <strong>C</strong>   (gcc 11.3.0 (Ubuntu 11.3.0-1ubuntu1~22.04))
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ <strong>C++</strong>  (g++ 11.3.0 (Ubuntu 11.3.0-1ubuntu1~22.04))
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ <strong>Python 3</strong>   (PyPy 7.3.10 with GCC 9.4.0 providing python 3.9.15)   A list of the installed Python modules is available {" "}
        <Link
          href="https://image.icpc.global/icpc2023/pypy3.modules.txt"
          underline="hover"
          target="_blank"
        >here</Link>.
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ <strong>Kotlin</strong>  (Version 1.7.21)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ Note that Python 2 is no longer supported.
          <br />
          <br />
          &emsp;&emsp;○ IDEs:
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ Eclipse (version 2022-12)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ IntelliJ (IDEA Community Edition, version 2022.3)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ CLion (version 2022.3)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ Pycharm Community Edition Python IDE (version 2022.3)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ Code::Blocks (version 20.03-3.1)
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;■ VS Code(version 1.74.2)
          <br />
          <br />
          <br />● Compilation flags:
          <br />
          <br />
          &emsp;&emsp;○ C: gcc -x c -g -O2 -std=gnu11 -static ${"{"}files{"}"} -lm
          <br />
          <br />
          &emsp;&emsp;○ C++: g++ -x c++ -g -O2 -std=gnu++20 -static ${"{"}files{"}"}
          <br />
          <br />
          &emsp;&emsp;○ Java: javac -encoding UTF-8 -sourcepath . -d . ${"{"}files{"}"}
          <br />
          <br />
          &emsp;&emsp;○ Python 3: pypy3 -m py_compile ${"{"}files{"}"}
          <br />
          <br />
          &emsp;&emsp;○ Kotlin: kotlinc -d . ${"{"}files{"}"}
          <br />
          <br />● Reference materials installed on team machines:
          <br />
          <br />
          &emsp;&emsp;○ Java Doc
          <br />
          <br />
          &emsp;&emsp;○ C++ STL Doc
          <br />
          <br />
          {/*
          ● Each contestant may bring a printed copy of your Team Reference
          Document. This document may contain up to 25 pages of reference
          materials, single-sided, letter or A4 size, with pages numbered in the
          upper right-hand corner and your university name printed in the upper
          left-hand corner. Text and illustrations must be readable by a person
          with correctable eyesight without magnification from a distance of 1/2
          meter. It may include hand-written comments and corrections on the
          fronts of pages only.
          <br />
          <br />● Each team member may bring an unannotated natural language
          printed dictionary.
          <br />
      */}
          <br />● Judging System:
          <Link href="https://www.domjudge.org" underline="hover" target="_blank">
            DOMjudge
          </Link>
          , the official judging system of the ICPC World Finals, will be
          used.
          <br />
          {/*
          <br />● Contest T-shirt: Each registered participant will be given a
          contest T-shirt. Contestants have to wear the T-shirt during the
          contest. The following table shows the T-shirt size details.
          <br />
          <br />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Size</TableCell>
                  <TableCell align="center">Shoulder</TableCell>
                  <TableCell align="center">Chest</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    S
                  </TableCell>
                  <TableCell align="center">46cm</TableCell>
                  <TableCell align="center">46cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    M
                  </TableCell>
                  <TableCell align="center">47cm</TableCell>
                  <TableCell align="center">51cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    L
                  </TableCell>
                  <TableCell align="center">48cm</TableCell>
                  <TableCell align="center">53cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    XL
                  </TableCell>
                  <TableCell align="center">52.5cm</TableCell>
                  <TableCell align="center">58cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <Box textAlign={"center"}>
            <Image src="https://icpc2023.cse.cuhk.edu.hk/icpc2016/img/t-shirt.png"></Image>
          </Box>
          <br />
      */}
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
