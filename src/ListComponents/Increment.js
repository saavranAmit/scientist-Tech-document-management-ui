import React, { useContext } from "react";
import { Context } from "../App";


export default function Increment({ ids, name }) {
    const { setName, setAddBtn, setIsId } = useContext(Context)
    const handleForm = () => {
        setAddBtn(true)
        setName(name)
        setIsId(ids)

    }
    return (
        <>
            <button className="btn btn-primary" onClick={() => handleForm(ids)}>Add More</button>
        </>
    )
}