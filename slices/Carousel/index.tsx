import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicRichTextProps,
} from "@prismicio/react";
import Head from "next/head";

export type PackageCarouselProps =
  SliceComponentProps<Content.PackageCarouselSlice>;

const CustomCheckMark = () => <span className="mr-2">&#x2713;</span>;

const components: PrismicRichTextProps["components"] = {
  listItem: ({ children }) => (
    <li className="flex items-start">
      <CustomCheckMark />
      <span className="ml-1 font-body">{children}</span>
    </li>
  ),
};

const PackageCarousel = ({ slice }: PackageCarouselProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
      </Head>
      <div className="flex flex-row space-x-2 md:space-x-4">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl border h-80 w-72`}
            style={{ backgroundColor: item.package_bg_color ?? "white" }}
          >
            <div className="px-4 py-4">
              <p key={index} className="font-body">
                {item.package_title}
              </p>
              <p className="text-5xl font-display font-extrabold">
                {item.package_price}
              </p>
              <PrismicRichText
                field={item.package_info}
                components={components}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageCarousel;
