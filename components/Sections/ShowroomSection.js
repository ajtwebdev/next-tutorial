import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../Buttons"
import { Container, Flex, FlexMobileOpp, Section } from "../LayoutComponents"

const Wrapper = styled.div`
  background: var(--clr-dark);
`

const Text = styled.div`
  color: var(--txt-light);
`

const ImgStyles = {
  boxShadow: "-20px 20px 0px 1px var(--clr-tan)",
  marginTop: "2em",
  maxHeight: "450px",
}

export default function ShowroomSection(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Image
            height={100} width={100}
              style={ImgStyles}
              src="/calgary-landscaping-showroom-banner.png"
              alt="calgary landscaping showroom"
            />
            <Text className="spacing">
              <div>
                <p className="subheader"></p>
                <h2 className="title">
                  explore our <span className="tan">indoor idea</span>{" "}center
                </h2>
              </div>
              <p>
                We understand the importance of seeing our work firsthand and
                that's why we have multiple showroom locations conveniently
                located throughout Calgary. Our Calgary landscaping showrooms
                provide an opportunity for customers to view our high-quality
                landscaping products, materials, and designs, as well as to get
                a sense of the exceptional level of craftsmanship that our team
                brings to every project. Our friendly and knowledgeable staff is
                always available to answer any questions and help guide you
                through the selection process. Come visit one of our showrooms
                today and see for yourself why we're the go-to choice for
                landscaping services in Calgary.
              </p>
              <Flex>
                <div>
                  <p className="bold upper">Backyard Canada - 711 48 Ave SE Unit 1</p>
                  <p className="bold upper">Patio Store - 533 58 Ave SE</p>
                  <p className="bold upper">World Of Spas - 6201 Centre S</p>
                </div>
              </Flex>
              <ButtonPrimary href="/showroom">explore showroom</ButtonPrimary>
            </Text>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
