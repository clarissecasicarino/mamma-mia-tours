import RootLayout from "@/app/layout";

//@ts-ignore
function MyApp({ Component, pageProps }) {

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
