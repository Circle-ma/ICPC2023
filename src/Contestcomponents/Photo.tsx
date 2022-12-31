import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Photo() {
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
        Photo Album
      </Typography>
      <Container>
        <Typography>
          ● The photo album of the onsite contest is available&nbsp;
          <Link
            href="https://icpc2023.cse.cuhk.edu.hk/icpc2016/photo.html"
            underline="hover"
            target="_blank"
          >
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
