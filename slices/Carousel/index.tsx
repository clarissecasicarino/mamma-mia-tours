"use client";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicRichTextProps,
} from "@prismicio/react";
import Head from "next/head";
import Button from "@/app/components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type PackageCarouselProps =
  SliceComponentProps<Content.PackageCarouselSlice>;

const CustomCheckMark = () => <span className="mr-2">&#x2713;</span>;

const components: PrismicRichTextProps["components"] = {
  listItem: ({ children }) => (
    <li className="flex items-start text-base">
      <CustomCheckMark />
      <span className="ml-1 font-body">{children}</span>
    </li>
  ),
};

const PackageCarousel = ({ slice }: PackageCarouselProps): JSX.Element => {
  const notify = (itemTitle: any) =>
    toast.dark(`Yay! Thanks for booking our ${itemTitle} package.`, {
      icon: "🔥",
    });

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
      </Head>
      <div className="flex flex-col laptop:flex-row gap-x-6 justify-center gap-y-6">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl border h-[350px] w-full laptop:w-72`}
            style={{ backgroundColor: item.package_bg_color ?? "white" }}
          >
            <div className="px-6 py-6 flex flex-col gap-y-2">
              <p key={index} className="font-body text-base">
                {item.package_title}
              </p>
              <p className="text-5xl font-display font-extrabold pt-2">
                {item.package_price}
              </p>
              <section className="py-4">
                <PrismicRichText
                  field={item.package_info}
                  components={components}
                />
              </section>
              <div className="flex py-4 justify-center">
                <Button
                  label="Book Now"
                  type="rectangle"
                  onClick={() => notify(item.package_title)}
                />
              </div>
              <ToastContainer />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageCarousel;
