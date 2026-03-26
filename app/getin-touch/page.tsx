import Banner from "@/components/Banner";
import ContactUsForm from "@/components/GetinTouch/ContactUsForm";
import UseFull from "@/components/UseFull";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner text="Get in Touch" banner="/images/getintouch.png" />
      <ContactUsForm/>
      {/* <UseFull color="#718496"/> */}
    </div>
  );
};

export default page;
