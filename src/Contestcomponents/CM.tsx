import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function CM() {
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
        Contest Materials
      </Typography>
      <Container>
        <Typography>
          ● Contest scoreboard:
          <Link
            href="https://asiahk16.kattis.com/standings"
            underline="hover"
            target="_blank"
          >
            standings
          </Link>
          .
        </Typography>
        <br />
        <Typography>
          ● Problem Set:
          <Link
            href="https://icpc2023.cse.cuhk.edu.hk/icpc2016/hk2016problems-printed.pdf"
            underline="hover"
            target="_blank"
          >
            Printed
          </Link>
          &nbsp;and&nbsp;
          <Link
            href="https://icpc2023.cse.cuhk.edu.hk/icpc2016/hk2016problems-revised.pdf"
            underline="hover"
            target="_blank"
          >
            Revised
          </Link>
          <br />
          The revised version fixes a typo in Problem C (Playing with Numbers),
          and corrects an error in Problem G (Scaffolding) description
          discovered after the contest.
        </Typography>
        <br />
        <Typography>
          ● Problem set on&nbsp;
          <Link href="open.kattis.com" underline="hover" target="_blank">
            open.kattis.com
          </Link>
          &nbsp;after the contest.
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
