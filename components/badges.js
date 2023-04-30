import React from "react"
import { Container, Section } from "./LayoutComponents"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import Image from "next/image"

const ImgStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  height: "250px",
  width: "100%",
}

export default function Badges() {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
  }
  return (
    <Section>
      <div className="spacing">
        {/* <h2 className="title center">top rated landscaping company calgary!</h2> */}
        <Slider {...settings}>
          <Image
            src="/badges/best-landscaping-companies-in-calgary-1.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/best-landscaping-companies-in-calgary-2.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/best-landscaping-companies-in-calgary-3.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-1.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-2.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-experts-calgary-3.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-1.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-2.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-3.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-4.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-5.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-6.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-7.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-8.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-9.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-10.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
          <Image
            src="/badges/landscaping-calgary-top-rated-experts-11.svg"
            alt="top rated landscaping calgary, AB"
            style={ImgStyle}
            height={100} width={100}
          />
        </Slider>
      </div>
    </Section>
  )
}
