import React from "react";
import SubBanner from "../Common/SubBanner";
import subBannerImg from "../../images/blog-img.png";
import subBannerMobileImg from "../../images/blog-responsive-img.png";
import ImageText from "../Common/ImageText";
import blogSubImg from "../../images/a3.webp";
import blogGridImg from "../../images/a1.webp";
import blogGridImgSec from "../../images/a2.webp";
import blogGridImgThird from "../../images/a3.webp";
import BlogCardTils from "./BlogCardTils";
import NextPerviousBtn from "../Common/NextPerviousBtn";
const BlogPage = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5">
        <SubBanner
          imageDesktopSrc={subBannerImg}
          imageModbileSrc={subBannerMobileImg}
          bannerHeading="Blogs"
        />
        <ImageText
          imgeSrc={blogSubImg}
          imgTextClasses="my-[120px] max-lg:my-[80px] max-md:my-10"
          headingText="News"
          subHeading="Pricing: Simpler The Better"
          paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
          dateText="May 02, 2023"
        />
        <div>
          <div className="grid gird-cols-1 md:grid-cols-2 lg:px-[74px] gap-[30px] xl:grid-cols-3">
            <BlogCardTils
              id="1"
              blogCardImg={blogGridImg}
              heading="News"
              subHeading="Starfield’s Fast Travel Cheapens Space’s Impact"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="2"
              blogCardImg={blogGridImgSec}
              heading="Design"
              subHeading="Starfield’s Fast Travel Cheapens Space’s Impact"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="3"
              blogCardImg={blogGridImgThird}
              heading="Design"
              subHeading="Starfield’s Fast Travel Cheapens Space’s Impact"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
            />

            <BlogCardTils
              id="4"
              blogCardImg={blogGridImgSec}
              heading="Design"
              subHeading="Baldur’s Gate 3: The Best Spells To Teach Your Team"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="5"
              blogCardImg={blogGridImgThird}
              heading="Design"
              subHeading="Baldur’s Gate 3: The Best Spells To Teach Your Team"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
            />

            <BlogCardTils
              id="6"
              blogCardImg={blogGridImg}
              heading="News"
              subHeading="Baldur’s Gate 3: The Best Spells To Teach Your Team"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
