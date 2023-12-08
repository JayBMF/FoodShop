import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import listPoducts from "../api/listProducts";
import listCategories from "../api/listCategories";

function EditProduct () {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [listCategory, setListCategory] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async() => {
        try {
            const response = await listPoducts.getById(id);
            setName(response.name);
            setAmount(response.available);
            setDiscount(response.discount);
            setPrice(response.price);
            setDescription(response.description);
            setImagePreview(response.urlImage);
            setCategory(response.category_id);
            const categories = await listCategories.get();
            setListCategory(categories);
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

    const handleSelected = (e) => {
        setCategory(e.target.value);
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("category_id", category);
            formData.append("available", amount);
            formData.append("discount", discount);
            formData.append("price", price);
            formData.append("description", description)
            if(image){
                formData.append("image", image);
            }
            await listPoducts.update(id, formData);
            setLoading(false);
            navigate('/admin/Products');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Edit Product</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                        <li className="breadcrumb-item">Products</li>
                        <li className="breadcrumb-item active">Edit Product</li>
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
                        <h3 className="card-title">Edit Product Form</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form id="quickForm" method="post" encType="multipart/form-data" onSubmit={handleUpdateProduct}>
                        <div className="card-body">
                        <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" name="Name" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Category</label>
                                <select value={category} onChange={handleSelected}>
                                    {
                                        listCategory && 
                                        listCategory.map(item => { if (item === category){return (
                                            <option key={item.id} value={item.id} selected = "selected">  
                                                {item.name}
                                            </option>
                                        )}
                                        return (
                                            <option key={item.id} value={item.id}>  
                                                {item.name}
                                            </option>
                                        )})
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Amount</label>
                                <input type="text" name="Amount" className="form-control" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                <input type="text" name="Price" className="form-control" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Discount</label>
                                <input type="text" name="Discount" className="form-control" placeholder="Enter discount" value={discount} onChange={(e) => setDiscount(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <input type="text" name="Description" className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Image</label>
                                <img className="previewImage" alt="Preview Image" src={imagePreview}/>
                                <input type="file" name="Image" className="form-control" accept="image/*"  onChange={handleChange} />
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
    )
}

export default EditProduct;