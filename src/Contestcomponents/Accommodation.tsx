import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Accommodation() {
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
        Accommodation
      </Typography>
      <Container>
        <Typography>
          ● The contest does not provide campus accommodation. <br />
          <br />● The&nbsp;
          <Link
            href="https://hongkongshatin.regency.hyatt.com/en/hotel/home.html"
            underline="hover"
            target="_blank"
          >
            Hyatt Regency Hong Kong, Sha Tin
          </Link>
          &nbsp;hotel is within walking distance of CUHK.
          <br />
          <br />● The&nbsp;
          <Link
            href="http://www.regalhotel.com/regal-riverside-hotel"
            underline="hover"
            target="_blank"
          >
            Royal Park Hotel, Regal Riverside Hotel
          </Link>
          , and &nbsp;
          <Link
            href="http://www.marriott.com/hotels/travel/hkgst-courtyard-hong-kong-sha-tin/"
            underline="hover"
            target="_blank"
          >
            Courtyard by Marriott Hong Kong Sha Tin
          </Link>
          &nbsp;are located in the same Sha Tin District as CUHK.
          <br />
          <br />
          ●&nbsp;
          <Link
            href="http://www.discoverhongkong.com/eng/promotions/stay/index.jsp"
            underline="hover"
            target="_blank"
          >
            Search for other hotels in Hong Kong
          </Link>
          <br />
          <br />
          ●&nbsp;
          <Link
            href="https://www.yha.org.hk/"
            underline="hover"
            target="_blank"
          >
            Search for youth hostels in Hong Kong
          </Link>
          <br />
          <br />● We recommend commute to CUHK by&nbsp;
          <Link href="http://www.mtr.com.hk/" underline="hover" target="_blank">
            MTR
          </Link>
          . The closest station is University Station.
          <br />
          <br />● Teams may also choose to seek accommodation in Shenzhen,
          mainland China, and travel to CUHK on contest days. Please make sure<br/>
          (1) you reserve ample time for immigration and customs procedures and
          transportation and <br/>
          (2) your visa or entry permit allows multiple
          entries to Hong Kong. For example, some types of entry permits may
          allow only one entry to Hong Kong every seven days.
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
