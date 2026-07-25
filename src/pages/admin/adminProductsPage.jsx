import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const keyboards = [
  {
    productId: "KB001",
    name: "Logitech K380 Multi-Device Keyboard",
    altNames: ["K380", "Wireless Keyboard"],
    description: "Compact Bluetooth keyboard for multiple devices.",
    model: "K380",
    brand: "Logitech",
    price: 39.99,
    discountPrice: 34.99,
    stock: 50,
    labelledPrice: "KB-LOGI-K380",
    images: ["k380-1.jpg", "k380-2.jpg"],
    category: "Keyboards",
    isAvailable: true,
  },
  {
    productId: "KB002",
    name: "Redragon K552 Mechanical Keyboard",
    altNames: ["K552", "Kumara"],
    description: "Mechanical gaming keyboard with RGB lighting.",
    model: "K552",
    brand: "Redragon",
    price: 49.99,
    discountPrice: 44.99,
    stock: 30,
    labelledPrice: "KB-RED-K552",
    images: ["k552-1.jpg"],
    category: "Keyboards",
    isAvailable: true,
  }
];

const mice = [
  {
    productId: "MS001",
    name: "Logitech MX Master 3S",
    altNames: ["MX Master 3S"],
    description: "Premium wireless productivity mouse.",
    model: "MX Master 3S",
    brand: "Logitech",
    price: 99.99,
    discountPrice: 89.99,
    stock: 25,
    labelledPrice: "MS-LOGI-MX3S",
    images: ["mxmaster3s.jpg"],
    category: "Mice",
    isAvailable: true,
  },
  {
    productId: "MS002",
    name: "Razer DeathAdder V3",
    altNames: ["DeathAdder"],
    description: "Ergonomic gaming mouse with high-precision sensor.",
    model: "DeathAdder V3",
    brand: "Razer",
    price: 69.99,
    discountPrice: 59.99,
    stock: 40,
    labelledPrice: "MS-RAZER-DAV3",
    images: ["deathadder-v3.jpg"],
    category: "Mice",
    isAvailable: true,
  }

];

const storageDevices = [
  {
    productId: "ST001",
    name: "Samsung T7 Portable SSD 1TB",
    altNames: ["T7 SSD"],
    description: "High-speed portable external SSD.",
    model: "T7",
    brand: "Samsung",
    price: 119.99,
    discountPrice: 109.99,
    stock: 20,
    labelledPrice: "SSD-SAM-T7-1TB",
    images: ["samsung-t7.jpg"],
    category: "Storage",
    isAvailable: true,
  },
  {
    productId: "ST002",
    name: "SanDisk Ultra USB 3.0 128GB",
    altNames: ["Ultra USB"],
    description: "Fast USB flash drive for everyday storage.",
    model: "Ultra USB 3.0",
    brand: "SanDisk",
    price: 19.99,
    discountPrice: 14.99,
    stock: 100,
    labelledPrice: "USB-SD-128GB",
    images: ["sandisk-ultra.jpg"],
    category: "Storage",
    isAvailable: true,
  }
];


export default function LoginPage() {
    return (
        <div className="w-full max-h-full flex justify-center p-[10px] relative" >
            <table>
                <thead className="h-[100px]">
                    <tr>

                        <th>Image</th>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Label price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Stock</th>
                        <th>Availability</th>


                    </tr>


                </thead>
                <tbody>

                    <tr>
                        <td><img src="/Logo.png" className="w-[30px] h-[30px]"/></td>
                        <td>SKU-ACC-001</td>
                    
                    </tr>




                </tbody>



            </table>

            <Link to="/admin/add-product" className="w-12.5 h-12.5 flex justify-center items-center text-6xl border-2 rounded-full border-gray-300 hover:bg-gray-200 absolute right-5 bottom-5 "><BiPlus/></Link>
        </div>
    )
}