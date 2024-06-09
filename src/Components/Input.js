import React, { useState } from "react";

export default function Input({ setInputData }) {
    const [docName, setDocName] = useState("")
    const [error, setError] = useState(null)

    const handleChanges = (e) => {
        setDocName(e.target.value)
        validateInput(e.target.value)

    }
    const validateInput = (value) => {
        if (value.trim() === '') {
            setError(['Input cannot be empty']);
        }
        const val = value.trim()
        if (val.length < 5) {
            setError(['Input need at least 5 character']);
        } else {
            setError(null);
        }
    };
    setInputData(docName)


    return (
        <>

            <input type="text" value={docName} placeholder="Document Name" onChange={handleChanges} required />
            {error && <p style={{ color: "red" }}>{error[0]}</p>}
        </>
    )
}