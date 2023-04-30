import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../Buttons"
import { Container, Flex, Section } from "../LayoutComponents"
import Image from "next/image"

const Text = styled.div``


const ImgStyle = {
  boxShadow: "20px 20px 0px 1px var(--clr-accent)",
  maxHeight: "450px",
}

export default function ProductsImg(props) {
  return (
    <Section>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader">{props.subheader}</p>
              <h2 className="title">{props.title}</h2>
            </div>
            <p>{props.body}</p>
            <ButtonPrimary href={props.to}>{props.button}</ButtonPrimary>
          </Text>
          <Image
          height={100} width={100}
          style={ImgStyle}
            src="/calgary-landscaping-materials.jpg"
            alt="calgary landscaping materials"
          />
        </Flex>
      </Container>
    </Section>
  )
}
