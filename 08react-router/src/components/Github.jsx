export default function Github() {
  return (
    <div className="mx-auto w-full max-w-7xl py-32">
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl text-gray-900 font-bold">
            <b>Barun's</b> Github Repository
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the source code and contribute to the project on Github.
          </p>
          <div className="mt-4">
            <span className="font-medium">Followers:</span>{" "}
            <span className="text-gray-600">20</span>
          </div>
          <a
            href="https://github.com/Barun355"
            className="mt-4 inline-block bg-orange-700 text-white font-medium rounded-lg px-4 py-2 hover:bg-orange-800"
          >
            View on Github
          </a>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <img
            className="rounded-lg overflow-hidden w-48 border-2 border-slate-200"
            src={
              profileImage ||
              "https://avatars.githubusercontent.com/u/104523634?v=4"
            }
            alt="GitHub Profile"
          />
        </div>
      </div>
      <div className="flex justify-start items-center py-16">
        <div className="flex justify-between items-center w-full max-w-md bg-gray-50 focus:border-orange-500 focus:outline-none border border-gray-300 rounded-lg">
          <input
            type="text"
            name="searchUserName"
            id="searchUserName"
            placeholder="Github UserName"
            className="w-full py-3 px-4 rounded-l-lg text-gray-800 font-semibold outline-none border-none"
          />
          <button
            onClick={handleSearchUser}
            className="inline-block bg-orange-700 text-white font-medium rounded-lg px-4 mr-1 py-2 hover:bg-orange-800 h-full border-none outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        // Add dynmaic content
      </div>
    </div>
  );
}