import React from "react";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";

const Loading = () => {
  return (
    <>
      <div className="bg-white" style={{ minHeight: "50vh" }}>
        <div className="container-fluid h-100">
          <div className="row">
            <div className="col-12 text-center text-dark">
              <div className="mt-3">
                <h1
                  className="fs-3 "
                  style={{ color: "#84b544", height: "110px" }}
                >
                  Loading
                  <div
                    className="spinner-grow spinner-grow-sm mx-1 fs-6"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow spinner-grow-sm me-1 fs-6"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div
                    className="spinner-grow spinner-grow-sm me-1 fs-6"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
