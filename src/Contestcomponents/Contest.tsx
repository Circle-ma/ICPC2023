import styled from "@emotion/styled";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
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

      <CM />
      <Schedule />
      <Venues />
      <Travel />
      <Accommodation />
      <Info />
      {/*}
      <Photo />
      <RCD />
          */}
    </>
  );
}
