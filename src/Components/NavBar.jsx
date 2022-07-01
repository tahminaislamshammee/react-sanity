import React from 'react';
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import ValueContext from '../Context/ValueContext';
const NavBar = () => {


    const {isActive} = useContext(ValueContext);
    console.log(isActive);

    const navLinkStyles = ({isActive})=>{
        return {
            color: isActive ? 'white' : '',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

    return ( 
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to="/" className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest'  style={navLinkStyles}>Kapehe</NavLink>

                    <NavLink to="/post" className='inflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800'  style={navLinkStyles}>Blog post</NavLink>

                    <NavLink to="/project" className='inflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800'  style={navLinkStyles}>Project</NavLink>

                    <NavLink to="/about" className='inflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800' style={navLinkStyles}>About</NavLink>
                </nav>

                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/' className='mr-4' target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url='https://www.youtube.com/' className='mr-4' target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                    <SocialIcon url='https://www.twitter.com/' className='mr-4' target="_blank" fgColor='#fff' style={{height:35, width: 35}}/>
                </div>
            </div>
        </header>
    );
}
 
export default NavBar;