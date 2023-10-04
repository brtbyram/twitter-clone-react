import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Menu(){
    return(
        <nav>
            <NavLink to="/" className="py-1 block group">
                {({isActive})=> ()}
            </NavLink>
        </nav>
    )
}