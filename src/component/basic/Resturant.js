import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
import NavBar from './navBar';

const categoryList = [... new Set(Menu.map((curElem) => {
  return curElem.category;
})),
"ALL"];
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [navList, setNavList] = useState(categoryList);
    // console.log(navList);
    const filterItem = (category) =>{
      if(category==="ALL"){
        setMenuData(Menu);
        return
      }
     const updateList = Menu.filter((curElem)=>{
        return curElem.category === category;
      });
      setMenuData(updateList);
    };

  return (
    <>
      <NavBar filterItem={filterItem} navList={navList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
