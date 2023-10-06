import React from 'react'

const navBar = ({filterItem,navList}) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group"></div>
        {navList.map((curElem)=>{
                return (
                <button className="btn-group__item" 
                onClick={()=>filterItem(curElem)}> 
                {curElem}</button> 
                );
            })
        }
      </nav>
    </div>
  )
}

export default navBar
