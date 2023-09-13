"use client";
import Image from "next/image";
import React, { useState } from "react";
import FooterLogo from "../../images/footer-logo.png";
import FooterLogoText from "../../images/footer-logo-text.png";
import {
  footerMenuMainPageOption,
  footerMenuOtherOption,
} from "../../utils/utilsItems";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import emailIcon from "../../images/email-icon.png";
import instaIcon from "../../images/insta.png";
import linkedIn from "../../images/linkedIn.png";
import whatappIcon from "../../images/whatapp.png";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import { emailSubscribe } from "../../service/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
});

const Footer = () => {
  const initialValues = { email: "" };
  const [emailInfo, setEmailInfo] = useState<any>(initialValues);
  const handleSubmit = (values: any, { resetForm }) => {
    emailSubscribe(values)
      .then((res) => {
        console.log("newsletter res--", res);
        if (res.message === "Email has already been subscribed.") {
          toast.error("Email has already been subscribed");
        }
        if (res.data) {
          resetForm({ values: "" });
          toast.success("Thanks for subscribing!");
        }
      })
      .catch((err) => {
        console.log("newletter err---", err);
      });
  };

  return (
    <>
      <Formik
        initialValues={emailInfo}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <div className="bg-[#111111] text-white lg:p-[50px] px-5 py-10">
            <div className="grid grid-cols-5 gap-[15px] lg:gap-[50px] max-lg:grid-cols-2">
              <div className="max-lg:col-span-2">
                <div className="flex items-center justify-start">
                  <h2>Footer</h2>
                </div>
                <p className="pt-4 pb-2 text-sm pt-11">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  perferendis, harum soluta veniam numquam tempora eligendi
                  itaque laudantium, dignissimos perspiciatis possimus accusamus
                  atque placeat rem laboriosam.
                </p>
              </div>

              <div className="lg:ml-[48px]">
                <h6 className="text-base font-medium max-lg:mb-[24px] lg:mb-[50px]">
                  Main Pages
                </h6>
                <ul>
                  {footerMenuMainPageOption.map((items, index) => {
                    return (
                      <li className="mb-4 text-sm" key={index}>
                        <Link href="/"> {items}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h6 className="text-base font-medium max-lg:mb-[24px] lg:mb-[50px]">
                  Others
                </h6>
                <ul className="">
                  {footerMenuOtherOption.map((items, index) => {
                    return (
                      <li className="mb-4 text-sm" key={index}>
                        <Link href="/"> {items}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-col justify-between col-span-2 lg:hidden mb-[30px]">
                <h6 className="mb-6 text-base font-medium">Contact</h6>

                <div className="grid grid-cols-2">
                  <Link href="\" className="flex items-start">
                    <Image
                      src={whatappIcon}
                      alt=""
                      className="object-contain mr-4"
                    />
                    <p className="text-sm"> +1 231 412 1411</p>
                  </Link>

                  <div className="flex items-start">
                    <Image
                      src={emailIcon}
                      alt=""
                      className="object-contain mr-4"
                    />
                    <Link href="/" className="text-sm break-all">
                      email@example.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <h6 className={`text-2xl ${josefin.className} mb-5`}>
                  Subscribe to Our Newsletter
                </h6>
                <div className="flex gap-6">
                  <div className="relative">
                    <input
                      type="email"
                      name={"email"}
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                      className="bg-transparent placeholder:text-darkGrey border border-[#E1D9CE] py-[14px] pl-[46px] rounded-[8px] max-w-[311px] w-full max-lg:py-[7px]"
                    />

                    <Image
                      className="absolute left-4 top-[50%] -translate-y-[50%]"
                      src={emailIcon}
                      alt=""
                    />
                  </div>

                  <Button
                    ButtonClicked={handleSubmit}
                    ButtonText={"Subscribe"}
                    ButtonClasses={
                      "bg-white text-blackLight px-[24px] py-[14px] w-max font-medium leading-4 flex items-center max-lg:px-4 max-lg:py-[7px]"
                    }
                  />
                </div>
                <ErrorMessage
                  className="error"
                  name="email"
                  component="div"
                  style={{ color: "#ff3434" }}
                />
                <div className="w-full mt-[35px]">
                  <h6 className="font-medium">Follow Us</h6>
                  <div className="flex mt-6">
                    <Link href="/" className="flex mr-[60px]">
                      <Image
                        className="object-contain"
                        src={instaIcon}
                        alt=""
                      />
                      <p className="ml-4 text-sm">_myinsta</p>
                    </Link>

                    <Link href="/" className="flex ">
                      <Image className="object-contain" src={linkedIn} alt="" />
                      <p className="ml-4 text-sm"> Example_stays</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-[15px] lg:gap-[50px] max-lg:grid-cols-2 max-lg:pt-[50px]">
              <div className="lg:pt-[47px] max-lg:col-span-2">
                <p className="text-sm">COPYRIGHT | ALL RIGHTS RESERVED.</p>
              </div>

              <div className="col-span-2 lg:ml-[48px] flex flex-col justify-between max-lg:hidden">
                <h6 className="text-base font-medium mb-[42px]">Contact</h6>

                <div className="grid grid-cols-2">
                  <Link href="\" className="flex">
                    <Image src={whatappIcon} alt="" className="mr-4" />
                    <p className="text-sm"> +1 231 412 1411</p>
                  </Link>

                  <Link href="\" className="flex">
                    <Image src={emailIcon} alt="" className="mr-4" />
                    <p className="text-sm">test@example.com</p>
                  </Link>
                </div>
              </div>

              <div className="max-lg:mb-[30px] self-end col-span-2 max-lg:row-start-1">
                <Link href="/privacy-policy" className="w-full text-sm">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Footer;
