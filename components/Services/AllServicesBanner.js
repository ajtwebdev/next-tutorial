import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { Container, Section } from "../LayoutComponents"
import Link from "next/link"
import { ButtonPrimary } from "../Buttons"

const Text = styled.div`
  max-width: 110ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  margin-bottom: var(--spacer);
`

const WrapperDark = styled.div`
  background: var(--clr-accent);
  margin-bottom: var(--spacer);
  padding-top: 2em;
  padding-bottom: 2em;
`

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const ItemLink = styled(props => <Link {...props} />)`
  position: relative;
  border-top: 6px solid var(--clr-accent);
  .service-img {
    height: 300px;
    width: 100%;
    z-index: 1;
  }
  h3 {
    font-family: var(--ff-alfa);
    font-size: var(--fs-2);
    color: var(--txt-light);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--clr-dark);
  }

  &:hover {
    .overlay {
      opacity: 0.8;
      z-index: 2;
    }
    h3 {
      z-index: 3;
    }
  }
`

export default function AllServicesBanner() {
  return (
    <Section className="spacing-lg">
      <Container>
        <Text>
          {/* <p className="subheader accent">find the service you need</p> */}
          <h2 className="title">
            take a closer look at our calgary landscaping services
          </h2>
        </Text>
      </Container>
      <Container className="spacing">
        <h3 className="subheader accent center">
          popular hardscaping services
        </h3>
        <GridAuto>
          <ItemLink href="/residential-services/hardscaping/decks">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-decks.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">decks</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/fence-builders-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-fences.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fences</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/pavers">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-pavers.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pavers</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/outdoor-landscape-lighting-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-lighting.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">lighting</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/concrete-contractors-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-concrete.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">concrete</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/patios">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-patios.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">patios</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/calgary-pergolas-and-patio-structures">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-pergolas.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pergolas</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/outdoor-fireplace-calgary-landscaper">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-fire-pits.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fire pits</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/stairs-and-stepping-stones">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-stairs.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">stairs & stepping stones</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/outdoor-kitchen-calgary-landscaping-services">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-outdoor-kitchens.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">outdoor kitchens</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/calgary-landscape-water-features">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-water-features.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">water features</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/concrete-curbing-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-curbing.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">curbing</h3>
            <div className="overlay"></div>
          </ItemLink>
        </GridAuto>
      </Container>
      <WrapperDark>
        <Container>
          <h3 className="subheader light center">
            popular outdoor living services
          </h3>
          <GridAuto>
            <ItemLink href="/residential-services/hardscaping/decks">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-decks.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">decks</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/fence-builders-calgary">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-fences.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">fences</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/pavers">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-pavers.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">pavers</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/outdoor-living/outdoor-landscape-lighting-calgary">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-lighting.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">lighting</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/concrete-contractors-calgary">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-concrete.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">concrete</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/patios">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-patios.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">patios</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/outdoor-living/calgary-pergolas-and-patio-structures">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-pergolas.png"
                alt="calgary landscaping services"
              />
              <h3 className="upper">pergolas</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/outdoor-fireplace-calgary-landscaper">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-fire-pits.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">fire pits</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/hardscaping/stairs-and-stepping-stones">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-stairs.png"
                alt="calgary landscaping services"
              />
              <h3 className="upper">stairs & stepping stones</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/outdoor-living/outdoor-kitchen-calgary-landscaping-services">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-outdoor-kitchens.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">outdoor kitchens</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/outdoor-living/calgary-landscape-water-features">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-water-features.jpg"
                alt="calgary landscaping services"
              />
              <h3 className="upper">water features</h3>
              <div className="overlay"></div>
            </ItemLink>
            <ItemLink href="/residential-services/outdoor-living/concrete-curbing-calgary">
              <Image
              
                className="service-img" height={100} width={100}
                src="/calgary-curbing.png"
                alt="calgary landscaping services"
              />
              <h3 className="upper">curbing</h3>
              <div className="overlay"></div>
            </ItemLink>
          </GridAuto>
        </Container>
      </WrapperDark>
      <Container>
        <h3 className="subheader center accent">
          popular softscaping services
        </h3>
        <GridAuto>
          <ItemLink href="/residential-services/hardscaping/decks">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-decks.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">decks</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/fence-builders-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-fences.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fences</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/pavers">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-pavers.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pavers</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/outdoor-landscape-lighting-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-lighting.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">lighting</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/concrete-contractors-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-concrete.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">concrete</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/patios">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-patios.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">patios</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/calgary-pergolas-and-patio-structures">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-pergolas.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">pergolas</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/outdoor-fireplace-calgary-landscaper">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-fire-pits.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">fire pits</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/hardscaping/stairs-and-stepping-stones">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-stairs.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">stairs & stepping stones</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/outdoor-kitchen-calgary-landscaping-services">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-outdoor-kitchens.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">outdoor kitchens</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/calgary-landscape-water-features">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-water-features.jpg"
              alt="calgary landscaping services"
            />
            <h3 className="upper">water features</h3>
            <div className="overlay"></div>
          </ItemLink>
          <ItemLink href="/residential-services/outdoor-living/concrete-curbing-calgary">
            <Image
            
              className="service-img" height={100} width={100}
              src="/calgary-curbing.png"
              alt="calgary landscaping services"
            />
            <h3 className="upper">curbing</h3>
            <div className="overlay"></div>
          </ItemLink>
        </GridAuto>
      </Container>
    </Section>
  )
}
