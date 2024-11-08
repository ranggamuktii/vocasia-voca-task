import { Link } from 'react-router-dom';

const Task = () => {
  const tasks = [
    { id: 1, description: 'To study React fundamentals', done: false },
    { id: 2, description: 'Write documentation for API endpoints', done: false },
    { id: 3, description: 'Prepare a presentation on project status', done: false },
    { id: 4, description: 'Fix bugs in the authentication module', done: false },
    { id: 5, description: 'To study React fundamentals', done: true },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:max-w-5xl">
      <div className="bg-white flex flex-col justify-center items-center max-w-xs sm:max-w-md px-6 py-8 sm:px-10 sm:py-10 rounded-[20px] space-y-4 shadow-md">
        <img className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" src="https://placehold.co/400" />
        <h5 className="text-center">
          Welcome Back, <span className="font-semibold">Rangga</span>
        </h5>
        <Link to="/UpdateProfile">
          <button className="w-full flex justify-center items-center text-white bg-red-100 hover:bg-red-200 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 hover:scale-102 transition duration-500">
            <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-600 font-medium">Edit Profile</p>
          </button>
        </Link>
        <Link to="/">
          <button className="w-full flex justify-center items-center text-white bg-red-500 hover:bg-red-600 font-medium rounded-xl text-sm px-5 py-2.5 space-x-1 hover:scale-102 transition duration-500">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 19V5h4a1 1 0 0 1 1 1v11h1a1 1 0 0 1 0 2h-6Z" />
              <path fillRule="evenodd" d="M12 4.571a1 1 0 0 0-1.275-.961l-5 1.428A1 1 0 0 0 5 6v11H4a1 1 0 0 0 0 2h1.86l4.865 1.39A1 1 0 0 0 12 19.43V4.57ZM10 11a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1Z" clipRule="evenodd" />
            </svg>
            <p>Keluar</p>
          </button>
        </Link>
      </div>
      <div className="bg-white col-span-3 flex flex-col max-w-xs sm:max-w-5xl px-6 py-8 sm:px-10 sm:py-10 rounded-[20px] space-y-12 shadow-md">
        <div className="flex space-x-2">
          <input type="text" name="task" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Tambahkan tugas baru" required="" />
          <button className="bg-red-500 px-2 rounded-xl">
            <svg className="w-6 h-6 text-white hover:scale-110 transition duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-3">
          <h5>Task to do - {tasks.filter((task) => !task.done).length}</h5>
          {tasks
            .filter((task) => !task.done)
            .map((task) => (
              <div key={task.id} className="flex justify-between items-center p-4 mb-4 bg-gray-100 text-gray-700 rounded-xl ">
                <p className="text-sm font-medium">{task.description}</p>
                <div className="flex flex-row space-x-2 sm:space-x-4">
                  <button type="button" className="ms-auto -mx-1.5 -my-1.5  text-green-500 rounded-lg p-1.5  inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11.917 9.724 16.5 19 7.5" />
                    </svg>
                  </button>
                  <button type="button" className="ms-auto -mx-1.5 -my-1.5  text-red-500 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-1" aria-label="Close">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col space-y-3">
          <h5>Done - {tasks.filter((task) => task.done).length}</h5>
          {tasks
            .filter((task) => task.done)
            .map((task) => (
              <div key={task.id} className="flex justify-between items-center p-4 mb-4 bg-green-50 text-green-700 rounded-xl ">
                <p className="text-sm font-medium line-through">{task.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
