import { useNavigate } from "react-router-dom";

function Project({ data }) {

    const nav = useNavigate();
    function go() {
        nav(`/projectDetails/${data._id}`, { state: data });
    }
    return (
        <div className="card mb-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={data.coverImage} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a onClick={go} className="btn btn-primary">Details</a>
            </div>
        </div>

    )
}

export default Project