import { useEffect, useState } from "react";
import { fetchProducts, getActivityFeed } from "../api";
import { Link } from "react-router-dom";

// --- NEW COMPONENT ---
function LiveActivityFeed() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const data = await getActivityFeed();
                setEvents(data);
            } catch (error) {
                console.error("Failed to fetch activity feed:", error);
            }
        };

        fetchFeed();
        const interval = setInterval(fetchFeed, 15000); // Refresh every 15 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-green-700 mt-8">
            <h3 className="text-lg font-bold text-green-400 mb-2">Live Activity Feed</h3>
            <ul className="space-y-2 text-sm">
                {events.map(event => (
                    <li key={event._id} className="text-gray-400">
                        <span className="font-bold text-green-500">{event.username}</span> {event.message}
                        {event.points && <span className="text-yellow-400 font-bold"> (+{event.points})</span>}
                        <span className="text-xs text-gray-500 ml-2">{new Date(event.timestamp).toLocaleTimeString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <h1 className="text-4xl text-center font-bold mb-8 text-green-400">CTF Tech Store</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => (
                <Link to={`/products/${product._id}`} key={product._id}>
                <div className="bg-gray-900 border border-green-500 p-4 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                    <h2 className="text-xl text-green-300 font-semibold">{product.name}</h2>
                    <p className="text-gray-400 mt-2">{product.description}</p>
                    <p className="font-bold text-2xl text-white mt-4">${product.price}</p>
                </div>
                </Link>
                ))}
            </div>
        </div>
        <div className="md:col-span-1">
            <LiveActivityFeed />
        </div>
    </div>
  );
}
