import { useEffect } from "react";

const Navbar = (props) => {
    const NavBarMetoda = props.metoda;
   useEffect(()=> {
    NavBarMetoda();



   },[]);


    return(
        <div>
            <p>{props.user}</p>
            <h1>{props.prijmeni}</h1>
            <button onClick={NavBarMetoda}>změnit</button>
            <h2>{props.tema}</h2>
        </div>

    );

}

export default Navbar