import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Home from "./Homecomponents/Home";
import Contest from "./Contestcomponents/Contest";

const Bg = styled.div`
  background-image: url(wave.svg);
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-position: center center; */
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  /* height: auto; */
  position: center center;
`;

const Rubbish = styled.img`
  width: 100%;
  max-width: 10000px;
  /* height: auto; */
  position: center center;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffaa00",
    },
  },
});

interface TabPanelProps {
  //   children?: React.ReactNode;
  index: number;
  value: number;
  setValue: (value: React.SetStateAction<number>) => void;
}

function TabPanel(props: TabPanelProps) {
  const { value, index, setValue } = props;

  return (
    <div hidden={value !== index}>
      {value === 0 && <Home setValue={setValue} />}
      {value === 1 && <Contest />}
      {/* {value === 2 && <Contest></Contest>} */}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            // centered
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Home" sx={{ fontSize: 18 }} />
            {/* <Tab label="Online Preliminary" sx={{ fontSize: 18 }} /> */}
            <Tab label="Onsite Contest" sx={{ fontSize: 18 }} />
          </Tabs>
        </ThemeProvider>
      </Container>

      {/* <Container> */}
      <TabPanel value={value} index={0} setValue={setValue} />
      <TabPanel value={value} index={1} setValue={setValue} />
      {/* <TabPanel value={value} index={2} setValue={setValue} /> */}
      {/* </Container> */}
    </>
  );
}
