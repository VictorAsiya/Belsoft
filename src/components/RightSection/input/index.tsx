function Input() {
  return (
    <div className="flex flex-wrap gap-2 items-center w-full px-2">
      <input
        type="text"
        placeholder="Search"
        className="bg-white w-full sm:max-w-[300px] md:max-w-[424px] py-2 px-3 rounded-md text-sm border border-gray-300"
      />
      <button className="bg-white px-4 py-2 rounded-md border border-gray-300 text-sm">
        Sort by
      </button>
    </div>
  );
}

export default Input;
