import styled from "@emotion/styled";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import {
  CalendarOutlined,
  CalendarTwoTone,
  EnvironmentTwoTone,
} from "@ant-design/icons";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CM from "./CM";
import AT from "./AT";
import Schedule from "./Schedule";
import Venues from "./Venues";
import Travel from "./Travel";
import Accommodation from "./Accommodation";
import Info from "./Info";
import Photo from "./Photo";
import RCD from "./RCD";

const Bg = styled.div`
  background-image: url(wave.svg);
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-position: center center; */
`;

const Rubbish = styled.img`
  width: 100%;
  max-width: 10000px;
  /* height: auto; */
  position: center center;
`;

export default function Contest() {
  return (
    <>
      <Bg>
        <Container>
          {/* <Box textAlign={"center"}> */}
          {/* <Image src="icpc-logo-full.png"></Image> */}
          {/* <Typography
        variant="h5"
        color="transparent"
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#d5da98,#ed782a ,#ebb73d ,#cc4621)",
          WebkitBackgroundClip: "text",
        }}
        // fontWeight="bold"
        align="center"
        marginTop={4}
      >
        2023 ICPC Asia Hong Kong Regional
      </Typography> */}
          <Rubbish src="icpc2023.svg"></Rubbish>
          {/* <CalendarMonthRoundedIcon></CalendarMonthRoundedIcon> */}

          <Typography
            variant="h6"
            color="transparent"
            sx={{
              backgroundImage:
                "linear-gradient(45deg,#0008ff -5%,#ff00ff 105%);",
              WebkitBackgroundClip: "text",
            }}
            align="center"
            // marginTop={8}
            // paddingBottom={4}
          >
            <CalendarTwoTone style={{ fontSize: 30 }} twoToneColor="#5810ff" />
            Contest Date: 14 January 2023 (Saturday)
          </Typography>
          <Typography
            variant="h6"
            color="transparent"
            sx={{
              backgroundImage:
                "linear-gradient(45deg,#0008ff -5%,#ff00ff 105%);",
              WebkitBackgroundClip: "text",
            }}
            align="center"
            // marginTop={8}
            paddingBottom={4}
          >
            <EnvironmentTwoTone
              style={{ fontSize: 30 }}
              twoToneColor="#50b2ff"
            />
            <Link
              href="https://goo.gl/maps/VcUc1u2Pn3AtXahr5"
              underline="hover"
              target="_blank"
            >
              Ho Sin-Hang Engineering Building, The Chinese University of Hong
              Kong
            </Link>
          </Typography>
        </Container>
      </Bg>
      <CM />
      <AT />
      <Schedule />
      <Venues />
      <Travel />
      <Accommodation />
      <Info />
      <Photo />
      <RCD />
    </>
  );
}
