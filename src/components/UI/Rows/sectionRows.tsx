import React from "react"
import styled from "styled-components"

function SectionRows() {
  return (
    <Wrapper>
      <Index>1</Index>
      <TextWrapper>
        <Title>Intro to Advanced React Hooks</Title>
        <ProgressBar />
        <Description>
          Learn how to build a website with Typescript, Hooks, Contentful and
          Gatsby Cloud
        </Description>
      </TextWrapper>
      <TimeStamp>12:47</TimeStamp>
    </Wrapper>
  )
}

export default SectionRows

const Wrapper = styled.div`
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  max-width: 370px;
  position: relative;
  display: grid;
  grid-template-columns: 36px auto;
  gap: 11px;
  padding: 10px;
  border-radius: 10px;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  & :hover {
    background: rgba(68, 66, 178, 0.1);
    box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
  }
`

const Index = styled.div`
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;

  color: #131313;
  font-style: normal;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 21px;
  line-height: 24px;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 8px;
  text-align: start;
`

const Title = styled.p`
  color: #3913b8;
  max-width: 180px;
  font-size: 15px;
  font-family: Satoshi;
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
`

const ProgressBar = styled.div`
  background: rgba(68, 66, 170, 0.1);
  background-blend-mode: overlay;
  width: 170px;
  height: 5px;
  border-radius: 8px;
`

const Description = styled.p`
  color: #192150;
  font-style: normal;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
`

const TimeStamp = styled.div`
  background: rgba(68, 66, 179, 0.1);
  color: #333;
  background-blend-mode: overlay;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: grid;
  place-items: center;
  padding: 2px 8px;
  border-radius: 5px;

  font-style: normal;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
`
