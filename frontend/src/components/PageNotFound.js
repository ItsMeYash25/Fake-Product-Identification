import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row ">
          <div className="col ">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <h5 className="card-title">404</h5>
                <p className="card-text">
                  Page Not Found
                </p>
                <Link to="/" className="card-link">Click To Visit Login Page.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
