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
          ● Note: Visitors without a CU Link card are required to register
          details of their Hong Kong ID cards (or other identification
          documents) at the campus entrance in accordance with existing access
          control measures.
          <br />
          <br />● Registration, Opening ceremony:{" "}
          <Link
            href="https://goo.gl/maps/A2eqXT7soZVyrUDQ7"
            underline="hover"
            target="_blank"
          >
            T.Y. Wong Hall, 5/F, Ho Sin-Hang Engineering Building
          </Link>
        </Typography>
        <br />
        <Box textAlign={"center"}>
          <Image src="img/SHBERB.png"></Image>
        </Box>
        <br />
        <Typography>
          <br />● Practice and Contest: Room 924, 9/F, Ho Sin-Hang Engineering
          Building
          <br />
          <br />● Coach observation: T.Y. Wong Hall, 5/F, Ho Sin-Hang
          Engineering Building
          <br />
          <br />● Closing and Award Ceremony, Banquet:{" "}
          <Link
            href="https://goo.gl/maps/eH2XFxLZvoVPzSmR8"
            underline="hover"
            target="_blank"
          >
            Ho Sin Hang Hall (1/F Chan Chun Hall Hall), S.H. Ho College
          </Link>
          <br />
          <br />● Walks to/from the MTR University Station and the Ho Sin-Hang
          Engineering Building require 10-15 minutes. Walking routes are shown
          below.
          <br />
          <br />
        </Typography>
        <br />
        <Box textAlign={"center"}>
          <Image src="img/walking-routes.png"></Image>
        </Box>
        <Typography>
          <br />● Canteens closest to the Engineering building would be
          the&nbsp;
          <Link
            href="https://goo.gl/maps/xvuWiVBWTgRhREP89"
            underline="hover"
            target="_blank"
          >
            <strong>Benjamin Franklin Centre Coffee Corner</strong>
          </Link>{" "}
          and{" "}
          <Link
            href="https://goo.gl/maps/ykVjn3LeS2tPEcus9"
            underline="hover"
            target="_blank"
          >
            <strong>Basic Medical Sciences Building Snack Bar</strong>
          </Link>
          . A full list of restaurants can be found on this link under{" "}
          <em>Restaurants</em>&nbsp; (mind the business hours!):{" "}
          <Link
            href="https://www.cuhk.edu.hk/english/campus/accommodation.html"
            underline="hover"
            target="_blank"
          >
            CUHK Facilities Info
          </Link>
          <br />
        </Typography>
        <br />
        <Box textAlign={"center"}>
          <Image src="img/canteens.png"></Image>
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
          <br />● Visitors guide can be found&nbsp;
          <Link href="map.html" underline="hover" target="_blank">
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
