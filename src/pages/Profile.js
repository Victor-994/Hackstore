import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(user.username);
        setProfile(data);
      } catch (err) {
        setError('Could not fetch profile data. Have you submitted any flags yet?');
      }
    };

    fetchProfile();
  }, [user, navigate]);

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  if (!profile) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-2 text-green-400">
        {profile.username}'s Profile
      </h1>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
        Total Score: {profile.score}
      </h2>

      <h3 className="text-xl font-bold mb-4 text-green-300">Captured Flags</h3>
      <div className="space-y-3">
        {profile.flags.map((item) => (
          <div key={item.flag} className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
            <div>
              <p className="font-mono text-gray-300">{item.flag}</p>
              <p className="text-xs text-gray-500">
                Captured on: {new Date(item.time).toLocaleString()}
              </p>
            </div>
            {item.firstBlood && (
              <span className="text-sm font-bold text-red-500 bg-red-900 px-2 py-1 rounded">
                🩸 FIRST BLOOD
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
