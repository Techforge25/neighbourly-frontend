import Banner from "@/components/Banner";
import ContactUsForm from "@/components/GetinTouch/ContactUsForm";
import UseFull from "@/components/UseFull";
import { getMataData } from "@/utils/dumydata";

export const metadata = getMataData("Suburb says - Get In Touch");

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
