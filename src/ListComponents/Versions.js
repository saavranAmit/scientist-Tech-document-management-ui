import React from "react";

export default function Versions({ versionData, setToggleVer }) {
    return (
        <>
            <div className="sub-list">
                <button className="btn btn-primary cross-btn" onClick={() => setToggleVer(false)}>Close</button>
                <div className="subList-container">

                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Version</th>
                                <th>Document Type</th>
                                <th>File Name</th>
                                <th>Uploaded On</th>

                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {versionData.map((data, i) => {
                                return (
                                    data.versions.slice(0).reverse().map((d, i) => {
                                        return (
                                            <>
                                                <tr key={i} className="active-row">
                                                    <td>{d.version}</td>
                                                    <td>{d.type}</td>
                                                    <td>{d.file_path}</td>
                                                    <td>{d.uploaded_at}</td>

                                                </tr>
                                            </>
                                        )
                                    }))
                            })}
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )

}