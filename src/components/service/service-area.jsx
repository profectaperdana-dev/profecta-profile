import service_data from "@/src/data/service-data";
import React, { useEffect, useRef, useState } from "react";
import url from "@/utils/globals";
import { FaBatteryFull, FaCarBattery } from "react-icons/fa6";
import { GiTyre } from "react-icons/gi";

const ServiceArea = () => {
  const [subMaterialData, setSubMaterialData] = useState(null);
  const [activeSubMaterial, setActiveSubMaterial] = useState(2);
  const [productData, setProductData] = useState(null);
  const formRef = useRef(null);

  const getsubmaterial = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getproduct/submaterial`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setSubMaterialData(data);
    });
  };

  const filteredproduct = async (id) => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getproduct/${id}/filterbysubmaterial`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      //   console.log(data);
      setProductData(data);
    });
  };

  const productFilterHandler = (id) => {
    setActiveSubMaterial(id);
    filteredproduct(id);
  };

  const productSearchHandler = async (e) => {
    e.preventDefault();
    setActiveSubMaterial(-1);
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getproduct/${e.target.text_input.value}/search`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setProductData(data);
      // console.log(data);
    });
  };

  const resetHandler = () => {
    setActiveSubMaterial(2);
    filteredproduct(2);
    formRef.current.reset();
  };

  useEffect(() => {
    getsubmaterial();
    filteredproduct(activeSubMaterial);
  }, []);
  return (
    <>
      <div className="service-area pt-120 pb-55">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9 col-lg-6">
              <form onSubmit={productSearchHandler} ref={formRef}>
                <div className="input-group input-group-lg mb-3">
                  <input
                    type="text"
                    className="form-control border-0 shadow"
                    // onChange={(e) => searchData(e)}
                    name="text_input"
                    placeholder="search here..."
                  />
                  <button
                    type="submit"
                    style={{ backgroundColor: "#84b544", color: "white" }}
                    className="btn"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-1 my-1">
              <button
                className="btn text-warning"
                onClick={resetHandler}
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="tp-port-button masonary-menu mb-4 mt-3 text-center">
            {subMaterialData
              ? subMaterialData.data.map((item, i) => (
                  <button
                    onClick={() => productFilterHandler(item.id)}
                    key={i}
                    className={item.id == activeSubMaterial ? "active" : ""}
                  >
                    {item.nama_sub_material}
                  </button>
                ))
              : ""}
          </div>

          <div className="row">
            {productData
              ? productData.data.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-6">
                    <div className="tpservices" style={{ height: "100%" }}>
                      <div className="tpservices__thumb">
                        <div className="fix">
                          <a href="#">
                            <img
                              src={`${url.PROFECTA_API_URL}/foto_produk/${
                                item.foto_barang
                                  ? item.foto_barang
                                  : "no-image.jpg"
                              }`}
                              alt="theme-pure"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tpservices__content">
                        {item.materials.nama_material == "Tyre" ? (
                          <GiTyre className="display-4 text-success" />
                        ) : (
                          <FaCarBattery className="display-4 text-success" />
                        )}

                        <h5 className="tpservices__title fs-5">
                          {`${item.sub_materials.nama_sub_material} ${item.sub_types.type_name} ${item.nama_barang}`}
                        </h5>
                        {/* <p>{item.description}</p> */}
                      </div>
                      {/* <div className="tpservices__btn">
                        <a className="tp-btn w-100" href="#">
                          Service Details{" "}
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
