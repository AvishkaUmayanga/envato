'use client'
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


interface StatData{
    number: number;
    name: string;
}

const OurStats = () => {
  const statsData: StatData[] = [
    {number: 250,name: 'Clients'}, 
    {number: 15,name: 'Creative Designers'}, 
    {number: 730,name: 'Projects'}
  ];
  const { ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  })
  return (
    <div className=' bg-yellow flex min-h-52 max-md:flex-col max-md:p-5 max-md:items-center'>
      <div className=' w-96 flex items-center gap-4'>
        <div className=" h-10 flex items-center max-md:hidden ">
          <hr className=" bg-white w-12 h-[3px] border-none max-md:w-6" />
        </div>
         <h2 className=' text-4xl font-bold max-md:text-center w-full'>Our Stats</h2>
      </div>
      <div className=' flex flex-wrap  min-h-52 max-md:w-full  max-md:mt-5' ref={ref}>
        {statsData?.map(data => (
          <div key={data.name} className=' bg-black text-white lg:w-80 text-center flex justify-center flex-col gap-3 flex-grow max-xl:p-4'>
            { inView ? (<h2 className=' text-7xl font-semibold text-yellow'><CountUp start={0} end={data.number} duration={2.5} /><span className={`${data.name === 'Projects' ? '' : 'hidden'}`}>+</span></h2>): ('')}
            <p className=' opacity-100'>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurStats