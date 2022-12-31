import styled from "@emotion/styled";
import { Box, Container, Divider, Link, Typography } from "@mui/material";

export const Image = styled.img`
  width: 100%;
  max-width: 1000px;
`;

export default function Venues() {
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
        Venues
      </Typography>
      <Container>
        <Typography>
          ● Registration, Opening ceremony: LT, 9/F, William M.W. Mong
          Engineering Building
          <br />
          <br />● Practice session, Contest: Rm 924, 9/F, Ho Sin-Hang
          Engineering Building
          <br />
          <br />● Coach observation, Sharing session: T.Y. Wong Hall, 5/F, Ho
          Sin-Hang Engineering Building
          <br />
          <br />● Banquet, Award ceremony: Ho Sin Hang Hall, S.H. Ho College
        </Typography>
        <br />
        <Box textAlign={"center"}>
          <Image src="https://icpc2023.cse.cuhk.edu.hk/icpc2016/img/SHBERB.png"></Image>
        </Box>
        <br />
        <Typography>
          ● Walks to/from the MTR University Station and the Ho Sin-Hang
          Engineering Building require 10-15 minutes. Walking routes are shown
          below.
        </Typography>
        <br />
        <Box textAlign={"center"}>
          <Image src="https://icpc2023.cse.cuhk.edu.hk/icpc2016/img/SHBWalkingRoute.png"></Image>
        </Box>
        <br />
        <Typography>
          ● Detailed campus map can be found&nbsp;
          <Link
            href="http://www.cuhk.edu.hk/english/campus/cuhk-campus-map.html"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          .<br />
          <br />● Visitors guide can be found &nbsp;
          <Link
            href="https://icpc2023.cse.cuhk.edu.hk/icpc2016/map.html"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          .
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
