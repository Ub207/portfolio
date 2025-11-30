import SocialLink from "../components/SocialLink";
import ProfileCard from "../components/ProfileCard";
import HeadTag from "../components/HeadTag";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <title>Ubaidurrahman | Developer</title>
        <meta property="og:title" content="Ubaidurrahman | Developer" />
        <meta property="og:site_name" content="Ubaidurrahman" />
        <meta property="og:url" content="https://ubaidurrahman.com" />
        <meta
          property="og:description"
          content="Portfolio website of Ubaidurrahman, a developer."
        />
        <meta property="og:type" content="" />
        <meta property="og:image" content="https://ubaidurrahman.com/api/home" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ubaidullahsahab" />
        <meta name="twitter:title" content="Ubaidurrahman" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://ubaidurrahman.com/api/home"
        />
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <HeadTag />
        {/* <main className="lg:md:sm:w-1/2 py-4"> */}
        <ProfileCard />
        {/* <SocialLink /> */}
        {/* </main> */}
      </div>
    </>
  );
};
export default Index;
