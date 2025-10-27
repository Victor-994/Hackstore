import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../api';

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      // --- NEW (Suggestion 3 - Recon Flag) ---
      // CTF{JAVASCRIPT_SOURCE_CODE_REVIEW}
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Product not found or is not available.');
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return (
        <div className="text-center mt-20">
            <h1 className="text-2xl text-red-500">{error}</h1>
            <Link to="/" className="text-green-400 hover:underline mt-4 inline-block">← Back to all products</Link>
        </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-20">Loading product...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-green-400 mb-4">{product.name}</h1>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <p className="text-5xl font-bold text-white">${product.price}</p>
                 <Link to="/" className="text-green-400 hover:underline mt-8 inline-block">← Back to all products</Link>
            </div>
        </div>
    </div>
  );
}