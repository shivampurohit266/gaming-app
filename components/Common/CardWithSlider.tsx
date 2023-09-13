import Image from "next/image";
import React, { useEffect } from "react";
// import Slider from "react-slick";
import sliderImg from "../../images/slider-img.png";
import sliderImg1 from "../../images/kitchen-img-2.png";
import sliderImg2 from "../../images/hero.png";
import sliderImg3 from "../../images/login-form-img-1.png";
import startImg from "../../images/star-icon.png";
import startOutlineImg from "../../images/Star-outline.png";
import heartImg from "../../images/heart-icon-outline.png";
import filledHeartImg from "../../images/heart-icon.png";
import greylineImg from "../../images/grey-line.png";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const CardWithSlider = (props: any) => {
  const rating = Math.round(props?.rating);

  return (
    <div className="bg-white rounded-[16px] overflow-hidden hotel-card-design">
      <Slider {...settings}>
        {props?.image &&
          props?.image?.length &&
          props?.image?.map((item) => {
            return (
              <div
                key={props.key}
                className="relative before:bg-slider-overlay before:absolute before:h-full before:w-full before:top-0 before:left-0"
              >
                <Image
                  className="w-full h-[240px] object-cover"
                  src={item?.croppedUrl}
                  width={200}
                  height={200}
                  alt=""
                />
              </div>
            );
          })}
      </Slider>
      <div className="text-white bg-black bg-opacity-50 px-[11px] py-[3px] -mt-[45px] relative z-1 w-max ml-4 rounded-2xl mb-[10px]">
        ${props.price}
        <span className="text-secondary">/Month</span>
      </div>
      <div className="px-4 py-6">
        <div className="flex items-center justify-between rating-like ">
          <div className="flex gap-1 mb-2 starts">
            {rating === 5 ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
              </>
            ) : rating === 4 ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : rating === 3 ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : (
              ""
            )}
            <span>{props.rating}</span>
          </div>
          <div>
            {props.likeButton === true ? (
              <Link href="/">
                <Image src={filledHeartImg} alt="" />
              </Link>
            ) : (
              <Link href="/">
                <Image src={heartImg} alt="" />
              </Link>
            )}
          </div>
        </div>
        <Image className="my-2" src={greylineImg} alt="" />
        <Link href={`property-details/${props.id}`}>
          <p className={`text-base ${josefin.className}`}>{props.paraText}</p>
        </Link>
        <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap">
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={multiPerson} alt="" />
            <span>{props.perRoomUserCount}</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bedRoomIcon} alt="" />
            <span>{props.bedCount} Bedroom</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bathTubIcon} alt="" />
            <span>{props.bathCount} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithSlider;
