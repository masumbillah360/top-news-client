import React from "react";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="text-center">
        <div className="bg-success p-5 mb-3 rounded">
          <h1 className="fw-bold text-white">Read News Daily By</h1>
        </div>
        <div className="bg-danger p-5 mb-3 rounded">
          <h1 className="fw-bold text-white">Top News All Time</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
