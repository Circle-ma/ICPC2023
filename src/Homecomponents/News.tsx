import {
  Box,
  Container,
  Divider,
  Link,
  styled,
  Typography,
} from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
function DividerText() {
  const content = (
    <>
    <Typography align="center">
      14 January 2023: The contest is starting! Check out the&nbsp;
      <Link
          href="https://cuhk.zoom.us/j/95766318014?pwd=L0ljempEbHdTbzl3MURweVlJTTVvZz09"
          underline="hover"
          target="_blank"
        >Zoom webinar</Link> for a livestream.
    </Typography>
    <Typography align="center">
      6 January 2023: For the online contest, 
        <Link
          href="icpc-to-contestant.pdf"
          underline="hover"
          target="_blank"
        >guidelines for contestants {" "}
        </Link> and {" "}
        <Link
          href="icpc-to-coach.pdf"
          underline="hover"
          target="_blank"
        >guidelines for coaches
        </Link> are now available.
    </Typography>
    <Typography align="center">
      3 January 2023: Contest details are available. Choose "Contest Details" in the top menu.
    </Typography>
      <Typography align="center">
        23 December 2022: Reminder &mdash; Registration and payment deadline is{" "}
        <strong>29 December 2022</strong> (Thursday).
      </Typography>
      <Typography align="center">
        13 December 2022: Payment gateway is available! After successful
        registration, pay here:[
        <Link
          href="https://cloud.itsc.cuhk.edu.hk/forms/forms/91.aspx"
          underline="hover"
          target="_blank"
        >
          Payment Gateway
        </Link>
        ]
        <br />
        (Note: No refund is available after successful payment.)
      </Typography>
      <Typography align="center">
        21 November 2022: Registration is open! Register here:[
        <Link
          href="https://icpc.global/regionals/finder/HongKong-City-2022"
          underline="hover"
          target="_blank"
        >
          Register Gateway
        </Link>
        ]
      </Typography>
    </>
  );

  return (
    // <Container>
    <Root>
      {content}
      {/* <Divider></Divider> */}
      {/* {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content}
      <Divider></Divider>
      {content} */}
    </Root>
    // </Container>
  );
}

export default function News() {
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
        News
      </Typography>
      <Container>
        <DividerText></DividerText>
      </Container>
      <Box marginY={5}></Box>
      <Divider />
    </>
  );
}
