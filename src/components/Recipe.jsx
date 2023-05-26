import React, { useState } from 'react';
import { HiBadgeCheck } from "react-icons/hi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';



const Recipe = ({ recipe }) => {
    // console.log(recipe);
    const { id, name, ingredients, cooking_method, rating, recipePhoto } = recipe;
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const notify = () => {
        toast.success('Your favorite recipe is added!');
        setIsButtonDisabled(true);
    }

    return (

        <div className='w-full border-2 border-yellow-400 bg-white rounded-3xl shadow-xl overflow-hidden'>

            <LazyLoad offset={100} threshold={0.95}>
                <div className='h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${recipePhoto})` }} > </div>
            </LazyLoad>

            <div className='p-4 sm:p-6'>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold text-gray-700 text-[24px] mb-2'>{name}</p>
                        <p className='font-bold text-gray-500 mb-1 underline'>Ingredients</p>
                        {
                            ingredients.map((ingredient, index) => <p key={index} className='flex items-center justify-left gap-1 pl-4'><span className='text-green-400'><HiBadgeCheck /></span> <span>{Object.values(ingredient)}</span></p>)

                        }
                    </div>

                    <button disabled={isButtonDisabled} onClick={notify} className="btn btn-circle btn-outline gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>

                </div>

                <p className='font-bold text-gray-500 mt-4 mb-1 underline'>Cooking Method</p>
                <p className='text-[#7C7C80] font-[15px] mt-1'>{cooking_method}</p>

                <div className='rounded-[14px] bg-[#F2ECE7]'>
                    <Rating className='mx-auto mt-5 px-4 py-3' style={{ maxWidth: 150 }} value={rating} readOnly />
                </div>

            </div>

        </div>


    );
};

export default Recipe;