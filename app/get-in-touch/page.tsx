import Banner from "@/components/Banner";
import ContactUsForm from "@/components/GetinTouch/ContactUsForm";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "subrub says - Get In Touch",
  description:"Contact subrub says for support, questions, partnerships, or general inquiries.",
 alternates: {
    canonical: "https://www.suburbsays.com.au/get-in-touch",
  },
  openGraph: {
    title: "subrub says - Get In Touch",
    description:
      "Reach out to subrub says for support, feedback, or partnership opportunities. We’re here to help you connect with trusted local services.",
    url: "https://www.suburbsays.com.au/get-in-touch",
    siteName: "subrub says",
    type: "website",
    images: [
      {
        url: "https://www.suburbsays.com.au/images/getintouch.png",
        width: 1200,
        height: 630,
        alt: "subrub says Contact Page",
      },
    ],
  },
  keywords: [
    "contact subrub says",
    "customer support subrub says",
    "get in touch",
    "help center subrub says",
    "community support",
    "local services platform support",
    "partnership inquiries",
    "subrub says contact",
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
