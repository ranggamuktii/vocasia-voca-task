const Login = () => {
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
      <form className="space-y-6 sm:p-2 md:p-4 mt-5 sm:mt-2" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Masukkan email anda"
            required=""
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Masukkan Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Masukkan password anda"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required=""
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required=""
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-600">
              Ingat saya
            </label>
          </div>
          <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </a>
        </div>
        <button type="submit" className="w-full text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
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
