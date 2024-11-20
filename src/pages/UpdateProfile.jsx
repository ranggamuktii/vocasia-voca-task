import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    photo_url: '',
    name: '',
    email: '',
    password: '',
  });

  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  const fetchProfileData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL + '/users/profile', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }

      const data = await response.json();
      setProfileData({
        photo_url: data.data.photo_url,
        name: data.data.name,
        email: data.data.email,
        password: '',
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(BASE_URL + '/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      alert('Profile updated successfully!');
      navigate('/task');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNavigateToTask = () => {
    navigate('/task');
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="bg-white w-full sm:max-w-sm md:max-w-md px-6 py-8 sm:px-6 sm:py-8 rounded-[30px] shadow-0 sm:shadow-md space-y-5">
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <button onClick={handleNavigateToTask} className="flex font-medium cursor-pointer hover:scale-102 transition duration-500">
        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
        </svg>
        <p>Edit Profile</p>
      </button>
      <div className="flex flex-col justify-center items-center px-2 sm:px-2">
        <img className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" src={profileData.photo_url} />
        <form className="w-full space-y-6 sm:p-2 md:p-4 mt-5 sm:mt-2" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Profile URL
            </label>
            <input
              type="text"
              name="photo_url"
              id="photo_url"
              value={profileData.photo_url}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="<Image URL>"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={profileData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
              placeholder="Rangga Mukti Daniswara"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Masukkan Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={profileData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="ranggamukti@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Masukkan Password
            </label>
            <div className="flex">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="*******"
                value={profileData.password}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                required
              />
            </div>
          </div>
          <button
            onClick={updateProfile}
            className="w-full flex justify-center items-center text-gray-400 hover:text-green-100 bg-gray-200 hover:bg-green-600 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 mt-5 hover:scale-102 transition duration-500"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" />
            </svg>
            <p className="font-semibold">Submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
