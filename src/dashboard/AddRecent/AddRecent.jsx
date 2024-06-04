import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateRecentMutation, useDeleteRecentMutation } from '../../../Redux/services/recent';
import { event } from 'jquery';
import { useNavigate } from 'react-router-dom';

function AddRecent() {
  const nav=useNavigate()
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [createRecent, { isLoading, isError, error }] = useCreateRecentMutation();
  
  const [previewImage, setPreviewImage] = useState(null);

  

  const onSubmit = async (data) => {
    const recentData = new FormData();
    recentData.append('image', data.file[0]);
    const result = await createRecent(recentData);
    console.log(data.file[0])
    console.log(result)
    if (result.error) {
      console.error(result.error.data.msgError);
      alert(result.error.data.msgError);
      if (result.error.data.msgError==="TokenExpiredError: jwt expired" || result.error.data.msgError==="Your session has expired please login again"){
        localStorage.removeItem('userData')
    nav('/login')
    window.location.reload();
      }
    } else {
      alert('File uploaded successfully!');
      reset();
      setPreviewImage(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 5242880) { // 5 megabytes in bytes
        const img = new Image();
        img.onload = () => {
          if (img.width === 2000 && img.height === 930) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
          } else {
            alert('Image dimensions must be 2000px width and 930px height');
            e.target.value = null
          }
        };
        img.src = URL.createObjectURL(file);
      } else {
        alert('Image size must be less than 5 megabytes');
        e.target.value = null
      }
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-100 mb-3">
          <span className='alert alert-warning p-2 '><span className='text-danger'>Warning</span> : Image size must be less than 5 megabytes and dimensions must be 2000px width and 930px height</span>
        </div>
        <div className="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02"
            {...register('file', { required: true })}
            onChange={handleFileChange} />
          <button type="submit" disabled={isLoading} className="input-group-text" htmlFor="inputGroupFile02">Upload</button>
          {isError && <span className='alert alert-danger'>{error.data.error}</span>}
        </div>
        {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', marginBottom: '10px' }} />}

        <br />
        <br />
        {errors.file && <span className='alert alert-danger p-2'>This field is required.</span>}


      </form>

    </div>
  );
}

export default AddRecent;
