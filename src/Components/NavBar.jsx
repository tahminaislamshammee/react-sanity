import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            </div>
        </header>
    );
}
 
export default NavBar;