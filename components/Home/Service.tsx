import Image from 'next/image';
import { GrShareOption } from "react-icons/gr";

const Service = () => {
  return (
    <div className='container mx-auto py-20'>
      

      <div className='flex lg:items-start lg:flex-row flex-col items-center lg:gap-2 gap-6 p-4 lg:p-8'>

        <div>
          <Image
            src="/images/service.png"
            alt="Service"
            width={680}
            height={700}
            className=''
          />
        </div>

        <div className='lg:w-[40%] mx-auto flex flex-col md:gap-4 gap-2'>

          <h5 className='lg:text-[42px] text-[22px] font-bold text-[#303231]'>Recommend a <span className='text-[#F3B39D]'>local service</span></h5>
          <div className='flex items-center gap-3 mt-4'>
            <p className='bg-[#E0E7ED] rounded p-2'> <GrShareOption size={26} /></p>
            <p className='lg:text-[24px] text-[12px] text-[#303231]'>Share someone your neighbours can trust.</p>
          </div>

          <p className='text-[16px] text-[#697586] mr-6'>
            Tell us who’s been brilliant in your suburb — whether it’s a plumber, cleaner, electrician or someone else locals rate highly.
          </p>

          <p className='text-[16px] text-[#3A5670] bg-[#E0E7ED] rounded-xl lg:p-14 p-7 mt-10'>
            We only ask for a few details so we can keep recommendations genuinely and useful for nearby neighbours.
          </p>

        </div>



      </div>




    </div>
  );
}

export default Service;
