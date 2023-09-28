export default async function SearchFormContainer() {
  return (
    <div className="bg-white flex flex-col items-center py-16 md:py-32 px-4 md:px-10 text-center text-4xl text-white font-inter">
      <h2 className="text-5xl font-bold mb-8">Search Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-palevioletred-200 p-4">
          <label className="text-xl font-bold">Job</label>
          <input
            type="text"
            className="w-full py-2 px-4 text-lg rounded-md"
            placeholder="Software Engineer"
          />
        </div>
        <div className="bg-white rounded-xl border border-palevioletred-200 p-4">
          <label className="text-xl font-bold">Sector</label>
          <input
            type="text"
            className="w-full py-2 px-4 text-lg rounded-md"
            placeholder="IT"
          />
        </div>
        <div className="bg-white rounded-xl border border-palevioletred-200 p-4">
          <label className="text-xl font-bold">Position</label>
          <input
            type="text"
            className="w-full py-2 px-4 text-lg rounded-md"
            placeholder="Team Lead"
          />
        </div>
        <div className="bg-white rounded-xl border border-palevioletred-200 p-4">
          <label className="text-xl font-bold">Income</label>
          <select className="w-full py-2 px-4 text-lg rounded-md">
            <option value="">Please select</option>
          </select>
        </div>
        <div className="bg-white rounded-xl border border-palevioletred-200 p-4">
          <label className="text-xl font-bold">Area</label>
          <select className="w-full py-2 px-4 text-lg rounded-md">
            <option value="">Please select</option>
          </select>
        </div>
      </div>
      <button className="bg-mediumslateblue text-white text-2xl font-bold py-4 px-8 rounded-full mt-8">
        Search
      </button>
    </div>
  );
}
