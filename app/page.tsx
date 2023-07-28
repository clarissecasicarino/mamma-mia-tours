import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles/globals.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

export default async function Home() {
  const client = createClient();

  const document = await client.getByUID("homepage", "home-page");

  return (
    <div className="space-y-4">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <SliceZone slices={document.data.slices} components={components} />
    </div>
  );
}
