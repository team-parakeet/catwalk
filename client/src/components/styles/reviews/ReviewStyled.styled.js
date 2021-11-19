import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin: 0px 0px 20px 0px;
  width: auto;
  padding: 0px 20px 0px 5px;
`

export const ReviewDate = styled.div`
  font-size: 10pt;
  color: #6d6c6c;
  text-align: right;
`
export const ReviewUser = styled.div`
  color: #6d6c6c;
  font-size: 10pt;
  text-align: right;
  font-style: italic;
`

export const ReviewStars = styled.div`
  margin: 0px;
`

export const ReviewTitle = styled.div`
  font-size: 16pt;
  font-weight: bold;
  margin-bottom: 10px;
`

export const ReviewBody = styled.div`
  margin-bottom: 10px;
  font-size: 12pt;
`

export const ReviewResponse = styled.div`
  font-size: 12pt;
  font-weight: bold;
`

export const ReviewResponseBody = styled.p`
  font-size: 10pt;
`

export const ReviewRecommend = styled.div`
  margin: 20px 0px;
  font-size: 10pt;
`

export const ReviewPhotos = styled.div`
  margin-bottom: 10px;
  font-size: 10pt
`

export const ReviewHelpfulness = styled.div`
  font-size: 10pt;
  color: #6d6c6c;
  margin-bottom: 30px;
`
export const HelpfulLink = styled.a`
  color: #939393;

  &:hover {
    color: #000000;
    text-decoration: none;
  }
`

export const ImgStyled = styled.img`
  height: 100px;
  width: 100px;
`