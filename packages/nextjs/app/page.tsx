"use client";


import type { NextPage } from "next";
import { useRouter } from 'next/navigation'
import Image from "next/image";

const Home: NextPage = () => {
  

  const router = useRouter();

  const handleClick = () => {
    router.push("/create");
  }

  return (
    <>

    


    

      <Image src="/avatar.png" height={200} width={200} alt="alt" className="mx-auto my-16 rounded-2xl" />

      <h1 className="text-center mt-6 text-6xl font-semibold text-green-600">BlockPath</h1>

      <p className="text-center text-2xl mt-12 text-green-600">Share your portfolio on web3</p>

      <button onClick={handleClick} className="btn btn-outline btn-lg mt-10 mx-auto border-green-600 text-green-600">Start</button>

    
    

    </>
  );
};

export default Home;
