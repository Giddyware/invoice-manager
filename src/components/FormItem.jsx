function Input({ label, type, ...props }) {
  return (
    <div className="mb-2">
      <label
        htmlFor={label.toLowerCase()}
        className="block mb-2 text-gray-dark-63"
      >
        {label}
      </label>
      <input
        {...props}
        className="block w-full h-12 px-5 py-2 border border-solid rounded-md shadow-sm border-gray focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:ring-opacity-50 lg:w-full"
      />
     
    </div>
  );
}

export default Input;
