import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function AT() {
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
        Advancing Teams
      </Typography>
      <Container>
        <Typography>
          ● The teams that can advance to the onsite contest are listed&nbsp;
          <Link
            href="https://icpc2023.cse.cuhk.edu.hk/icpc2016/advancement.pdf"
            underline="hover"
            target="_blank"
          >
            here
          </Link>
          &nbsp;in the PDF file.
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
