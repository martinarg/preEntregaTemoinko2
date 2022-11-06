import React from "react";
import {  NavLink } from "react-router-dom";
const ItemListNav = ({sec}) =>{
    const menu={
        'text-decoration':'none',
        'color':'white',
        'margin-top':'2vh'
       }
    return(
            
            <NavLink style={menu} to={`/category/${sec.path}`}>{sec.name}</NavLink>

    )
}
export default ItemListNav;