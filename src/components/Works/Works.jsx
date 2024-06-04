import { useEffect, useState } from "react";
import axios from "axios";
import Project from "../Project/Project";

export default function Works() {
  const [projects, setprojects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/project").then(data => {
            console.log(data.data)
            setprojects([...data.data]);
            console.log(setprojects([...data.data]))
        })
    }, [])
    return (
        <div className='row mt-5'>
            {
                projects.map((item) => {
                    return <div key={item._id} > <Project data={item} /></div>
                })
            }
        </div>
    )
}
