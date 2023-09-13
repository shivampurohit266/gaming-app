import Image from "next/image";
import Link from "next/link";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const BlogCardTils = ({
  blogCardImg,
  heading,
  subHeading,
  paraText,
  dateText,
  id,
}: any) => {
  return (
    <div className="w-full h-full text-black bg-white max-lg:pb-6 mb-7">
      <div>
        <Image
          src={blogCardImg}
          alt=""
          className="object-cover w-full rounded-lg max-h-[340px] h-full"
        />
      </div>

      <div className="mt-5">
        <h6 className="mb-2 text-base text-darkGrey max-md:text-sm">
          {heading}
        </h6>
        <h4
          className={`text-[25px] font-bold max-md:text-2xl max-md:leading-6 leading-[45px] ${josefin.className}`}
        >
          {subHeading}
        </h4>
        <h6 className="my-2 text-sm text-primary">{dateText}</h6>
        <p className="mb-3 text-base">{paraText}</p>

        <Link
          href={`blog-details/1Aserdwaaxxde${id}`}
          className="my-3 text-base underline text-primary max-md:text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCardTils;
