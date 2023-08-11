import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles/globals.css";
import QuestionComponent from "./components/QuestionComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiscoverSection from "./components/DiscoverSection";
import DescriptiveContainer from "./components/DescriptiveContainer";
import ExtendedDescriptiveContainer from "./components/ExtendedDescriptiveContainer";
import ReviewCarousel from "./components/ReviewCarousel";

export default async function Home() {
  const client = createClient();

  const document = await client.getByUID("homepage", "home-page");

  return (
    <div>
      <Header />
      <div className="px-6 tablet:px-8 laptop:px-10 space-y-4">
        <DiscoverSection />
        <DescriptiveContainer />
        <ExtendedDescriptiveContainer />
        <SliceZone slices={document.data.slices} components={components} />
        <ReviewCarousel />
        <QuestionComponent />
      </div>
      <Footer />
    </div>
  );
}
