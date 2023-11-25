import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";

const Pages = () => {
  return (
    <div className="flex gap-6">
    <NavLink>Home</NavLink>
    <NavLink>Meals</NavLink>
    <NavLink>UpComing</NavLink>
    <NavLink></NavLink>
    <NavLink>Join Us</NavLink>
    </div>
  )
}

const Navbar = () => {
  

  return (
    <div>
      
      <div className="fixed   z-10 mt-0  ">
        <div data-aos="fade-down" className="bg-blue-500 md:mr-[185px]  navbar">
        <div className="">
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Pages />
      {/* {
        user ? <li className="bg-custom-Pink-light text-white text-base font-medium  items-center  rounded-sm" onClick={handleLogOut}><button className="p-3 bg-blue-500">Logout</button></li> : <Link to="/login"><button className="bg-blue-500  p-2 rounded-xl text-white">Login</button></Link>
      } */}
         <Link className="btn" to='/productsCart'>My Cart</Link>
      </ul>
    </div>
          
          <div className="flex">
        <img className="md:w-10 w-8 text-white" src={'https://i.ibb.co/wJ6HszD/icons8-twitter-250.png'} alt="" />
        <h3 className="md:text-2xl text-xl text-white font-bold md:mr-16">Uni Dine</h3>
      </div>
        </div>
        <div className="navbar-center hidden md:mr-36 lg:flex">
          <ul className="menu   menu-horizontal px-1">
            <Pages />
          </ul>
        </div>
        <div className=" md:ml-32">
        <Link to='/productsCart'><div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator text-2xl">
          <CiBellOn />
        </div>
      </label>
      </div></Link>
        
          
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;