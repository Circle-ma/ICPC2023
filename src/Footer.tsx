import styled from "@emotion/styled";
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
// import EmailIcon from "@mui/icons-material/Email";

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const CUImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const Bg = styled.div`
  background-color: white;
  max-width: 420px;
`;

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1B1C1D" }} paddingBottom={20} paddingTop={5}>
      <Container>
        <BasicGrid></BasicGrid>
      </Container>
    </Box>
  );
}

function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container> */}
      {/* <Grid xs={6}>
          <Typography color={"gray"} variant="h5">
            PRIMARY SPONSOR
          </Typography>
          <Image src="ibm.png"></Image>
          <Typography color={"gray"} variant="h5" marginTop={5}>
            PRIMARY SPONSOR
          </Typography>
          <Image src="ibm.png"></Image>
          <Box padding={1} display="inline"></Box>
          <Image src="ibm.png"></Image>
          <Box padding={1}></Box>
          <Image src="ibm.png"></Image>
          <Box padding={1} display="inline"></Box>
          <Image src="ibm.png"></Image>
        </Grid> */}
      {/* <Grid> */}
      <Typography color={"gray"} variant="h5">
        CONTACT US
      </Typography>
      {/* <EmailRoundedIcon></EmailRoundedIcon> */}
      {/* <EmailIcon></EmailIcon> */}
      <Typography color={"gray"} variant="body2" marginTop={5}>
        <EmailRoundedIcon></EmailRoundedIcon>
      </Typography>
      <Link href="mailto:icpc2023@cse.cuhk.edu.hk">
        icpc2023@cse.cuhk.edu.hk
      </Link>
      {/* <Typography color={"gray"} variant="body1">
            icpc2023@cse.cuhk.edu.hk
          </Typography> */}
      <Typography color={"gray"} variant="body2" marginTop={5}>
        <LocationCityRoundedIcon></LocationCityRoundedIcon>
      </Typography>
      <Typography color={"gray"} variant="body2">
        Organizer: Department of Computer Science and Engineering, Faculty of
        Engineering, The Chinese University of Hong Kong
      </Typography>
      <Box paddingY={2}></Box>
      <Grid container>
        <Grid xs={12} sm={6}>
          <CUImage src="cuhk.jpg"></CUImage>
        </Grid>
        <Grid xs={12} sm={6}>
          {/* <Box sx={{ display: "inline" }} paddingX={2}></Box> */}
          <Bg>
            <CUImage src="cselogo.png"></CUImage>
          </Bg>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} sm={6}>
          <CUImage src="cuhk-erg.png"></CUImage>
        </Grid>
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
      <br />
      <br />
      <Typography color={"gray"} variant="body2">
        Co-host: University of Macau
      </Typography>
      <Box paddingY={2}></Box>
      <Grid container>
        <Grid xs={12} sm={6}>
          <CUImage src="um-logo.png" style={{ background: "white" }}></CUImage>
        </Grid>
      </Grid>
      <Typography color={"gray"} variant="body2">
        Last updated: 14 January 2023
      </Typography>
    </Box>
  );
}
