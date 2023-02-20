import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { Image } from "antd";
import Topic from "../common";

// export const Image = styled.img`
//   width: 100%;
//   max-width: 1000px;
// `;

export default function PhotoGallery() {
  function getImageUrl(name: string) {
    return new URL(`../photos/DSC0${name}.JPG`, import.meta.url).href;
  }
  let urlList = [];
  let i = 6806;
  for (i; i <= 6811; i++) {
    urlList.push(getImageUrl(i.toString()));
  }
  return (
    <>
      <Topic Content="Photos" />
      {/* <Container> */}
      <Box textAlign={"center"}>
        {/* you can group the photos by create a new Image.PreviewGroup and
          urlList */}
        <Image.PreviewGroup>
          {urlList.map((url) => {
            return <Image width={400} src={url}></Image>;
          })}
        </Image.PreviewGroup>
      </Box>
      {/* </Container> */}
      <Box marginY={5}></Box>
    </>
  );
}
