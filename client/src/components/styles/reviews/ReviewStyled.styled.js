import styled from "styled-components";

export const ReviewContainer = styled.div`
  margin: 0px 20px 20px 0px;
  width: 50vw;
`

export const ReviewDate = styled.div`
  font-size: 9pt;
  color: #6d6c6c;
  text-align: right;
`
export const ReviewUser = styled.div`
  color: #6d6c6c;
  font-size: 9pt;
  text-align: right;
  font-style: italic;
`

export const ReviewStars = styled.div`
  margin: 0px;
`

export const ReviewTitle = styled.div`
  font-size: 14pt;
  font-weight: bold;
  margin-bottom: 10px;
`

export const ReviewBody = styled.div`
  margin-bottom: 10px;
  font-size: 10pt;
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
  font-size: 9pt;
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