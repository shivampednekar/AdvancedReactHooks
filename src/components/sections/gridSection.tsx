import React from "react"
import styled from "styled-components"

import SectionRows from "../UI/Rows/sectionRows"

const GridSection = () => {
  return (
    <Wrapper>
      <Title>20 Topics</Title>
      <Description>
        All techniques are explained step-by-step, in a beginner-friendly format
        so that you can easily follow in a cohesive way.
      </Description>
      <Grid>
        <SectionRows />
        <SectionRows />
        <SectionRows />
      </Grid>
    </Wrapper>
  )
}

export default GridSection

const Wrapper = styled.div`
  max-width: 1234px;
  position: relative;
  display: grid;
  gap: 12px;
  text-align: center;
  margin: 0 auto;
  padding: 0 20px;
`

const Title = styled.p`
  color: #fafafa;
  font-family: Montserrat;
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
  text-transform: uppercase;
`

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-height: 460px;
  font-size: 14px;
  line-height: 130%;
  margin: 0 auto;
`

const Grid = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
`
