import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import addCategory from "../api/addCategory";
import { useDispatch } from "react-redux";


function AddCategory(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();


    const handleChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleAddCategory = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.set("name", name);
            formData.set("description", description);
            formData.set("image", image);
            addCategory(formData);
            navigate('/admin/Categories');
        } catch (error){
            console.log(error);
            
        }
    };

    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Category</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Categories</li>
                        <li className="breadcrumb-item active">Add Category</li>
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
                        <h3 className="card-title">Add Category Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm" method="post" encType="multipart/form-data">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="Name" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name="Description" className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" name="Image" className="form-control" accept="image/*"  value={image} onChange={handleChange} required/>
                                </div>
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary float-right" onClick={handleAddCategory}>Submit</button>
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
    );
}

export default AddCategory;