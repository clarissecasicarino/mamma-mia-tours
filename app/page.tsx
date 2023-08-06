import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles/globals.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import QuestionComponent from "./components/QuestionComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function Home() {
  const client = createClient();

  const document = await client.getByUID("homepage", "home-page");

  return (
    <div>
      <Header />
      <div className="px-6 tablet:px-8 laptop:px-10 space-y-4">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <SliceZone slices={document.data.slices} components={components} />
        <QuestionComponent />
      </div>
      <Footer />
    </div>
  );
}
