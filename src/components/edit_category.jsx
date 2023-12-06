import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import listCategories from "../api/listCategories";


function EditCategory () {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [imagePreview, setImagePreview] = useState('');
    const [isLoading, setLoading] = useState(false);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async() => {
        try {
            const response = await listCategories.getById(id);
            setName(response.name);
            setDescription(response.description);
            setImagePreview(response.urlImage);
        } catch (error) {
            console.log(error);
        }
    };


    const handleChange = (e) => {
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    
    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            if(image){

                formData.append("image", image);
            }
            await listCategories.update(id, formData);
            setLoading(false);
            navigate('/admin/Categories');
        } catch (error){
            console.log(error);
            
        }
    }

    console.log(image);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Edit Category</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Categories</li>
                        <li className="breadcrumb-item active">Edit Category</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    {/* left column */}
                    <div className="col-md-12">
                    {/* jquery validation */}
                    <div className="card card-primary">
                        <div className="card-header">
                        <h3 className="card-title">Edit Category Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm" method="put" encType="multipart/form-data" onSubmit={handleUpdateCategory}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="Name" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name="Description" className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <img className="previewImage" alt="Preview Image" src={imagePreview}/>
                                    <input type="file" name="Image" className="form-control" accept="image/*" onChange={handleChange}/>
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary float-right" disabled={isLoading}>Submit</button>
                            </div>
                        </form>
                    </div>
                    {/* /.card */}
                    </div>
                    {/*/.col (left) */}
                    {/* right column */}
                    <div className="col-md-6">
                    </div>
                    {/*/.col (right) */}
                </div>
                {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    )
}

export default EditCategory;