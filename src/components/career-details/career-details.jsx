"use client";
import CallToAction from "@/src/forms/call-to-action";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const ServiceDetailsArea = () => {
  const router = useRouter();
  const { id } = router.query; // Mengambil parameter 'id' dari URL
  const [slug, setSlug] = useState(""); // Menyimpan data API [slug
  const [job, setJob] = useState([]);
  const [description, setDescription] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const fetchData = async () =>
    await axios
      .get(`https://testing.profectaperdana.com/api/job_vacancies/${id}`)
      .then(function (response) {
        // handle success
        const jobVacancies = response.data.data;

        setJob(response.data.data);
        setSlug(response.data.data.position);
        setDescription(jobVacancies.job_description);
        setQualification(jobVacancies.job_qualification);
        setQuestion(jobVacancies.job_question);
        setAnswer(jobVacancies.job_question.quest_answer);
        // console.log(jobVacancies.job_question);
      })
      .catch(function (error) {
        // handle error
      });

  //useEffect
  useEffect(() => {
    //call function "fetchData"
    fetchData();
  }, [id]);

  const slugLink = slug.split(" ").join("-").toLowerCase();
  return (
    <>
      {job ? (
        <div className='tp-service-details-area pt-40 pb-55'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-12 mb-20 '>
                <button
                  onClick={() => router.back()}
                  className='btn shadow btn-danger w-10 rounded'
                  href='#'>
                  <i className='fal fa-long-arrow-left'></i> Back{" "}
                </button>
              </div>
              <div className='col-xl-12'>
                <div className='tp-service-overveiw-area mr-20'>
                  <div
                    className='tp-overview-details shadow border-0'
                    style={{ backgroundColor: "#f9fff4" }}>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <span className='fs-6 fw-bold'>
                          Post : {job.date_post}
                        </span>
                      </div>
                      <div>
                        <span className='fs-6 fw-bold'>
                          End : {job.end_date}
                        </span>{" "}
                      </div>
                    </div>

                    <h2 className='overview-title'>{job.title}</h2>
                    <h4 className='text-break'>{job.position}</h4>
                    <p className='text-break'>{job.description}</p>
                    {/* <p>{ info_2 }</p> */}

                    <h4>Job description: </h4>

                    <div className='tp-overview-feature'>
                      <ul>
                        {description.map((item, i) => (
                          <li key={i}>
                            <i className='fal fa-check'></i>
                            <p className='text-break fw-bold'>{item.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h4>Qualification: </h4>

                    <div className='tp-overview-feature'>
                      <ul>
                        {qualification.map((item, i) => (
                          <li key={i}>
                            <i className='fal fa-check'></i>
                            <p className='text-break fw-bold'>{item.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className='tpservices__btn mt-50 '>
                    <Link href={`/form-apply/${job.unique_id}`}>
                      <button
                        className='tp-btn w-100 rounded'
                        href='#'>
                        Apply Now <i className='fal fa-long-arrow-right'></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </>
  );
};

export default ServiceDetailsArea;
