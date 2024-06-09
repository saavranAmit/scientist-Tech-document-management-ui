import React, { useState } from "react";

export default function SelectDocs({ setSelectType }) {
    const [selectVal, setSelectVal] = useState("")
    setSelectType(selectVal)

    return (
        <>
            <select onChange={(e) => setSelectVal(e.target.value)} required>
                <option value="" >Document Type</option>
                <option value="Training">Training</option>
                <option value="Certificate">Certificate</option>
                <option value="Manual">Manual</option>
                <option value="License">License</option>
            </select>

        </>
    )
}