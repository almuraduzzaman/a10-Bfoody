import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className=" py-4 bg-base-100 px-4 lg:px-36 shadow-lg flex justify-between items-center">

            <div>
                <a className="normal-case text-4xl font-bold text-yellow-400">Bfoody</a>
            </div>


            <div className=" bg-base-100">
                <div>
                    <ul className="flex gap-5 text-lg">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Home</button></NavLink></li>
                        <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-green-500' : 'text-[#757575]'}><button>Blog</button></NavLink></li>

                    </ul>
                </div>
            </div>


            <div>
                {
                    user ? <div className="dropdown dropdown-end">
                        <button className="btn btn-ghost btn-circle">
                            <div className=" rounded-full">
                                <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                    <img className='rounded-full w-[40px] h-[40px]' src={user.photoURL} />
                                </div>
                            </div>
                        </button>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto md:w-52">
                            <li><button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}><button className="btn btn-active btn-ghost">Login</button></Link>
                }
            </div>

        </div>
    );
};

export default Navbar;