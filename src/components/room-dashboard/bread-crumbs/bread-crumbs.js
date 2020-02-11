import React from 'react'
const BreadCrumbs = () =>{
    const linkList = ['building','floor 3','room 301'];

    return(
        <div className='bread_crumbs'> {linkList.map(el => <span key={el}> {el}  </span>)} </div>
    )
};
export default BreadCrumbs