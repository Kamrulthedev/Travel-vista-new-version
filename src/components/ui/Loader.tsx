import "./LoaderStyles.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinners">
        <div className="spinner"></div>
        <div className="spinner delay-1"></div>
        <div className="spinner delay-2"></div>
      </div>
    </div>
  );
};
export default Loader;
