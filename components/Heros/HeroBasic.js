import React from "react"
import styled from "styled-components"
import { Container } from "../LayoutComponents"
import { ButtonPrimary } from "../Buttons"
import Image from "next/image"
const device = {
  md: "43em",
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;

  background: url("/hero-1.jpg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
`

const HeroBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

export default function HeroBasic() {
  return (
    <HeroGrid>
    <HeroWrapper>
      <Container>
        <Text className="spacing">
          <div>
            <p className="subheader">your personal paradise starts here</p>
            <h2 className="title">outdoor living services done right</h2>
          </div>
          <ButtonPrimary href="/contact">get free estimate</ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
    <HeroBottomText>
      <Container>
        <p>
          Transform your outdoor space into a serene haven with our unique
          landscaping services. From custom design to expert installation, our
          team of experts will help you create a personalized and functional
          living space that showcases your personality and style. Get started
          with your transformation today!
        </p>
      </Container>
    </HeroBottomText>
  </HeroGrid>
  )
}
