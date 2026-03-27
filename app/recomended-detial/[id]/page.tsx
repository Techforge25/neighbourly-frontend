"use client";
import Banner from "@/components/RecommendedeDetail/Banner";
import NeighburSay from "@/components/RecommendedeDetail/NeighburSay";
import { api } from "@/src/service/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";



const page = () => {
  const params = useParams();
  const [recomendedDetail, setRecomendedDetail] = useState<any>([]);

const getRocommedndedDetail = async ()=>{
  try {

    const res = await api.get(`recommendation/${params?.id}`);
    const data = res.data;
    setRecomendedDetail(data?.data);
    
  } catch (error:any) {
    console.log(error.response.data)
  }
}

useEffect(()=>{
  getRocommedndedDetail();
},[params?.id])

// console.log(recomendedDetail,"recomendedDetail in page")

  return (
    <div>
      <Banner recomendedDetail={recomendedDetail} />

      <NeighburSay recomendedDetail={recomendedDetail}  />
    </div>
  );
};

export default page;
