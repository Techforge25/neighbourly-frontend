import Banner from "@/components/RecommendedeDetail/Banner";
import NeighburSay from "@/components/RecommendedeDetail/NeighburSay";

const page = async ({ params }: any) => {
  const { id } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}recommendation/${id}`);
  const posts = await res.json();

  return (
    <div>
      <Banner recomendedDetail={posts?.data} />

      <NeighburSay recomendedDetail={posts?.data} />
    </div>
  );
};

export default page;
