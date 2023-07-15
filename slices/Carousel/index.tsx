import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type PackageCarouselProps =
  SliceComponentProps<Content.PackageCarouselSlice>;

const PackageCarousel = ({ slice }: PackageCarouselProps): JSX.Element => {
  return (
    <div className="flex flex-row space-x-2 md:space-x-4">
      {slice.items.map((item, index) => (
        <div
          key={index}
          className={'rounded-3xl h-40 w-80'}
          style={{ color: item.package_bg_color ?? "" }}
        >
          <p className="font-bold">{item.package_title}</p>
          <p>{item.package_price}</p>
          <PrismicRichText field={item.package_info} />
        </div>
      ))}
    </div>
  );
};

export default PackageCarousel;
