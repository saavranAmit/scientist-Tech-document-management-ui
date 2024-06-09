import { useContext, useState } from "react";
import DragDropFiles from "./DragAndDrop";
import Input from "./Input";
import SelectDocs from "./SelectDocs"
import { Context } from "../App"

function Form({ setToggle }) {
    const [file, setFile] = useState(null)
    const [inputData, setInputData] = useState("")
    const [selectType, setSelectType] = useState("")
    const [nameStatus, setNameStatus] = useState([])
    const [selectStatus, setSelectStatus] = useState([])
    const [fileStatus, setFileStatus] = useState([])
    const [already, setAlready] = useState(null)
    const { setBtn, setCount, count, validateName } = useContext(Context)
    const handleUpload = (e) => {
        e.preventDefault()



        if (inputData.length <= 0) {
            setNameStatus([...["Please enter document name"]])
            return
        }
        if (inputData.length <= 4) {
            setNameStatus([...["Document name need to at least 5 character"]])
            return
        }
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
        formData.append('name', inputData);
        formData.append('type', selectType);
        const postData = async (data) => {
            const option =
            {
                method: 'POST',
                body: data,
            }
            try {
                const fetchData = await fetch('http://localhost:5000/documents', option);
                console.log(fetchData)
                if (fetchData.status === 401) {
                    setAlready("Document name should be unique")
                } else {
                    setToggle(true)
                    setBtn(true)
                    setCount(!count)
                }
                const res = await fetchData.json()
                return res;

            } catch (err) {
                setNameStatus([...["Server is not working"]])
            }
        }
        const callFunc = async (formData) => {
            await postData(formData)
        }
        callFunc(formData)

    }
    return (
        <>
            <form className="form" onSubmit={handleUpload}>
                <div className="form-container">
                    <div>
                        <Input setInputData={setInputData} />
                        {nameStatus && <p style={{ color: "red" }}>{nameStatus[0]}</p>}
                        <>{already && <p style={{ color: "red" }}>{already}</p>}</>

                        <SelectDocs setSelectType={setSelectType} />
                        {selectStatus && <p style={{ color: "red" }}>{selectStatus[0]}</p>}
                    </div>
                    <DragDropFiles setFile={setFile} />
                    {fileStatus && <p style={{ color: "red" }}>{fileStatus[0]}</p>}
                </div>
                <button style={{ border: "none" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};


export default Form;