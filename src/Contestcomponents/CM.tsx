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
          ●{" "}
          <Link href="opening.pdf" underline="hover" target="_blank">
            Opening Ceremony slides
          </Link>
          <br />
          <br />●{" "}
          <Link href="practice-contest.zip" underline="hover" target="_blank">
            Practice contest materials
          </Link>{" "}
          (password: <code>%osc4r@onc3#more</code> )
          <br />
          <br />●{" "}
          <Link href="official-session.zip" underline="hover" target="_blank">
            Official contest materials
          </Link>{" "}
          (password: <code>W31come$to^HoNg&KonG</code> )
          <br />
          <br />●{" "}
          <Link href="icpc-to-contestant.pdf" underline="hover" target="_blank">
            Guidelines for contestants
          </Link>
          <br />
          <br />●{" "}
          <Link href="icpc-to-coach.pdf" underline="hover" target="_blank">
            Guidelines for coaches
          </Link>
          <br />
          <br />● Contest scoreboard:
          <Link
            href="https://icpchk2023.cse.cuhk.edu.hk/domjudge/public"
            underline="hover"
            target="_blank"
          >
            standings
          </Link>
          .
        </Typography>
        <br />
        <Typography>
          {/*}
          ● Problem Set: <em>to be available soon</em>
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
      */}
        </Typography>
        <br />
        {/*
        <Typography>
          ● Problem set on&nbsp;
          <Link href="open.kattis.com" underline="hover" target="_blank">
            open.kattis.com
          </Link>
          &nbsp;after the contest.
        </Typography>
    */}
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
