import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [chefInfo, setChefInfo] = useState([]);

    useEffect(() => {
        fetch('https://a10-bfoody-server-murad.vercel.app/chefInfo')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {/* banner section  */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/uzbek-central-asia-cuisine-concept-assorted-uzbek-food-pilaf-samsa-lagman-manti-shurpa_114941-588.jpg?w=996")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold text-yellow-400">Welcome to Bfoody!</h1>
                        <p className="mb-5 text-2xl">We’re here to help you go from curious cook to confident in the kitchen.</p>
                        <Link to={'/blog'}><button className="btn rounded-xl bg-yellow-400 text-black hover:text-white">Explore Afghan Foods</button></Link>
                    </div>
                </div>
            </div>

            {/* chef information  */}
            <section className='from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br'>
                <h2 className="py-10 text-3xl text-center font-bold text-gray-500 px-2">Famous Chefs in Afghanistan</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-6 md:px-16'>
                    {
                        chefInfo.map(chef => <ChefInfo key={chef.id} chef={chef}></ChefInfo>)
                    }
                </div>
            </section>

            {/* App banner section  */}
                <section className="bg-yellow-100">
                    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                        <div className="flex justify-center xl:w-1/2">
                            <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://img.freepik.com/premium-photo/top-view-people-taking-photo-food-using-phone-people-snap-photos-their-food-home_527653-77.jpg?w=996" alt="" />
                        </div>

                        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl">
                                Download our free mobile app
                            </h2>

                            <p className="block max-w-2xl mt-4 text-xl text-gray-500">Download our mobile app today to discover the unique flavors of Afghanistan's culinary culture!</p>

                            <div className="mt-6 sm:-mx-2">
                                <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                                    <p href="" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                                        <svg className="w-6 h-6 mx-2 fill-current" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                            <g>
                                                <g>
                                                    <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105
                                            C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302
                                            c41.355,0,75,33.645,75,75V407z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166
                                            l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664
                                            L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498
                                            C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65
                                            c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341
                                            H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344
                                            c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="mx-2">
                                            Get it on the App Store
                                        </span>
                                    </p>
                                </div>

                                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                                    <p href="" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                                        <svg className="w-6 h-6 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg"><path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path></svg>
                                        <span className="mx-2">
                                            Get it on Google Play
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            {/* companies logo  */}
            <section>
                <div className="py-16 bg-white">
                    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
                        <div className="m-auto text-center lg:w-7/12">
                            <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">Your favorite companies are our partners.</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg" className=" contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png" className="w-32 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png" className="w-32 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png" className="w-32 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg" className="w-32 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg" className="w-32 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg" className="w-20 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                            <div className="p-4">
                                <img src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png" className="w-24 contrast-0 transition lazy hover:contrast-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;