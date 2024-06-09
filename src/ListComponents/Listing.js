import React, { useContext, useEffect, useState } from "react";
import Increment from "./Increment";
import Versions from "./Versions";
import { Context } from "../App";




export default function ListingData({ setToggle }) {
    const { count } = useContext(Context)
    const [totalData, setTotalData] = useState([])
    const [versionData, setVersionData] = useState([])
    const [toggleVersion, setToggleVer] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const handleVersion = (id) => {
        const array = totalData.filter((data) => data.id === id)
        setVersionData([...array])
        setToggleVer(true)

    }

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await fetch('http://localhost:5000/documents/get');
                const res = await fetchData.json()
                if (fetchData.status === 200) {
                    setLoading(false)
                    setTotalData([...res])
                }
                return res;

            } catch (err) {
                setError("Failed to fetch data")
            }
        }
        const callFunc = async () => {
            await getData()


        }
        callFunc()
    }, [count])


    return (
        <>
            <div className="list">
                <div className="list-container">
                    {loading ? <div><h2>Loading...</h2><h2>{error}</h2></div> :

                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Created At</th>
                                    <th>Total Files</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {totalData.map((data, i) => {
                                    return (
                                        <>
                                            <tr key={i} className="active-row">
                                                <td>{data.name}</td>

                                                <td>{data.created_at}</td>
                                                <td>{data.versions.length}</td>
                                                <td><button ids={data.id} onClick={() => { handleVersion(data.id) }} className="btn btn-primary">Versions</button></td>
                                                <td>{<Increment ids={data.id} name={data.name} />}</td>
                                            </tr>

                                        </>
                                    )
                                })}
                            </tbody>
                        </table>}

                </div>

            </div>{toggleVersion &&
                <Versions versionData={versionData} setToggleVer={setToggleVer} />}
        </>
    )
}