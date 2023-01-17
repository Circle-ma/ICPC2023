import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Travel() {
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
        Travel
      </Typography>
      <Container>
        <Typography>
          ● Hong Kong is the world city of Asia. The&nbsp;
          <Link
            href="http://www.hongkongairport.com/"
            underline="hover"
            target="_blank"
          >
            Hong Kong International Airport
          </Link>
          &nbsp;connects Hong Kong to about 200 destinations worldwide,
          including almost 50 in mainland China.
          <br />
          <br />● The contest venue, The Chinese University of Hong Kong (CUHK),
          is also close to two Hong Kong-mainland China border checkpoints:{" "}
          <s>the Lo Wu Control Point (Luohu Port)</s>{" "}
          <em>[currently closed]</em> and the Lok Ma Chau Spur Line Control
          Point (Futian Port). The two control points are connected to{" "}
          <s>Lo Wu Station</s> <em>[currently closed]</em> and Lok Ma Chau
          Station of Hong Kong’s MTR network respectively. Train journey time
          from <s>Lo Wu Station</s> <em>[currently closed]</em> or Lok Ma Chau
          Station to University Station (the closest MTR station of CUHK) is
          about 24-29 minutes.
          <br />
          <br />● Nationals of most countries and territories may visit Hong
          Kong without a visa, and can stay for 7 to 180 days depending on
          nationality. Detailed visa requirements of Hong Kong can be
          found&nbsp;
          <Link
            href="http://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          .<br />
          <br />● The arrangements of mainland Chinese residents visiting Hong
          Kong can be found&nbsp;
          <Link
            href="http://www.immd.gov.hk/hkt/services/visas/overseas-chinese-entry-arrangement.html"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          &nbsp;(Chinese) or&nbsp;
          <Link
            href="http://www.immd.gov.hk/eng/services/visas/overseas-chinese-entry-arrangement.html"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          &nbsp;(English).
          <br />
          <br />● We welcome all Regional Contest guests to extend their stay in
          Hong Kong after the contest.
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
