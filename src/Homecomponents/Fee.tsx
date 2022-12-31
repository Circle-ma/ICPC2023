import { Box, Container, Divider, Link, Typography } from "@mui/material";

export default function Fee() {
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
        Registration Fees
      </Typography>
      <Container>
        <Typography align="center">
          $1560 Hong Kong Dollars
          <br />[
          <Link
            href="https://cloud.itsc.cuhk.edu.hk/forms/forms/91.aspx"
            underline="hover"
            target="_blank"
          >
            Payment Gateway
          </Link>
          ]<br />
          <em>Deadline: 29 December 2022 (Thursday)</em>
          <br />
          (Note: Teams will be accepted to the contest on icpc.global only after
          paying the registration fees. No refund is available after successful
          payment.)
        </Typography>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
