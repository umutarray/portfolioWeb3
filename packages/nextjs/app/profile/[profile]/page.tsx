"use client"
import React from 'react'
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from '~~/hooks/scaffold-eth';
import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';

type ProfileParams = {
    profile: string;
};


const Profile: React.FC<{ params: ProfileParams }> = ({ params }) => {
    const { data } = useScaffoldReadContract({
        contractName: "YourContract",
        functionName: "profiles",
        args: [params.profile],
    });

    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);





    return (
        <>

            <div className='mx-auto my-12'>

                <BlockieAvatar address={params.profile} size={240} />

            </div>



            <h1 className="text-center  text-6xl font-semibold text-green-600">{data?.[0]} {data?.[1]}</h1>

            <h2 className='text-center text-3xl text-green-600'>{data?.[2]}</h2>


            <div className='text-center my-8 text-3xl'>{data?.[3]}</div>

            
           
           <a href={data?.[5]} className='mx-auto'target='_blank'>
            <button className="btn bg-green-600 mt-6 ">Github</button>
           </a>

           <a href={data?.[4]} className='mx-auto'target='_blank'>
            <button className="btn bg-green-600 mt-6">Linkedin</button>
           </a>

        



           

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                {url ? <QRCode value={url} size={256} /> : <p>Loading...</p>}
            </div>





        </>
    )
}

export default Profile