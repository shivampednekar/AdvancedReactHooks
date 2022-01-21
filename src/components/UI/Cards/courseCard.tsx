import React from "react"
import styled from "styled-components"

import Circles from "../../animations/circles"

const CourseCard = () => {
  return (
    <Wrapper className="course_card">
      <AnimationContainer>
        <Circles />
      </AnimationContainer>
      <Illustration
        src="images/illustrations/Illustration-1.png"
        alt="Illustration"
      />
    </Wrapper>
  )
}

export default CourseCard

const Wrapper = styled.div`
  max-width: 360px;
  width: 100%;
  height: 480px;
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  background: linear-gradient(200.42deg, #2980b9, #2c3e50);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
`

const AnimationContainer = styled.div`
  position: absolute;
  width: 360px;
  padding-top: 30px;
  mix-blend-mode: overlay;
  overflow: hidden;
`

const Illustration = styled.img`
  width: 300px;
`

// 07min 57sec completed
