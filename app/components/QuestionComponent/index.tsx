import React from "react";

export default function QuestionComponent() {
  return (
    <div className="pt-6 tablet:pt-8 laptop:pt-10 desktop:mx-52 pb-2 tablet:pb-6">
      <h1 className="text-32 laptop:text-36 font-display font-extrabold leading-tight">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-rows-2 grid-flow-col gap-8 pt-10 laptop:pt-16 font-body">
        <div className="space-y-2 laptop:space-y-3">
          <h4 className="text-20 font-semibold">
            {"What’s"} included in the tours?
          </h4>
          <p className="text-14 laptop:text-16 leading-relaxed laptop:leading-loose font-thin">
            Our tours include transportation, accommodation, meals, and
            handpicked activities to give you a life-changing travel experience.
          </p>
        </div>

        <div className="space-y-2 laptop:space-y-3">
          <h4 className="text-20 font-semibold">How do I make a booking?</h4>
          <div className="text-14 laptop:text-16 leading-relaxed laptop:leading-loose font-thin">
            <p>
              Simply click on the <span className="underline">Book Now</span>{" "}
              button and our travel representative will reach out to you for the
              next steps.
            </p>
          </div>
        </div>

        <div className="space-y-2 laptop:space-y-3">
          <h4 className="text-20 font-semibold">
            Are these tours for all ages?
          </h4>
          <p className="text-14 laptop:text-16 leading-relaxed laptop:leading-loose font-thin">
            Yes! Our tours are designed for everyone—families, couples, friends,
            and solo travelers of all ages.
          </p>
        </div>

        <div className="space-y-2 laptop:space-y-3">
          <h4 className="text-20 font-semibold">What if I need to cancel?</h4>
          <p className="text-14 laptop:text-16 leading-relaxed laptop:leading-loose font-thin">
            We understand plans change. Check our flexible cancellation policy
            in our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
