import { useState } from "react";
import { useAppStore } from "../store/AppStore";

export default function AdminDashboard(){
    const {
        products,
        notify,
        createProduct,
        updateProduct,
        deleteProduct, 
        user
    } = useAppStore()

    const[form, setform] = useState({title:'', price:0, description:'', image:'',category:'', stock:0 })

    if(!user || user.role !== 'admin') {
        return <div className="container">
            <p>Only admin Access</p>
        </div>
    }

    function submit(e){
        e.preventDefault()
        if(!form.title){
            notify("Title is Requierd", "error"); return}
            createProduct({...form, price : Number(form.price), stock: Number(form.stock)})
            setform({title:'', price:0, description:'', image:'',category:'', stock:0 })
    }
    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <form onSubmit={submit} className="admin-form">
                <input type="text" placeholder="Title" value={form.title} onChange={e=>setform({...form, title:e.target.value})} />
                <input type="number" placeholder="Price" value={form.price} onChange={e=>setform({...form, price:e.target.value})} />
                <input type="text" placeholder="Description" value={form.description} onChange={e=>setform({...form, description:e.target.value})} />
                <input type="text" placeholder="Image URL" value={form.image} onChange={e=>setform({...form, image:e.target.value})} />
                <input type="text" placeholder="Category" value={form.category} onChange={e=>setform({...form, category:e.target.value})} />
                <input type="number" placeholder="Stock" value={form.stock} onChange={e=>setform({...form, stock:e.target.value})} />
                <button type="submit">Create Product</button>
            </form>
            <h2>Products</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>(
                        <tr key={product._id}>
                            <td>{product.title}</td>    
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={()=>{
                                    const newTitle = prompt("New Title", product.title) 
                                    if(newTitle){
                                        updateProduct(product._id, {title: newTitle})
                                    }
                                }}>Edit</button>
                                <button onClick={()=>{
                                    if(window.confirm("Are you sure to delete this product?")){
                                        deleteProduct(product._id)
                                    }
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
