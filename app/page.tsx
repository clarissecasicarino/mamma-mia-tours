import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles/globals.css";
import FirstComponent from "./components/FirstComponent";

export default async function Home() {
  const client = createClient();

  const document = await client.getByUID("homepage", "home-page");

  return (
    <div className="space-y-4">
      <FirstComponent />
      <SliceZone slices={document.data.slices} components={components} />
    </div>
  );
}
