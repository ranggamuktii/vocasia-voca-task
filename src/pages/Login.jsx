import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BASE_URL from '../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('rememberedToken');
    const rememberedEmail = Cookies.get('rememberedEmail');
    const rememberedPassword = Cookies.get('rememberedPassword');

    if (token) {
      navigate('/task');
    }

    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }

    if (rememberedPassword) {
      setPassword(rememberedPassword);
      setShowPassword(true);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BASE_URL + '/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data.data;

        if (rememberMe) {
          Cookies.set('rememberedEmail', email, { expires: 30 });
          Cookies.set('rememberedPassword', password, { expires: 30 });
        }

        rememberMe ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);
        navigate('/task');
      } else {
        setError(data.message || 'Login gagal, silakan coba lagi.');
      }
    } catch (error) {
      setError('Terjadi kesalahan, coba lagi.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-6 py-8 sm:p-4 rounded-[30px] shadow-md">
      <div className="space-y-2 sm:space-y-4 sm:pt-6 md:pt-8">
        <div className="flex justify-center items-center space-x-2 hover:scale-105 hover:-rotate-1 transition duration-500">
          <img className="w-6 h-6 sm:w-8 sm:h-8" src="../../public/task_logo.png" />
          <h5 className="text-2xl sm:text-3xl font-bold text-gray-900">Voca Task</h5>
        </div>
        <div className="space-y-1 flex flex-col justify-center text-center ">
          <p className="text-md sm:text-lg font-semibold text-gray-900 hover:scale-105 transition duration-500">Selamat datang di Voca Task!</p>
          <p className="text-xs sm:text-sm font-normal text-gray-600 hover:scale-105 transition duration-500">Aplikasi Todo Task yang praktis dan efisien, siap membantu mengelola semua tugas dan kebutuhanmu kapan pun.</p>
        </div>
      </div>
      <form className="space-y-6 sm:p-2 md:p-4 mt-5 sm:mt-2" autoComplete="on">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Masukkan email anda"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Password
          </label>
          <div className="flex">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Masukkan password anda"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="inline-flex items-center px-2 sm:px-4 text-sm text-gray-900 bg-gray-50 hover:bg-gray-200 border border-s-0 border-gray-300 rounded-e-md">
              {showPassword ? (
                <svg className="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                  <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
                  <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                  <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
                </svg>
              )}
              <span className="sr-only">{showPassword ? 'Hide' : 'Show'} password</span>
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-600">
                Ingat saya
              </label>
            </div>
          </div>
          <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </a>
        </div>
        <button type="button" onClick={handleSubmit} className="w-full text-white bg-red-500 hover:bg-red-700 font-medium rounded-xl text-sm px-5 py-2.5 text-center mt-4">
          Masuk
        </button>
        <div className="text-sm font-medium text-gray-400 text-center">
          Belum punya akun?{' '}
          <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
            Daftar dulu
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
