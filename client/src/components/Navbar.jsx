//Importing few icons
// Refer tailwind documentation for all the classes used : https://tailwindcss.com/docs/installation

import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

//The NavbarItem is going to accept a few props like title and classProps and it is only going to remove a list item.
//Classname is going to be a dynamic block : ms-4 means margin on horizontal axis and rendering classprops 

//We can render one NavbarItem or multiple using curly braces{} 
const NavbarItem = ({title, classProps}) => {
    return (
        <li className= {`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    {/* At the start its going to be closed in the mobile devices */}
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return(
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden b list-none flex-row justify-between items-center flex initial'>
                {/*item is to loop through each item in Market, Exchange , Tutorials and Wallets, item + index is used to get a unique value*/}
                {["Market","Exchange","Tutorials","Wallets"].map((item, index ) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                {/*py is top-bottom padding and px is side padding */}
                <li className='bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            {/* The below is for mobile navigation */}
            {/* We will also create a state whether the mobile navigation bar is open */}
            <div className='flex relative'>
                {/* If toggle menu is true render Aioutlineclose else render HiMenuAlt4 notice onClick is reversing the setToggleMenu true to false and false to true*/}
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)} />}
                {/* When menu is toggled on/true we need to show it, the code inside of parenthesis after && is only going to show when togglemenu is set to true */}
                {toggleMenu && (
                    
                    <ul
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                    >
                        
                    
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick ={() => setToggleMenu(false)} />
                        </li>
                        {["Market","Exchange","Tutorials","Wallets"].map((item, index ) => (
                        <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    );
}

export default Navbar;