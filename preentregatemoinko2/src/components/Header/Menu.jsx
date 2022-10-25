import { Link } from 'react-router-dom';
import ItemListNav from './ItemListNav';

const Menu = (props) => {
 
    return(
        <ul>
            <li>
            {
                props.secciones.map( (sec,index) =><ItemListNav  key={index} secciones={sec}/>)
            }
            </li>
            <li><Link to="/Form">Credito</Link></li>
        </ul>
      
    )
}
export default Menu;