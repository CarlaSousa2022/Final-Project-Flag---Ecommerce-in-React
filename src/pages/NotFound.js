import "../css/NotFound.css";

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="text">
        <h1>ERROR</h1>
        <h2>404</h2>
        <h3>Page Not Found</h3>
      </div>
      <div className="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          className="src"
        />
      </div>
    </div>
  );
};

export default NotFound;
