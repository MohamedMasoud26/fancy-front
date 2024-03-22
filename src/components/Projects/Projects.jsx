import axios from 'axios';
import { useEffect, useState } from 'react';
import Project from '../Project/Project';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/project").then(response => {
            setProjects([...response.data.data]);
        }).catch(error => {
            console.error('Error fetching projects:', error);
        });
    }, []);

    return (
        <div className='container m-auto row mt-5'>
            {
                projects.map((item) => {
                    return <div key={item._id} className="col-4 mt-1"><Project data={item} /></div>
                })
            }
        </div>
    );
}

export default Projects;