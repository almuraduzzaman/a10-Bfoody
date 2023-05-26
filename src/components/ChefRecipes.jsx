import React from 'react';
import { HiOutlineThumbUp } from "react-icons/hi";
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from './Recipe';
import LazyLoad from 'react-lazy-load';


const ChefRecipes = () => {

    const chef = useLoaderData();
    const param = useParams();
    // console.log(singleChef, param.id);

    const singleChef = chef.find((onlyThatChef) => onlyThatChef.id == param.id);
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipes } = singleChef || {};

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-8 md:mx-16 my-10 border-2 border-red-400">
                <figure><LazyLoad offset={100} threshold={0.95}><img className='w-full h-full' src={chefPicture} /></LazyLoad></figure>
                <div className="card-body">
                    <h2 className="card-title normal-case text-4xl font-bold text-yellow-400">{chefName}</h2>
                    <p className='text-gray-500'>{bio}</p>
                    <p className='text-[17px] font-bold text-[#0FB478]'>Experience: {yearsOfExperience} Years</p>
                    <p className='text-[#3C3C4399] text-[17px] mr-2 flex items-center gap-1'><HiOutlineThumbUp /> {likes}</p>
                    <p className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] bg-[#F2ECE7] text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        Number of Recipes: {numberOfRecipes}
                    </p>
                </div>
            </div>

            <h2 className="normal-case text-4xl font-bold text-gray-500 text-center my-10">Here's Some {chefName}'s Recipes</h2>
            <div className='grid md:grid-cols-2 mx-8 md:mx-16 my-10 gap-10'>
                {
                   recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;
