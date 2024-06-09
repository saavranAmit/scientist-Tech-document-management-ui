import React, { useState, useContext } from "react";
import { Context } from "../App";
import SelectDocs from "../Components/SelectDocs";
import DragDropFiles from "../Components/DragAndDrop";

export default function SecForm() {
    const { name, setAddBtn, isId, setCount, count } = useContext(Context)
    const [file, setFile] = useState(null)
    const [selectType, setSelectType] = useState("")
    const [selectStatus, setSelectStatus] = useState([])
    const [fileStatus, setFileStatus] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectType === "") {
            setSelectStatus([...["Please select the type"]])
            return
        }
        if (file === null) {
            setFileStatus([...["Please select file first !"]])
            return
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', selectType);
        const postData = async (data, isId) => {
            const option =
            {
                method: 'POST',
                body: data,
            }
            try {
                const fetchData = await fetch(`http://localhost:5000/documents/addMore/${isId}`, option);
                const res = await fetchData.json()
                console.log(res)
                return res;

            } catch (err) {
                setSelectStatus([...["Server is not working"]])

            }
        }
        const callFunc = async (formData, isId) => {
            await postData(formData, isId)
            setAddBtn(false)
            setCount(!count)
        }
        callFunc(formData, isId)
    }

    const handleAddMore = () => {
        setAddBtn(false)
    }
    return (
        <>
            <form className="form sec-form" onSubmit={handleSubmit}>
                <button className="btn btn-primary cross-btn" onClick={handleAddMore}>Close</button>

                <div className="form-container sec-form-container">
                    <div>
                        <div><h2 className="userName">Document Name : {name}</h2></div>
                        <SelectDocs setSelectType={setSelectType} />
                        {selectStatus && <p style={{ color: "red" }}>{selectStatus[0]}</p>}
                    </div>
                    <DragDropFiles setFile={setFile} />
                    {fileStatus && <p style={{ color: "red" }}>{fileStatus[0]}</p>}
                </div>
                <button style={{ border: "none" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}