import { useState, useRef } from "react";


const DragDropFiles = ({ setFile }) => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setFiles(e.dataTransfer.files)

    };

    if (files) {
        setFile(files[0])
    } else {
        setFile(null)
    }

    if (files) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className="actions">
                <button className="btn btn-primary" onClick={() => setFiles(null)}>Cancel</button>
            </div>
        </div>
    )

    return (
        <>
            <div
                className="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="drop-content">
                    <h2>Drag and Drop Files to Upload</h2>
                    <h1>Or</h1>
                </div>
                <label for="file-upload" className="custom-file-upload" onClick={() => inputRef.current.click()}>
                    Select File
                </label>
                <input className="drag-input"
                    type="file"
                    onChange={(event) => setFiles(event.target.files)}
                    hidden
                    multiple
                    ref={inputRef}
                />
            </div>
        </>
    );
};

export default DragDropFiles;