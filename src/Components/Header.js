import React, { useContext } from "react";
import { Context } from "../App";
export default function Header({ setToggle }) {
    const { btn, setBtn } = useContext(Context)

    const handleClick = () => {
        setToggle(false)
        setBtn(false)
    }

    const handleBack = () => {
        setToggle(true)
        setBtn(true)
    }
    return (
        <div className="header">
            <div className="sub-header">
                <h1>Folders</h1>
                {btn ? <div className="btn btn-primary" onClick={handleClick}><h3>Upload</h3></div> : <div className="btn btn-primary" onClick={handleBack}><h3>Back</h3></div>}

            </div>
        </div>
    )
}