import styled from "styled-components";

export const ReviewContainer = styled.div`
  font-family: sans-serif;
  margin: 0px 20px 20px 0px;
`

export const ReviewDate = styled.div`
  font-size: 10px;
  color: #6d6c6c;
  text-align: right;
  width: 38vw;
`
export const ReviewUser = styled.div`
  color: #6d6c6c;
  font-size: 10px;
  text-align: right;
  width: 38vw;
  font-style: italic;
`

export const ReviewStars = styled.div`
  margin: 0px;
`

export const ReviewTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const ReviewBody = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
`

export const ReviewResponse = styled.div`
  font-size: 12px;
  font-weight: bold;
`

export const ReviewResponseBody = styled.p`
  font-size: 10px;
`

export const ReviewRecommend = styled.div`
  margin: 10px 0px;
  font-size: 10px;
`

export const ReviewPhotos = styled.div`
  margin-bottom: 10px;
`

export const ReviewHelpfulness = styled.div`
  font-size: 10px;
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