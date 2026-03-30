import Banner from "@/components/RecommendedeDetail/Banner";
import NeighburSay from "@/components/RecommendedeDetail/NeighburSay";

const page = async ({ params }: any) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}recommendation/${id}`);
  const recommendedDetail = await res.json();

  return (
    <div>
      <Banner recomendedDetail={recommendedDetail?.data} />

      <NeighburSay recomendedDetail={recommendedDetail?.data} />
    </div>
  );
};

export default page;
