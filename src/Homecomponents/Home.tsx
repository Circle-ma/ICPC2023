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
            <CalendarTwoTone style={{ fontSize: 30 }} twoToneColor="#5810ff" />
            Contest Date: 14 January 2023 (Saturday)
          </Typography>
          {/* </Box> */}
        </Container>
      </Bg>
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
