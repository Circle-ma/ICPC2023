import { Box, Container, Divider, Stack, Typography } from "@mui/material";

export default function Awards() {
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
        Awards
      </Typography>
      <Box textAlign={"center"}>
        <Container>
          <Stack spacing={5}>
            <Typography>
              🥇Gold: At most 10% or 20 teams, whichever is smaller
            </Typography>
            <Typography>
              🥈Silver: At most 20% or 40 teams, whichever is smaller
            </Typography>
            <Typography>
              🥉Bronze: At most 30% or 60 teams, whichever is smaller
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
