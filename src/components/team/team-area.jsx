import team_data from "@/src/data/team-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import url from "@/utils/globals";
import { useLoadingContext } from "../loading/loading-context";
import Loading from "../loading";

const TeamArea = () => {
  const [teamData, setTeamData] = useState(null);
  const { isLoading, setIsLoading } = useLoadingContext();

  const getteam = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getteam`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setTeamData(data);
    });
  };

  useEffect(() => {
    getteam().then(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="tp-team-area pt-115 pb-80">
          <div className="container">
            <div className="row">
              {teamData
                ? teamData.data.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                      <div className="tp-team-item mb-30">
                        <div className="tp-team-img p-relative">
                          <div className="fix">
                            <a href="#">
                              <img
                                src={`${url.PROFECTA_API_URL}/public/images/employees/${item.employee_by.photo}`}
                              />
                            </a>
                          </div>
                          {/* <div className="tp-team-overlay">
                          <div className="team-overlay-icon">
                            <a className="team-icon-main" href="#">
                              <i className="fal fa-plus"></i>
                            </a>
                            <div className="team-icon-bottom">
                              <a href="#">
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-google"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </div>
                          </div>
                        </div> */}
                        </div>
                        <div className="tp-team-designation text-center pt-35">
                          <h5 className="client-name">
                            {item.employee_by.name}
                          </h5>
                          <a className="client-position" href="#">
                            {item.employee_by.job}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamArea;
