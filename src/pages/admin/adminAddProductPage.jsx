import {useState} from "react"
import { AiOutlineProduct } from "react-icons/ai";

export default function AdminAddProductPage(){
    const [productID, setProductID] = useState("");
    const [Name, setName] = useState("");
    const [altNames, setaltNames] = useState("");
    const [description, setdescription] = useState("");
    const [Price, setPrice] = useState(0);
    const [labelledPrice, setlabelledPrice] = useState(0);
    const [images, setimages] = useState("");
    const [category, setcategory] = useState("");
    const [brand, setbrand] = useState("");
    const [model, setmodel] = useState("");
    const [Stock, setStock] = useState(0);
    const [isAvailable, setisAvailable] = useState(false);

    async function addProduct(){
        const token = localStorage.getItem("token");
        if(token === null){
            toast.error("You must be logged in to add a product.");
            navigate("/login");
            return;
        }
        if(productID === "" || Name === "" || description === "" || Price <= 0 || category === "" || brand === "" || model === "" || Stock < 0){
            toast.error("Please fill in all required fields and ensure price and stock are valid.");
            return;
        }
        try{
            const alterNameInArray= altNames.split(",");
            const imagesInArray = images.split(",");
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", {
                productID,
                Name,
                altNames: alterNameInArray,
                description,
                Price,
                labelledPrice,
                images: imagesInArray,
                category,
                brand,
                model,
                Stock,
                isAvailable
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
            toast.success("Product added successfully.");
            navigate("/admin/products");
        } catch(error){
            console.error(error);
            toast.error("Failed to add product. Please try again.");
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-start p-12.5 overflow-y-scroll ">
           <div className="w-200 bg-accent/80 rounded-2xl p-10 overflow-y-visible">
           <h1 className="text-3xl font-bold mb-5"><AiOutlineProduct />Add New Product</h1>
           <div className="w-full bg-white p-5 flex flex-col flex-wrap justify-between rounded-2xl">
            <div className="my-2.5 w-[50%]">
                <label>Product ID:</label>
                <input value={productID} onChange={(e) => setProductID(e.target.value)} placeholder="Product ID" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
                <p className="text-sm text-gray-500 w-full text-right">Enter the unique ID for the product.</p>
            </div>
               <div className="my-2.5 w-[50%]">
                <label>Name:</label>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
                <div className="my-2.5">
                <label>Alternative Names:</label>
                <input type="text" value={altNames} onChange={(e) => setaltNames(e.target.value)} placeholder="Alternative Names" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
                <p className="text-sm text-gray-500 w-full text-right">Enter alternative names for the product, separated by commas.</p>
            </div>
                 <div className="my-2.5">
                <label>Description:</label>
                <textarea type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Product Description" className="w-full h-25 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[50%]">
                <label>Price:</label>
                <input type="number" value={Price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[50%]">
                <label>Label Price:</label>
                <input type="number" value={labelledPrice} onChange={(e) => setlabelledPrice(e.target.value)} placeholder="Label Price" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5">
                <label>Images:</label>
                <input type="text" value={images} onChange={(e) => setimages(e.target.value)} placeholder="Image URLs (comma-separated)" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[30%] flex flex-col">
                <label>Category:</label>
                <select value={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="cpu">CPU</option>
                    <option value="graphic-cards">Graphic Cards</option>
                    <option value="motherboards">Motherboards</option>
                    <option value="ram">RAM</option>
                    <option value="storage-devices">Storage Devices</option>
                    <option value="power-supplies">Power Supplies</option>
                    <option value="cooling-solutions">Cooling Solutions</option>
                    <option value="cases"> Computer Cases</option>
                    <option value="monitors">Monitors</option>
                    <option value="mouse-and-keyboards">Mouse and Keyboards</option>
                    <option value="accessories">Accessories</option>
                    <option value="laptops">Laptops</option>
                    <option value="prebuilt-pcs">Prebuilt PCs</option>
                    <option value="cables">Cables</option>
                    <option value="others">Others</option>
                </select>
                </div>
                <div className="my-2.5 w-[30%]">
                <label>Brand:</label>
                <input type="text" value={brand} onChange={(e) => setbrand(e.target.value)} placeholder="Brand" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[30%]">
                <label>Model:</label>
                <input type="text" value={model} onChange={(e) => setmodel(e.target.value)} placeholder="Model" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[50%]">
                <label>Stock:</label>
                <input type="number" value={Stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" className="w-full h-12.5 border-2 rounded-2xl border-gray-300 px-[10px] focus:outline-none focus:ring-accent"/>
            </div>
            <div className="my-2.5 w-[30%] flex items-center gap-2.5">
                <select
                   value={isAvailable} onChange={(e) => setisAvailable(e.target.value === "true")}>
                    <option value="false">Not Available</option>
                    <option value="true">Available</option>
                </select>
                <label className="ml-2">Available</label>
                <button onClick={addProduct} className="ml-auto bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark">Add Product</button>
            </div> 






           </div>
           </div>
        </div>
    )
}