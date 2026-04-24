import Banner from "@/components/Banner";
import ContactUsForm from "@/components/GetinTouch/ContactUsForm";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeNeighbourly - Get In Touch",
  description:"Contact BeNeighbourly for support, questions, partnerships, or general inquiries.",
 alternates: {
    canonical: "https://www.beneighbourly.com.au/get-in-touch",
  },
  openGraph: {
    title: "BeNeighbourly - Get In Touch",
    description:
      "Reach out to BeNeighbourly for support, feedback, or partnership opportunities. We’re here to help you connect with trusted local services.",
    url: "https://www.beneighbourly.com.au/get-in-touch",
    siteName: "BeNeighbourly",
    type: "website",
    images: [
      {
        url: "https://www.beneighbourly.com.au/images/getintouch.png",
        width: 1200,
        height: 630,
        alt: "BeNeighbourly Contact Page",
      },
    ],
  },
  keywords: [
    "contact BeNeighbourly",
    "customer support BeNeighbourly",
    "get in touch",
    "help center BeNeighbourly",
    "community support",
    "local services platform support",
    "partnership inquiries",
    "BeNeighbourly contact",
  ],
};
const page = () => {
  return (
    <div>
      <Banner
        text="Get in Touch"
        banner="/images/getintouch.png"
        bgPosition="center"
      />
      <ContactUsForm />
      <UseFull color="#718496" />
    </div>
  );
};

export default page;
