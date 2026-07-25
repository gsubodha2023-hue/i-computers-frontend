import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";

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
  },
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
  },
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
  },
];

export default function AdminProductsPage() {
  const [_products, setProducts] = useState([]);
  const [loaded, setLoaded]= useState(false)


  useEffect(() => {
    if(!loaded){
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/products")
        .then((Response) => {
          console.log(Response.data);
          setProducts(Response.data);
          setLoaded(true);
        });
    }
  }, [loaded]);
  return (
    <div className="w-full h-full bg-(--color-primary) p-8 overflow-auto relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Product Management
            </h1>
            <p className="text-gray-300 mt-2">
              Manage your products inventory
            </p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">

              <thead className="bg-(--color-secondary) sticky top-0">
                <tr>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Label Price
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-5 text-left text-white font-semibold uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-6 py-5 text-center text-white font-semibold uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-5 text-center text-white font-semibold uppercase tracking-wider">
                    Availability
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {[...keyboards, ...mice, ...storageDevices].map((item) => {
                  const img =
                    item.images && item.images.length
                      ? `/${item.images[0]}`
                      : "/Logo.png";

                  return (
                    <tr
                      key={item.productId}
                      className="transition-all duration-300 hover:bg-yellow-50 hover:shadow-md"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={img}
                          alt={item.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-gray-200 shadow"
                        />
                      </td>

                      <td className="px-6 py-4 font-bold text-(--color-secondary)">
                        {item.productId}
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-800">
                        {item.name}
                      </td>

                      <td className="px-6 py-4 font-bold text-(--color-accent) text-lg">
                        ${item.price}
                      </td>

                      <td className="px-6 py-4 text-gray-500">
                        ${item.discountPrice}
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-4 py-2 rounded-full bg-(--color-secondary)/10 text-(--color-secondary) text-sm font-semibold">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-medium text-gray-700">
                        {item.brand}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 rounded-lg bg-gray-100 font-bold text-gray-700">
                          {item.stock}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.isAvailable
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.isAvailable
                            ? "✓ In Stock"
                            : "✕ Out of Stock"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-5m">
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => {
                              const token = localStorage.getItem("token");
                              axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productId, {
                                headers: {
                                  Authorization: `Bearer ${token}`
                                }
                              }).then(() => {
                                toast.success("product deleted successfully");
                              });
                            }}
                            className="w-25 bg-red-500 flex justify-center items-center text-white p-2 rounded-lg cursor-pointer hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {loaded?<table></table>:<loader/>
        }

        {/* Floating Add Button */}
        <Link
          to="/admin/add-product"
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full   text-white flex justify-center items-center text-5xl shadow-2xl hover:scale-110 hover:rotate-90 transition-all duration-300"
        >
          <BiPlus />
        </Link>
      </div>
    </div>
  );
}