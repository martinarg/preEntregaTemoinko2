
import { Link } from "react-router-dom";


const Brand = (props) =>{
   
   //const [marcastate, setState] = useState('Trophy Deportes 1');
       
    return (
       
            <Link to='/' className="marca">{props.marca}</Link>
       
    )
}
export default Brand;
