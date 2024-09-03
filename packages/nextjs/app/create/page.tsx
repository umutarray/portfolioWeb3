"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi';
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';

const Create: React.FC = () => {
    const { address: connectedAddress } = useAccount();
    // Initialize state variables for each form field
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    // Handler functions to update state when input changes
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value);
    const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setJobTitle(e.target.value);
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => setLinkedin(e.target.value);
    const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => setGithub(e.target.value);

    const router = useRouter();

    // const handleClick = () => {
    //     router.push(`/profile/${connectedAddress}`);
    // }



    const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("YourContract");


    return (

        <>
            <h1 className='text-center mt-12 text-6xl font-semibold text-green-600'>Create Profile</h1>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto border-green-600 text-green-600">
                Name:
                <input
                    type="text"
                    className="grow"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto  border-green-600 text-green-600">
                Surname:
                <input
                    type="text"
                    className="grow"
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto  border-green-600 text-green-600">
                Job Title:
                <input
                    type="text"
                    className="grow"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto  border-green-600 text-green-600">
                Description:
                <input
                    type="text"
                    className="grow"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto  border-green-600 text-green-600">
                Linkedin:
                <input
                    type="text"
                    className="grow"
                    value={linkedin}
                    onChange={handleLinkedinChange}
                />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-6 mx-auto  border-green-600 text-green-600">
                Github:
                <input
                    type="text"
                    className="grow"
                    value={github}
                    onChange={handleGithubChange}
                />
            </label>

            <button className="btn btn-outline mx-auto my-6 btn-md border-green-600 text-green-600" onClick={async () => {
                try {
                    await writeYourContractAsync({
                        functionName: "addProfile",
                        args: [name,surname,jobTitle,description,github,linkedin],
                        
                    });
                } catch (e) {
                    
                }
                finally{
                    router.push(`/profile/${connectedAddress}`);
                }
            }}
            >
                Create</button>
        </>
    );
};

export default Create;
