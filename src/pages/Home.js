import { useEffect, useState } from "react";
import { fetchProducts } from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">CTF Tech Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <div key={i} className="bg-white p-4 rounded shadow-md">
            {product.image && (
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
            )}
            <h2 className="text-xl text-black font-semibold">{product.name}</h2>
            <p className="text-black">{product.description}</p>
            <p className="font-bold text-black">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
