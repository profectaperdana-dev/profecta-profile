import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { set, z } from "zod";
import { json } from "react-router-dom";
import axios from "axios";

// ** FORM VALIDATION

const CheckoutArea = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [position, setPosition] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    position: "",
    nik: "",
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    place_of_birth: "",
    address: "",
    phone_number: "",
    email: "",
    campus: "",
    major: "",
  });
  const [imageData, setImageData] = useState(null);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState({});

  // ** USE EFFECT
  useEffect(() => {
    fetchQuestion();
  }, [router.query.slug]);
  const fetchQuestion = async () =>
    await axios
      .get(
        `https://testing.profectaperdana.com/api/job_vacancies/${router.query.slug}/question`
      )
      .then(function (response) {
        const question = response.data.data;
        setQuestion(question.job_question);
        setPosition(question);
        setRegisterData({ ...registerData, position: question.id });
      })
      .catch(function (error) {
        // handle error
      });
  // ** CHANGE HANDLER
  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const fileHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImageData(selectedFile);
  };
  const answerHandler = (e, questionId) => {
    const selectedAnswerId = e.target.value;
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      [questionId]: selectedAnswerId,
    }));
  };

  // ** SUBMIT HANDLER
  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    if (Object.entries(answer).length < question.length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please answer all the questions",
      });
    }
    const formData = new FormData();

    // Append registerData as a field named 'data'
    formData.append("data", JSON.stringify(registerData));

    // Append imageData as a field named 'image'
    formData.append("image", imageData);
    formData.append("response_question", JSON.stringify(answer));

    await axios
      .post("https://testing.profectaperdana.com/api/job_vacancies", formData, {
        //header
        headers: {
          //header Bearer + Token
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Thank you for applying",
          text: "We will contact you soon",
        });
        router.push("/");
      })
      .catch((error) => {
        if (error.response.status === 421) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The file must be a PDF",
          });
        } else if (error.response.status === 423) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "May not apply for the same position twice",
          });
        }
        setErrors(error.response.data);
      })
      .finally(() => {
        setBtnLoading(false);
      });
  };

  return (
    <>
      <section className="checkout-area pt-40 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-12 mb-20">
              <button
                onClick={() => router.back()}
                className="btn btn-danger shadow w-10 rounded"
                href="#"
              >
                <i className="fal fa-long-arrow-left"></i> Back{" "}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                style={{ backgroundColor: "#f9fff4" }}
              >
                <div className="tpservices rounded shadow mb-40 rounded p-4">
                  <h3>Applicant Data</h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-12 mb-20">
                      <label>
                        Position<span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        readOnly
                        className="form-control fw-bold text-uppercase"
                        defaultValue={position.position}
                        type="text"
                        placeholder=""
                      />
                      <input
                        autoComplete="off"
                        readOnly
                        name="position"
                        id="position"
                        className="form-control fw-bold text-uppercase"
                        defaultValue={position.id}
                        type="hidden"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-12 mb-20">
                      <label>
                        NIK <span className="required">*</span>{" "}
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.nik}
                        onChange={changeHandler}
                        name="nik"
                        className="form-control text-uppercase"
                        type="text"
                        placeholder="Nomor Induk Kependudukan "
                      />
                      {errors.nik && (
                        <div className="text text-danger">{errors.nik[0]}</div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.first_name}
                        onChange={changeHandler}
                        name="first_name"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Nama Depan"
                      />
                      {errors.first_name && (
                        <div className="text text-danger">
                          {errors.first_name[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.last_name}
                        onChange={changeHandler}
                        name="last_name"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Nama Belakang"
                      />
                      {errors.last_name && (
                        <div className="text text-danger">
                          {errors.last_name[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 mb-20">
                      <label>
                        Gender <span className="required">*</span>
                      </label>
                      <select
                        value={registerData.gender}
                        onChange={changeHandler}
                        name="gender"
                        className="form-select"
                      >
                        <option value={""}>--Choose Gender--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.gender && (
                        <div className="text text-danger">
                          {errors.gender[0]}
                        </div>
                      )}
                    </div>

                    <div className="col-md-4 mb-20">
                      <label>
                        {" "}
                        Date of Birth <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.date_of_birth}
                        onChange={changeHandler}
                        name="date_of_birth"
                        className="form-control text-uppercase"
                        type="date"
                        placeholder=""
                      />
                      {errors.date_of_birth && (
                        <div className="text text-danger">
                          {errors.date_of_birth[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 mb-20">
                      <label>
                        Place of Birth
                        <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.place_of_birth}
                        onChange={changeHandler}
                        name="place_of_birth"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Tempat Lahir"
                      />
                      {errors.place_of_birth && (
                        <div className="text text-danger">
                          {errors.place_of_birth[0]}
                        </div>
                      )}
                    </div>

                    <div className="col-md-12 mb-20">
                      <label>
                        Address <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.address}
                        onChange={changeHandler}
                        name="address"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Alamat"
                      />
                      {errors.address && (
                        <div className="text text-danger">
                          {errors.address[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.phone_number}
                        onChange={changeHandler}
                        name="phone_number"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Nomor Telepon"
                      />
                      {errors.phone_number && (
                        <div className="text text-danger">
                          {errors.phone_number[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.email}
                        onChange={changeHandler}
                        name="email"
                        className="form-control text-capitalized"
                        type="mail"
                        placeholder="Alamat Surel"
                      />
                      {errors.email && (
                        <div className="text text-danger">
                          {errors.email[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        Campus{" "}
                        <span className="required">* (last education)</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.campus}
                        onChange={changeHandler}
                        name="campus"
                        className="form-control text-capitalized"
                        type="text"
                        placeholder="Sekolah/Universitas"
                      />
                      {errors.campus && (
                        <div className="text text-danger">
                          {errors.campus[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 mb-20">
                      <label>
                        Major{" "}
                        <span className="required">* (last education)</span>
                      </label>
                      <select
                        value={registerData.major}
                        onChange={changeHandler}
                        name="major"
                        className="form-select"
                      >
                        <option value={""}>--Choose Major--</option>
                        <option value="SLTA/SMK/MA/D-1">SLTA/SMK/MA/D-1</option>
                        <option value="D-II">D-II</option>
                        <option value="D-III">D-III</option>
                        <option value="S-1/D-IV/PROFESI">
                          S-1/D-IV/PROFESI
                        </option>
                        <option value="S-2/SPESIALIS">S-2/SPESIALIS</option>
                        <option value="S-3">S-3</option>
                        <option value="TENAGA KESEHATAN">
                          TENAGA KESEHATAN
                        </option>
                      </select>

                      {errors.major && (
                        <div className="text text-danger">
                          {errors.major[0]}
                        </div>
                      )}
                    </div>

                    <div className="col-md-12 mb-30">
                      <label>
                        Applications & CV{" "}
                        <span className="required">* (PDF)</span>
                      </label>
                      <input
                        autoComplete="off"
                        value={registerData.file}
                        accept="application/pdf"
                        onChange={fileHandler}
                        name="file"
                        className="form-control"
                        type="file"
                        placeholder=""
                      />
                      {errors && (
                        <div className="text text-danger">{errors[0]}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12 mb-20">
                    <ul>
                      {question.map((item, i) => (
                        <li className="mb-3" key={i}>
                          <h5>
                            {" "}
                            {i + 1 + ". "}
                            {item.question}
                          </h5>
                          <input
                            type="hidden"
                            defaultValue={item.id}
                            name={`job_question[${i}][question]`}
                          />
                          <ul>
                            {item.quest_answer.map((answerItem, j) => (
                              <li key={j}>
                                <label>
                                  <input
                                    onChange={(e) => answerHandler(e, item.id)}
                                    type="radio"
                                    name={`job_question[${i}][answer]`}
                                    value={answerItem.id}
                                  />
                                  {" " + answerItem.answer}{" "}
                                  {/* { answerItem.id } */}
                                </label>
                                <br />{" "}
                                {/* Menambahkan baris baru setelah setiap opsi jawaban */}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tpservices__btn shadow">
                  <button
                    id="btn-register"
                    type="submit"
                    disabled={btnLoading}
                    className="tp-btn w-100 rounded"
                  >
                    {!btnLoading ? "Submit " : <>Loading...</>}{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutArea;
