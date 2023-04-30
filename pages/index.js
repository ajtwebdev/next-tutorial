import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import HeroBasic from '@/components/Heros/HeroBasic'
import AllServicesBanner from '@/components/Services/AllServicesBanner'
import Badges from '@/components/badges'
import MainServicesLinks from '@/components/Services/MainServicesLinks'
import styled from 'styled-components'
import { Section, Container, Flex } from '@/components/LayoutComponents'
import Cta3 from '@/components/Cta/Cta3'
import ProductsImg from '@/components/Sections/productsImg'
import ShowroomSection from '@/components/Sections/ShowroomSection'
import MainVideo from '@/components/Sections/MainVideo'
import ImageLeftDark from '@/components/Sections/ImageLeftDark'
// import ImageLeftDarkImg from "../banner-image-2.jpg"

const Divider = styled.div`
  width: 3px;
  height: 400px;
  background-color: var(--clr-accent);

  @media screen and (max-width: 36em) {
    display: none;
  
`

export default function Home() {
  return (
    <Layout>
      <HeroBasic />
      <Badges />
      {/* <MainServicesLinks /> */}
      <AllServicesBanner />
      <Section>
        <Container>
          <Flex>
            <div>
              <h2 className="title tan">Discover why Project Landscape is Calgary's largest residential landscape company</h2>
            </div>
            <Divider />
            <div>
              <p>Project Landscape has established itself as Calgary's largest residential landscape company due to its commitment to taking landscape design and installations to the next level in outdoor living. Several factors contribute to their success and industry dominance.
Firstly, Project Landscape excels in landscape design. They have a team of highly skilled and creative designers who understand the unique needs and preferences of Calgary homeowners. Their designs blend aesthetics with functionality, ensuring that every outdoor space is transformed into a stunning and practical oasis.

Secondly, the company is known for its exceptional installation services. Project Landscape has a dedicated team of experienced professionals who execute the designs with precision and attention to detail. From hardscaping to softscaping, irrigation systems to outdoor lighting, they handle every aspect of the installation process.

Additionally, Project Landscape stands out for its commitment to customer satisfaction. They prioritize open communication, actively involving clients in the design and installation phases. The company's dedication to meeting deadlines, providing transparent pricing, and delivering high-quality workmanship has earned them a stellar reputation among homeowners in Calgary.</p>
            </div>
          </Flex>
        </Container>
      </Section>
      <Cta3 />
      <ProductsImg subheader=""
        title="get the highest quality calgary landscape materials"
        body="As experts in the field, we take pride in using only the highest quality landscaping materials to ensure that your property is not only visually appealing but also adds value to your home. From irrigation systems to seasonal clean-ups, construction projects, and other landscaping services, our team at Project Landscape in Calgary is dedicated to meeting your residential landscaping needs with trust and expertise."
        to="/calgary-landscaping-materials"
        button="discover products" />
        <ShowroomSection />
        <MainVideo />
        {/* <ImageLeftDark img={ImageLeftDarkImg} alt="landscaping services in calgary, AB"
        subheader=""
        title="Landscaping services in Calgary"
        body="Since 2016, Project landscape has helped hundreds of homeowners create beautiful and functional outdoor living spaces that are filled with relaxation and enjoyment. Whether it's a complete landscape design and construction transformation or helping homeowners create a jaw-dropping curb appeal to be the envy of your neighbours, experienced and certified landscaping professionals are here to help.

We understand how frustrating it can be to deal with unreliable landscapers and ones that promise more than they can truly offer. Improving your landscape shouldn't be an impossible task, filled with exhausting research of unreliable landscape companies. 
If you're going to invest your time and money into hiring a landscape company for your Calgary home, you deserve the attention,expertise, great customer service and detailed focus that you invested into."
        to="/about"
        button="more about us" /> */}
    </Layout>
  )
}
