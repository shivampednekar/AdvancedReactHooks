import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const Circles = () => {
  const [animation, setAnimation] = useState(false)

  return (
    <Wrapper onClick={() => setAnimation(true)}>
      <Circle animation={animation} />
      <Circle2 animation={animation} />
    </Wrapper>
  )
}

export default Circles

// ANIMATION
const scale = keyframes`
  0% {transform: scale(1)}
  100% {transform: scale(1.2)}
`

const Wrapper = styled.div`
  width: 420px;
  height: 420px;
`

const Circle = styled.div`
  background: linear-gradient(
    180deg,
    #63a4ff 0%,
    rgba(195, 236, 255, 0.0853208) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 420px;
  height: 420px;
  position: absolute;
  left: calc(50% - 420px / 2);
  top: calc(50% - 420px / 2);
  border-radius: 210px;
  animation: ${scale} 5s 1s linear forwards;
  animation-play-state: ${props => (props.animation ? "running" : "paused")};
`

const Circle2 = styled(Circle)`
  width: 260px;
  height: 260px;
  left: calc(50% - 260px / 2);
  top: calc(50% - 260px / 2);
  border-radius: 135px;
`

/* background-color: #63a4ff; */
/* background-image: linear-gradient(180deg, #63a4ff 0%, #83eaf1 74%); */
