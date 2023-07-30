import ScrollMenu from "@/app/components/ScrollMenu";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

export type ReviewsCarouselProps =
  SliceComponentProps<Content.ReviewsCarouselSlice>;

const ReviewsCarousel = ({ slice }: ReviewsCarouselProps): JSX.Element => {
  return (
    <ScrollMenu type="large">
    <div className="flex flex-col laptop:flex-row gap-x-6 justify-center gap-y-6">
      {slice.items.map((item, index) => (
        <div
          key={index}
          className={`rounded-3xl border h-[330px] w-full laptop:w-[298px]`}
          style={{ backgroundColor: item.review_card_bg_color ?? "white" }}
        >
          <div className="px-6 py-5 flex flex-col gap-y-2">
            <div className="rounded-lg">
              <PrismicImage
                field={item.reviewer_picture}
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </div>
            <p key={index} className="font-body text-12 laptop:text-14">
              {item.review_description}
            </p>
            <p className="text-10">{item.reviewer_name}</p>
          </div>
        </div>
      ))}
    </div>
    </ScrollMenu>
  );
};

export default ReviewsCarousel;
