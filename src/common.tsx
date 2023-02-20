import Typography from "@mui/material/Typography";

interface Props {
  Content: string;
}

const Topic: React.FC<Props> = ({ Content }) => {
  return (
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
      {Content}
    </Typography>
  );
};

export default Topic;
