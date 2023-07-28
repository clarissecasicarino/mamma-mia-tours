import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import "./styles/globals.css";

export default async function Home() {
  const client = createClient();

  const document = await client.getByUID('homepage', 'home-page');

  return <SliceZone slices={document.data.slices} components={components} />;
}