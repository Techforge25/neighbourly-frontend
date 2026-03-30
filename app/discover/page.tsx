import Banner from "@/components/Banner";
import Card from "@/components/Card";
import LocalRecommendation from "@/components/Discover/LocalRecommendation";
import TabBar from "@/components/TabBar";
import UseFull from "@/components/UseFull";

const Page = () => {
  return (
    <div>
      <Banner
        banner="/images/discover.png"
        textColor="text-heading1"
        text="The services your neighbours trust and recommend."
      />
      <TabBar />
      <Card />
      <LocalRecommendation/>
      {/* <UseFull color="#718496" /> */}
    </div>
  );
};

export default Page;
