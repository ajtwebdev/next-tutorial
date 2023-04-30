
import Link  from "next/link"
import React from "react"
import styled from "styled-components"
import { Container } from "./LayoutComponents"
import { FaPhone, FaRegClock } from "react-icons/fa"
import { MdLocationOn, MdOutlineEmail } from "react-icons/md"
import FormFooter from "./Forms/FormFooter"
import Map from "./Map"
import InstagramFeed from "./InstagramFeed"
import Image from "next/image"

const device = {
  md: "48em",
  lg: "57em",
}

const IconStyle = {
  color: "var(--clr-accent)",
}

const Flex = styled.div`
  display: flex;

  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer-lg);
    }
  }
`

const Wrapper = styled.footer``

const FooterWrapperTop = styled.div`
  padding: 4em 0 3rem 0;
  background: var(--clr-dark);

  h4 {
    color: var(--clr-tan);
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;s
  }
`

const FooterWrapperBottom = styled.div`
  padding: 4em 0 1em 0;
  background: var(--clr-accent);

  h4 {
    color: var(--clr-tan);
  }

  ul {
    list-style-type: none;
    
  }
`

const Socials = styled.div`
  display: flex;

  & > * + * {
    margin-left: 15px;
  }

  div {
    display: flex;

    & > * + * {
      margin-left: 10px;
    }
  }

`

const Divider = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--clr-accent);

  @media screen and (max-width: ${device.md}) {
    display: none;
  }
`

const ContactLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  color: var(--txt-light);
  letter-spacing: 0.1em;
  transition: all 0.25s linear;

  // aligning text with icon
  display: flex;
  align-items: center;
  gap: 2px;

  :hover,
  :focus {
    opacity: 0.7;
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--txt-light);

  @media screen and (max-width: ${device.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: ${device.md}) {
      flex-direction: column;
    }

    & > * + * {
      margin-left: 1em;

      @media screen and (max-width: ${device.md}) {
        margin-left: 0;
      }
    }

    li {
      .a {
        text-transform: capitalize;
        color: var(--txt-light);
        font-weight: var(--fw-500);
      }
    }
  }
`

const PageLinks = styled.div`
  color: var(--txt-light);

  ul {
    padding-left: 0;
  }
`

const Payments = styled.div`
  display: flex;

  & > * + * {
    margin-left: 2px;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  text-transform: capitalize;
  color: var(--txt-light);
  font-weight: var(--fw-400);

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.7;
    color: var(--clr-accent);
  }
`

const Author = styled.div`
  color: var(--txt-light-secondary);

  div {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    text-align: right;
  }

  a {
    display: inline;
    color: var(--txt-light-secondary);
  }

`

export default function Footer() {
  return (
    <Wrapper>
      <FooterWrapperTop>
        <Container className="spacing">
          <div>
            <InstagramFeed />
          </div>
          <Flex>
            <Flex>
              <div className="spacing">
                <Image
                  width={200}
                  height={200}
                  src="/project-landscape-logo-light.svg"
                  alt="project landscape logo - calgary landscape company"
                />

                <Map />
              </div>
              <Divider />
            </Flex>
            <Flex>
              <div className="spacing-lg">
                <div className="spacing">
                  <h4 className="subheader">contact us</h4>
                  <ul>
                    <li>
                      <ContactLink href="tel: 403-257-4059">
                        <div>
                          <FaPhone style={IconStyle} />
                        </div>
                        403-257-4059
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="mailto: office@projectlandscape.ca">
                        <div>
                          <MdOutlineEmail style={IconStyle} />
                        </div>
                        office@projectlandscape.ca
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink
                        href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                        target="_blank"
                      >
                        <div>
                          <MdLocationOn style={IconStyle} />
                        </div>
                        3511 64 Ave Calgary, AB
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink href="#">
                        <div>
                          <FaRegClock style={IconStyle} />
                        </div>
                        9 AM - 5 PM Mon - Fri <br /> 9 AM - 3 PM Sat
                      </ContactLink>
                    </li>
                  </ul>
                </div>
                <Payments>
                  <Image src="/visa.png" alt="calgary landscaping payment type" height={100} width={100}/>
                  {/* <Image src="/master-card.png" alt="calgary landscaping payment type" height={100} width={100}/>
                  <Image src="/interac.png" alt="calgary landscaping payment type" height={100} width={100}/> */}
                </Payments>
                <div className="spacing">
                  <h4 className="subheader">showroom</h4>
                  <ul>
                  <li>
                      <ContactLink
                        href=""
                        target="_blank"
                      >
                        <div>
                          <MdLocationOn style={IconStyle} />
                        </div>
                        BACKYARD CANADA - 711 48 AVE SE UNIT 1
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink
                        href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                        target="_blank"
                      >
                        <div>
                          <MdLocationOn style={IconStyle} />
                        </div>
                        PATIO STORE - 533 58 AVE SE
                      </ContactLink>
                    </li>
                    <li>
                      <ContactLink
                        href=""
                        target="_blank"
                      >
                        <div>
                          <MdLocationOn style={IconStyle} />
                        </div>
                        WORLD OF SPAS - 6201 CENTRE S
                      </ContactLink>
                    </li>
                    
                  </ul>
                </div>
                <Socials>
                  <h4 className="subheader">let's connect!</h4>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100063556661393&ref=aymt_homepage_panel"
                    >
                      <Image height={100} width={100}
                        src="/socials/facebook.svg"
                        alt="calgary landscaping company facebook"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/project__landscape/?hl=en"
                    >
                      <Image height={100} width={100}
                        src="/socials/instagram.svg"
                        alt="calgary landscaping company instagram"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@projectlandscapeltd.9811"
                    >
                      <Image height={100} width={100}
                        src="/socials/youtube.svg"
                        alt="calgary landscaping company youtube"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.pinterest.ca/projectland0734/"
                    >
                      <Image height={100} width={100}
                        src="/socials/pinterest.svg"
                        alt="calgary landscaping company pinterest"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/project-landscape-ltd-pfvwus-pf~816279347/__public"
                    >
                      <Image height={100} width={100}
                        src="/socials/houzz.svg"
                        alt="calgary landscaping company"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.google.com/search?q=project%20landscape&rlz=1C1JZAP_enCA1008CA1008&oq=project+landscape&aqs=chrome..69i57j69i59j69i64j69i65j69i60l2j69i65.4202j0j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=APwXEde42p-FOu2e0riecHHuoBMahO47kQ:1682655163573&rflfq=1&num=10&serdesk=1&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ&ved=2ahUKEwiBlLf62sv-AhUXITQIHeg0D40QvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ;mv:[[51.0443109,-113.9770916],[50.992142799999996,-114.1041654]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                    >
                      <Image height={100} width={100}
                        src="/socials/google-plus.svg"
                        alt="calgary landscaping company"
                      />
                    </a>
                  </div>
                </Socials>
              </div>
              <Divider />
            </Flex>
            <div>
              <h4 className="subheader">email us</h4>
              <FormFooter />
            </div>
          </Flex>
          <hr />
        </Container>
      </FooterWrapperTop>
      <FooterWrapperBottom>
        <Container className="spacing-lg">
          <PageLinks>
            <Flex>
              <div>
                <ul>
                  <h3 className="subheader">
                    <Link href="/residential-services/hardscaping">
                      hardscaping
                    </Link>
                  </h3>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/pavers">
                      pavers
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/concrete-retaining-walls-calgary">
                      retaining walls
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/garden-walls">
                      garden walls
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/garden-bed-edging">
                      garden bed edging
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/concrete-curbing-calgary">
                      concrete curbing
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/stairs-and-stepping-stones">
                      stairs and stepping stones
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/seat-walls-and-pillars">
                      seat walls and pillars
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/concrete-contractors-calgary">
                      concrete installation
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/water-management">
                      water management
                    </StyledLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className="subheader">
                    <Link href="/residential-services/softscaping">
                      softscaping
                    </Link>
                  </h3>
                  <li>
                    <StyledLink href="/residential-services/softscaping/artificial-turf-calgary">
                      artificial turf
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/softscaping/irrigation-installation-calgary">
                      irrigation installation
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/softscaping/sod">
                      sod
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/softscaping/shrub-and-tree-planting-calgary">
                      shrub and tree planting
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/softscaping/calgary-mulch-and-decorative-rock">
                      mulch and decorative rock
                    </StyledLink>
                  </li>

                  {/* {data.wpMenu.menuItems.nodes.map(mainItem => {
                        return (
                          <>
                            {mainItem.childItems.nodes.map(childItem1 => {
                              return (
                                <>
                                  {childItem1.childItems.nodes.map(
                                    childItem2 => {
                                      return (
                                        <li key={childItem2.id}>
                                          <StyledLink to={childItem2.url}>
                                            {childItem2.label}
                                          </StyledLink>
                                        </li>
                                      )
                                    }
                                  )}
                                </>
                              )
                            })}
                          </>
                        )
                      })} */}
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className="subheader">
                    <Link href="/residential-services/outdoor-living">
                      outdoor living
                    </Link>
                  </h3>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/deck-builders-calgary">
                      decks
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/calgary-pergolas-and-patio-structures">
                      pergolas
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/outdoor-landscape-lighting-calgary">
                      lighting services
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/landscape-design-calgary">
                      landscape design
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/calgary-landscape-water-features">
                      water features
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/outdoor-fireplace-calgary-landscaper">
                      fire pits and fire places
                    </StyledLink>
                  </li>

                  <li>
                    <StyledLink href="/residential-services/outdoor-living/fence-builders-calgary">
                      fences
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/privacy-screens-for-decks-calgary">
                      privacy screens
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/deck-railings-calgary">
                      deck railings
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/outdoor-kitchen-calgary-landscaping-services">
                      outdoor kitchens
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/hardscaping/backyard-sports-court-installation">
                      sports courts
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services/outdoor-living/outdoor-furniture">
                      outdoor furniture
                    </StyledLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className="subheader">
                    <Link href="/about">
                     company information
                    </Link>
                  </h3>
                  <li>
                    <StyledLink href="/about">
                      about us
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/residential-services">
                      residential services
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/faq">
                      FAQ
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/service-areas">
                      service areas
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/blogs">
                      blogs
                    </StyledLink>
                  </li>
                  <li>
                    <StyledLink href="/financing">
                      financing
                    </StyledLink>
                  </li>
                </ul>
              </div>
            </Flex>
          </PageLinks>
          <Copyright>
            <ul>
              <li>Copyright&#169; 2023</li>
              <li>Project Landscape Ltd.</li>
              <li>All Rights Reserved</li>
              <li>
                <Link className="a" href="/terms-of-use">terms of use</Link>
        
              </li>
              <li>
                <Link className="a" href="/privacy-policy">Privacy Policy</Link>
        
              </li>
            </ul>
          </Copyright>
          <Author>
            <Container>
              <div>
                <p>website by: </p>
                <a target="_blank" href="https://www.aarontonner.com">
                  <Image height={100} width={100}
                    className="img"
                    src="/aaron-tonner-web-solutions-logo-white-white.svg"
                    alt="aaron tonner web solutions logo"
                  />
                </a>
              </div>
            </Container>
          </Author>
        </Container>
      </FooterWrapperBottom>
    </Wrapper>
  )
}
