import Banner from "@/components/Banner";
import ContactUsForm from "@/components/GetinTouch/ContactUsForm";
import UseFull from "@/components/UseFull";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Neighbourly - Get In Touch",
  description: "Discover trusted local services recommended by your neighbors.",
};

const page = () => {
  return (
    <div>
      <Banner text="Get in Touch" banner="/images/getintouch.png" bgPosition="center" />
      <ContactUsForm />
      <UseFull color="#718496"/>
    </div>
  );
};

export default page;
