import React, { useState } from 'react'
import styles from '../Dashboard.module.css'
import { useDeleteRecentMutation, useGetRecentsQuery } from '../../../Redux/services/recent';
import { useNavigate } from 'react-router-dom';

const AllRecent = () => {

    const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
    const nav = useNavigate()
    const [deleteRecent, { isLoading: loadingRecent, error: deletedRecentError }] = useDeleteRecentMutation();
    const { data, isFetching, isSuccess } = useGetRecentsQuery();
    if (data) {
        console.log(data.recentModels)

    }
    const removeRecent = async (id) => {
        const result = await deleteRecent(id);
        if (result.error) {
            console.error('Error deleting file:', result.error.data.msgError);
            alert('Error deleting file: ' + result.error.data.msgError);
            if (result.error.data.msgError === "TokenExpiredError: jwt expired" || result.error.data.msgError === "Your session has expired please login again") {
                localStorage.removeItem('userData')
                nav('/login')
                window.location.reload();
            } else {
                alert('File deleted successfully!');
            }
        }
    }
    return (
        <>
            {isFetching ? (
                <div id="loading-wrapper">
                    <div id="loading-text">LOADING</div>
                    <div id="loading-content"></div>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-light table-striped table-borderless align-middle table-responsive">
                    <thead>
                        <tr >
                            <th scope="col">Id</th>
                            <th scope="col">Details</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.recentModels.map((item, index) => (
                            <tr className=' position-relative'
                                key={item._id}
                                onMouseEnter={() => setHoveredRowIndex(index)}
                                onMouseLeave={() => setHoveredRowIndex(null)}
                            >
                                <th scope="row">{index}</th>
                                <td >
                                    ImageId : {item._id}
                                </td>
                                <td scope='row'>
                                    <img className='w-75' src={item.image} alt="" />
                                    {hoveredRowIndex === index && (
                                        <div className={`${styles.button_overlay}`}>
                                            <div className={`position-absolute ${styles.ptn_group}`}>
                                            <button  className={`${styles.update_button} btn btn-warning  `}>Update</button>
                                            <button onClick={() => removeRecent(item._id)} className={`${styles.delete_button} btn btn-danger`}>Delete</button>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            )}
        </>
    );
}

export default AllRecent