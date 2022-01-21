import React from "react"
import styled from "styled-components"
import { useWindowSize } from "react-use"

import PurchaseButton from "../components/UI/purchaseButton"
import CourseCard from "../components/UI/Cards/courseCard"
import FlutterBuild from "../components/UI/builds/flutterBuilds"

const IndexPage = () => {
  const { width } = useWindowSize()
  return (
    <Container>
      <HeroContainer>
        <CourseCard />
        <TextWrapper>
          <Logo src="/images/logos/react-logo.svg" alt="lan logo" />
          <Title>Advanced React Hooks</Title>
          <Caption>20 SECTIONS - 5 HOURS OF VIDEO</Caption>
          <Description>
            Learn how to build a website with Typescript, Hooks, Contentful and
            Gatsby Cloud
          </Description>
          <AuthorWrapper>
            <AuthorImage src="/images/avatars/Meng.png" alt="Author Image" />
            <Caption>Taught by Meng To</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <Stack>
            Purchase includes access to 30+ courses, 100+ premium tutorials,
            120+ hours of videos, source files and certificates.
          </Stack>
        </TextWrapper>
      </HeroContainer>
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  /* height: 1427px; */
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  overflow: hidden;
`

const HeroContainer = styled.div`
  max-width: 1234px;
  display: grid;
  grid-template-columns: 360px auto;
  gap: 60px;
  justify-content: center;
  padding: 190px 20px 0px;
  margin: 0 auto;

  & .course_card {
    margin-top: 39px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  /* padding-top: 220px; */

  @media (max-width: 780px) {
    text-align: center;
    justify-items: center;
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  color: #fafafa;
  max-width: 500px;
  font-family: Montserrat;
  font-size: 60px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0.8px;
  line-height: 72px;
  margin: 0;
  mix-blend-mode: normal;
  text-shadow: rgb(0 0 0 / 30%) 0px 20px 40px;

  @media (max-width: 780px) {
    font-size: 54px;
  }
`

const Caption = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 130%;
  text-transform: uppercase;
`

const Description = styled.p`
  max-width: 500px;
  color: #d4d4d4;
  font-size: 19px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.9px;
  line-height: 150%;

  @media (max-width: 780px) {
    font-size: 17px;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`

const AuthorName = styled.span``

const Stack = styled.span`
  color: #999999;
  max-width: 280px;
  font-size: 13px;
  font-style: normal;
  line-height: 130%;
`

const FlutterWrapper = styled.div`
  margin: 100px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }
`
