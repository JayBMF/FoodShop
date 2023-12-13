import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import listCategories from "../api/listCategories";
import addProduct from "../api/addProduct";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct(){
    const [name, setName] = useState('');
    const [category, setCategory] = useState(9);
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [listCategory, setListCategory] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await listCategories.get();
            setListCategory(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelected = (e) => {
        setCategory(e.target.value);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("category_id", category);
            formData.append("available", amount);
            formData.append("discount", discount);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("image", image);
            await addProduct.add(formData);
            setLoading(false);
            navigate('/admin/Products');
            toast.success("Add product success");
        } catch (error){
            console.log(error);
            toast.error("Add product failed");
            setLoading(true);
        }
    };

    return(
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Product</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Products</li>
                        <li className="breadcrumb-item active">Add Product</li>
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
                        <h3 className="card-title">Add Product Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm" method="post" encType="multipart/form-data" onSubmit={handleAddProduct}>
                        <div className="card-body">
                        <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" name="Name" className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Category</label>
                                <select onChange={handleSelected}>
                                    {
                                        listCategory && 
                                        listCategory.map(item => (
                                            <option key={item.id} value={item.id}>  
                                                {item.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Amount</label>
                                <input type="text" name="Amount" className="form-control" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                <input type="text" name="Price" className="form-control" placeholder="Enter price" onChange={(e) => setPrice(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Discount</label>
                                <input type="text" name="Discount" className="form-control" placeholder="Enter discount" onChange={(e) => setDiscount(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                {/* <input type="text" name="Description" className="form-control" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} required/> */}
                                <ReactQuill theme="snow"  value={description} onChange={setDescription} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image</label>
                                <img className="previewImage" alt="Preview Image" src={imagePreview}/>
                                <input type="file" name="Image" className="form-control"  onChange={handleChange} required/>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary float-right"  disabled={isLoading}>Submit</button>
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

export default AddProduct;