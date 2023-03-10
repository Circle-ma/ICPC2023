import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Quota() {
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
        Quota Allocation
      </Typography>
      <Box textAlign={"center"}>
        <Stack spacing={5}>
          <Typography>
            ● No quota for Hong Kong or Macau schools/universities
          </Typography>
          <Typography>
            ● Schools/universities out of Hong Kong and Macau can send at most 3
            official teams
          </Typography>
        </Stack>
      </Box>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
