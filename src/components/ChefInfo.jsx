import React, { useState } from 'react';
import { HiOutlineThumbUp } from "react-icons/hi";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import toast, { Toaster } from 'react-hot-toast';

const ChefInfo = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, bio } = chef;
    // console.log(yearsOfExperience);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const notify = () => {
        toast.success('Your favorite chef marked!');
        setIsButtonDisabled(true);
    }

    return (
        <div>
            <div className='flex items-center justify-center px-2'>
                <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                    <div className='max-w-md mx-auto'>
                        <div>
                            <LazyLoad offset={300} threshold={0.95}>
                                <div className='h-[236px] bg-cover bg-top' style={{ backgroundImage: `url(${chefPicture})` }} >
                                </div>
                            </LazyLoad>
                        </div>
                        <div className='p-4 sm:p-6'>
                            <div className='flex justify-between items-center'>
                                <div className=''>
                                    <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{chefName}</p>
                                    <p className='text-[17px] font-bold text-[#0FB478]'>Experience: {yearsOfExperience} Years</p>
                                </div>
                                <div className=''>
                                    <button disabled={isButtonDisabled} onClick={notify} className="btn btn-circle btn-outline gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    </button>
                                    <p className='text-[#3C3C4399] text-[17px] mr-2 flex items-center gap-1'><HiOutlineThumbUp /> {likes}</p>
                                </div>
                            </div>

                            <p className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] bg-[#F2ECE7] text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                Number of Recipes: {numberOfRecipes}
                            </p>

                            <Link to={`/chef_recipes/${id}`} className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                View Recipes
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefInfo;