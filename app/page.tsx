import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  // const page = await client.getSingle("homepage");
  const document = await client.getByUID('homepage', 'home-page');

  return <SliceZone slices={document.data.slices} components={components} />;
}

// export default async function Home() {
//   const client = createClient();

//   const document = await client.getSingle('home_page');

//   return <section>{document.uid}</section>;
// }
