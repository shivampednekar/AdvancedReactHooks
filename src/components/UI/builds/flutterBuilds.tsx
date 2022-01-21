import React, { useRef } from "react"
import styled, { keyframes } from "styled-components"

import UseMousePostion from "../../../hooks/useMousePostion"

function FlutterBuild() {
  const ref = useRef(null)
  const [centerX, centerY, bind] = UseMousePostion(ref)

  return (
    <Container ref={ref} {...bind}>
      <div
        style={{
          transform: `
        rotateX(${centerY / 20}deg)
        rotateY(${centerX / 20}deg)
        `,
        }}
      >
        <div
          className="shapes"
          style={{
            transform: `
            translateX(${centerX / 2.5}px)
            translateY(${centerY / 2.5}px)`,
          }}
        >
          <div className="shape" />
          <div className="genericpanel shape2" />
          <div className="genericpanel shape3" />
          <div className="genericpanel shape4" />
          <div className="genericpanel shape5" />
          <div className="genericpanel shape6" />
        </div>
        <img
          className="man"
          src="/images/comp/Flutter_Builds/man.svg"
          style={{
            transform: `
            translateX(${centerX / 2}px)
            translateY(${centerY / 2}px)`,
          }}
        />
        <img
          className="phone-left"
          src="/images/comp/Flutter_Builds/iphone.png"
          style={{
            transform: `
            translateX(${centerX / 2.5}px)
            translateY(${centerY / 2.5}px)`,
          }}
        />
        <img
          className="phone-right"
          src="/images/comp/Flutter_Builds/pixel4.png"
          style={{
            transform: `
            translateX(${centerX / 3}px)
            translateY(${centerY / 3}px)`,
          }}
        />
        <div
          className="circle1"
          style={{
            transform: `
            translateX(${centerX / 2}px) 
            translateY(${centerY / 2}px)`,
          }}
        />
        <div
          className="circle2"
          style={{
            transform: `
            translateX(${centerX / 3}px) 
            translateY(${centerY / 3}px)`,
          }}
        />
        <div
          className="circle3"
          style={{
            transform: `
            translateX(${centerX / 5}px) 
            translateY(${centerY / 5}px)`,
          }}
        />
        <div
          className="circle4"
          style={{
            transform: `
            translateX(${centerX / 6}px) 
            translateY(${centerY / 6}px)`,
          }}
        />
        <div
          className="circle5"
          style={{
            transform: `
            translateX(${centerX / 3}px) 
            translateY(${centerY / 3}px)`,
          }}
        />
        <div
          className="circle6"
          style={{
            transform: `
            translateX(${centerX / 8}px) 
            translateY(${centerY / 8}px)`,
          }}
        />
        <img
          className="background3"
          src="/images/comp/Flutter_Builds/background3.svg"
          style={{
            transform: `
            translateX(${centerX / 5}px) 
            translateY(${centerY / 5}px)`,
          }}
        />
        <img
          className="background2"
          src="/images/comp/Flutter_Builds/background2.svg"
          style={{
            transform: `
            translateX(${centerX / 6}px) 
            translateY(${centerY / 6}px)`,
          }}
        />
        <img
          className="background1"
          src="/images/comp/Flutter_Builds/background1.svg"
          style={{
            transform: `
            translateX(${centerX / 7}px) 
            translateY(${centerY / 7}px)`,
          }}
        />
      </div>
    </Container>
  )
}

export default FlutterBuild

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 900px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeIn};
  animation-duration: 4s;
  animation-fill-mode: forwards;

  & * {
    transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    pointer-events: none;
  }

  /* RANDOM SHAPES */
  .shape {
    background: rgba(255, 198, 194, 0.4);
    width: 500px;
    height: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px 10px;
    position: relative;
    top: 288px;
    left: 277px;
    z-index: 6;
    backdrop-filter: blur(40px);
    transform: skew(33deg) rotateZ(4deg);
    transform-origin: top left;
  }

  .genericpanel {
    width: 144px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px 10px;
    position: absolute;
    z-index: 6;
    transform: skew(33deg) rotateZ(4deg);
    transform-origin: top left;
    backdrop-filter: blur(40px);
  }

  .shape2 {
    background: rgba(255, 198, 194, 0.4);
    top: 293px;
    left: 344px;
  }

  .shape3 {
    background: rgba(204, 235, 230, 0.4);
    top: 335px;
    left: 370px;
  }

  .shape4 {
    background: rgba(204, 235, 230, 0.4);
    top: 377px;
    left: 390px;
  }

  .shape5 {
    background: rgba(204, 235, 230, 0.4);
    top: 419px;
    left: 414px;
  }

  .shape6 {
    background: rgba(255, 198, 194, 0.4);
    top: 460px;
    left: 438px;
  }

  .shape7 {
    background: rgba(255, 198, 194, 0.4);
    width: 112px;
    height: 2px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 484px;
    left: 793px;
    z-index: 6;
    transform: skew(33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    backdrop-filter: blur(40px);
  }

  .shape8 {
    background: rgba(255, 198, 194, 0.4);
    width: 103px;
    height: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 499px;
    left: 790px;
    z-index: 6;
    transform: skew(-33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    backdrop-filter: blur(40px);
  }

  .shape9 {
    background: rgba(255, 198, 194, 0.4);
    width: 79px;
    height: 16px;
    position: absolute;
    top: 523px;
    left: 782px;
    z-index: 6;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: skew(-33deg) rotateZ(-2.5deg);
    transform-origin: top left;
    backdrop-filter: blur(40px);
  }

  .shapes {
    margin-left: 150px;
    z-index: 8;

    & div {
      backdrop-filter: blur(40px) brightness(300%) saturate(200%);
    }
  }

  /* MOCKUPS */
  .man {
    position: absolute;
    top: 110px;
    left: 500px;
    z-index: 7;
  }

  .phone-left {
    width: 427.47px;
    height: 465.28px;
    position: absolute;
    top: 168px;
    left: 198px;
    z-index: 1;
  }

  .phone-right {
    width: 427.47px;
    height: 465.96px;
    position: absolute;
    top: 152px;
    left: 705px;
    z-index: 2;
  }

  .layout-left {
    position: absolute;
    top: 168px;
    left: 200px;
    z-index: 4;
  }

  .layout-right {
    position: absolute;
    top: 200px;
    left: 700px;
    z-index: 3;
  }

  /* BACKGROUND */
  .background1 {
    position: absolute;
    top: 80px;
    left: 29px;
    z-index: -1;
  }

  .background2 {
    position: absolute;
    top: 0px;
    left: 199px;
    z-index: 0;
    mix-blend-mode: darken;
  }

  .background3 {
    position: absolute;
    top: -123px;
    left: 239px;
    z-index: 1;
    mix-blend-mode: overlay;
  }

  /* CIRCLES */
  .circle1 {
    background-image: radial-gradient(#f29d8f, #f19097);
    width: 55px;
    height: 55px;
    position: absolute;
    top: 93px;
    left: 552px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .circle2 {
    background-image: radial-gradient(#f29d8f, #f19097);
    width: 228px;
    height: 228px;
    position: absolute;
    top: 8px;
    left: 671px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .circle3 {
    background-image: radial-gradient(#f29d8f, #f19097);
    width: 104px;
    height: 104px;
    position: absolute;
    top: 96px;
    left: 838px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .circle4 {
    background-image: radial-gradient(#f29d8f, #f19097);
    width: 118px;
    height: 118px;
    position: absolute;
    top: 23px;
    left: 1070px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .circle5 {
    background-image: radial-gradient(#f29d8f, #f19097);
    width: 162px;
    height: 162px;
    position: absolute;
    top: 624px;
    left: 852px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .circle6 {
    background-image: radial-gradient(#f29d8f, #f19097);
    position: absolute;
    top: 714px;
    left: 965px;
    width: 79px;
    height: 79px;
    border-radius: 50%;
    opacity: 0.2;
  }

  .man {
    transform: translateY(-100px) translateX(-100px);
  }
  .phone-left {
    transform: translateY(100px);
  }
  .phone-right {
    transform: translateY(-100px);
  }
  .layout-left {
    transform: translateY(50px) translateX(50px);
  }
  .layout-right {
    transform: translateY(-100px) translateX(-50px);
  }
  .background1 {
    transform: translateY(40px);
  }
  .background2 {
    transform: translateY(-40px);
  }
  .background3 {
    transform: translatex(-50px) translateY(50px);
  }
  .circle1 {
    transform: translatex(-50px) translateY(30px);
  }
  .circle2 {
    transform: translatex(50px) translateY(50px);
  }
  .circle3 {
    transform: translatex(100px) translateY(-50px);
  }
  .circle4 {
    transform: translatex(50px) translateY(50px);
  }
  .circle5 {
    transform: translatex(50px) translateY(50px);
  }
  .circle6 {
    transform: translatex(50px) translateY(-50px);
  }
`
