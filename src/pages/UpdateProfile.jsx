import { Link } from 'react-router-dom';

const UpdateProfile = () => {
  return (
    <div className="bg-white w-full sm:max-w-sm md:max-w-md px-6 py-8 sm:px-6 sm:py-8 rounded-[30px] shadow-0 sm:shadow-md space-y-5">
      <Link to="/task" className="flex font-medium cursor-pointer hover:scale-102 transition duration-500">
        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
        </svg>
        <p>Edit Profile</p>
      </Link>
      <div className="flex flex-col justify-center items-center px-2 sm:px-2">
        <img className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" src="https://placehold.co/400" />
        <form className="w-full space-y-6 sm:p-2 md:p-4 mt-5 sm:mt-2" action="#">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Profile URL
            </label>
            <input type="text" name="profile" id="profile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="<Image URL>" required="" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Nama Lengkap
            </label>
            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Rangga Mukti Daniswara" required="" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Masukkan Email
            </label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="ranggamukti@gmail.com" required="" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Masukkan Password
            </label>
            <div className="flex">
              <input type="text" name="password" id="password" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required="" />
            </div>
          </div>
          <Link to="/task">
            <button className="w-full flex justify-center items-center text-gray-400 hover:text-green-100 bg-gray-200 hover:bg-green-600 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 mt-5 hover:scale-102 transition duration-500">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" />
              </svg>
              <p className="font-semibold">Submit</p>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
