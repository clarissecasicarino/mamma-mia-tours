import RootLayout from "@/app/layout";
import About from "./about";
import Contact from "./contact";

//@ts-ignore
function MyApp({ Component, pageProps, router }) {
  if (router.pathname === '/about') {
    return <About />;
  } else if (router.pathname === '/contact') {
    return <Contact />;
  }
  
  return (
    <RootLayout >
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp;
