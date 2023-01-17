import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Image = styled.img`
  width: 100%;
  max-width: 1000px;
`;

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
    <Container>
      {urlList.map((url) => {
        return <Image src={url}></Image>;
      })}
    </Container>
  );
}
