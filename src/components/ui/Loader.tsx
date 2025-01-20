import "./LoaderStyles.css";
const Loader = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center z-[9999] bg-gray-100">
    <div className="spinners">
      <div className="spinner"></div>
      <div className="spinner delay-1"></div>
      <div className="spinner delay-2"></div>
    </div>
  </div>
  );
};

export default Loader;
