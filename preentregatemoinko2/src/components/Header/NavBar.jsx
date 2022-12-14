import React,{ Component } from 'react';
import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';
import {Link} from 'react-router-dom';


 
export default class NavBar extends Component{
    secciones = ["Calzado","Indumentaria","Accesorios"];

    constructor(){
        super();
        this.state ={title:"Trophy Deportes", opciones: this.opciones}
    }
    cambiarState(){
        this.setState = {title:"Trophy Deportes"}
    }
    //secciones={this.secciones}
    render(){
        return(
        
        
               <div>
                 <ul>
                <Brand marca={this.state.title}/>
  
                <Menu />
               
                    <Link to='/cart'><CartWidget/></Link>
                </ul>
          
                </div>
    
       
        )
    }
}
