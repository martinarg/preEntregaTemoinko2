import React from "react";
import { Link, NavLink } from "react-router-dom";
const ItemListNav = (props) =>{
    const menu={
        'text-decoration':'none',
        'color':'white',
        'margin-top':'2vh'
       }
    return(
            
            <NavLink style={menu} to={`/category/${props.secciones}`}>{props.secciones}</NavLink>

    )
}
export default ItemListNav;