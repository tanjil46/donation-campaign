import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            
        <div className="navbar bg-base-100">
<div className="flex-1">
 <img src="./Resources/Logo.png"></img>
 


</div>
<div className="flex-none">
<ul className="menu menu-horizontal px-1">
  <li><NavLink to='/'  className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-green-400 underline" : ""
}>Home</NavLink></li>
  
  <li><NavLink to='/donate'  className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-green-400 underline" : ""
}>Donation</NavLink></li>
 <li><NavLink to='/static'  className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-green-400 underline" : ""
}>Statiscs</NavLink></li>
    
     
  
 
</ul>
</div>
</div>


             








                   </div>












             






















  
            







     
    );
};

export default Header;