import { useState } from "react";
import Zidle from "./Zidle";

const Stul = (props) => {
    const [total, setTotal] = useState(0);
    const setTotalStul = props.setTotalStul;
    const totalStul = props.totalStul;

    return(
        <div style={{float:"left"}}>
            <div>
                <h1>Stůl:{props.cisloStolu}</h1>
                <h3>Celkem:{total}</h3>
            </div>
            <div className="button-row">
            <Zidle totalCount={props.totalCount} setTotalCount={props.setTotalCount} setTotalStul={setTotalStul} total={total} setTotal={setTotal} totalStul={totalStul}/>
            <Zidle totalCount={props.totalCount} setTotalCount={props.setTotalCount} setTotalStul={setTotalStul} total={total} setTotal={setTotal} totalStul={totalStul}/>
            <Zidle totalCount={props.totalCount} setTotalCount={props.setTotalCount} setTotalStul={setTotalStul} total={total} setTotal={setTotal} totalStul={totalStul}/>
            <Zidle totalCount={props.totalCount} setTotalCount={props.setTotalCount} setTotalStul={setTotalStul} total={total} setTotal={setTotal} totalStul={totalStul}/>
            </div>
            
        </div>

    );

}

export default Stul