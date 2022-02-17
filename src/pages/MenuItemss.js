import Dropdown from "../pages/DropDown";
import { useState } from "react";


const MenuItemss = ({ items }) => {
const [dropdown, setDropdown] = useState();
 return (
    <li className="menu-items" style={{background:''}}>
    {items.submenu ? (
     <>
     <button aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
     </button>
     <Dropdown  submenus={items.submenu} 
     dropdown={dropdown} 
     />
    </>
   ) : (
    <a href="/#">{items.title}</a>
    )}
   </li>
  );
 };
 
 export default MenuItemss;