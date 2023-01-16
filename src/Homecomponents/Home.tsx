import { CalendarTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Awards from "./Awards";
import Fee from "./Fee";
import Format from "./Format";
import News from "./News";
import OC from "./OC";
import Quota from "./Quota";
import BasicTimeline from "./timeLine";

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

interface HomeProps {
  setValue: (value: React.SetStateAction<number>) => void;
}

export default function Home(props: HomeProps) {
  const { setValue } = props;
  return (
    <>

      {/* <Box marginTop={5}> */}
      {/* <BasicTimeline setValue={setValue}></BasicTimeline> */}
      <News></News>
      <Format></Format>
      <Fee></Fee>
      <Awards></Awards>
      <Quota></Quota>
      <Box marginY={5}></Box>
      <OC></OC>
      {/* </Box> */}
    </>
  );
}
