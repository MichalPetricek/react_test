import { useState } from "react";

const Zidle = (props) => {
    const [zidle, setZidle] = useState(0);
    const Counts = async () => {
        props.setTotal(props.total + 1);
        setZidle(zidle + 1)
        props.setTotalCount(props.totalCount + 1)
    }

    return(
        <div>
        <button type="button" onClick={Counts}>{zidle}</button>
        </div>

    );

}

export default Zidle