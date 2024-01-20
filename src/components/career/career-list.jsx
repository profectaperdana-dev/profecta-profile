import React, { use, useState, useEffect } from 'react';
import Link from "next/link";
import axios from 'axios';
import Pagination from '@/src/common/pagination';

const ServiceArea = () => {
    const [job, setJob] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0
    });
    const fetchData = async (pageNumber = 1, keywords = '') => {
        const page = pageNumber ? pageNumber : pagination.currentPage;
        await axios.get(`https://testing.profectaperdana.com/api/job_vacancies?search=${keywords}&page=${page}`)
            .then(function (response) {
                // handle success
                setJob(response.data.data.data);
                setPagination(() => ({
                    currentPage: response.data.data.current_page,
                    perPage: response.data.data.per_page,
                    total: response.data.data.total
                }));
            })
            .catch(function (error) {
                // handle error
            })
    }
    const searchData = async (e) => {
        //set value to state "keywords"
        setKeywords(e.target.value);

        //call function "fetchData"
        fetchData(1, e.target.value)
    }
    //useEffect
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            {
                <div className="service-area pt-40 pb-55">
                    <div className="container">
                        <div className="row mb-50">
                            <div className="col-xl-12">
                                <div className="input-group input-group-lg mb-3">
                                    <button style={ { backgroundColor: "#84b544", color: "white" } } className="btn" id="basic-addon1"><i className='fa fa-search'></i></button>
                                    <input type="text" style={ { backgroundColor: "#f9fff4" } } className="form-control border-0 shadow" onChange={ (e) => searchData(e) } placeholder="search here..." />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                //cek apakah data ada
                                job.length > 0
                                    //looping data "roles" dengan "map"
                                    ? job.map((item, i) => (
                                        <div key={ i } className="col-lg-4 col-md-6 rounded mb-50">
                                            <div className="tpservices rounded">
                                                <div className="tpservices__content shadow" style={ { backgroundColor: "#f9fff4", height: "40vh" } }>
                                                    <i style={ { color: "#84b544" } } className="flaticon-group"></i>
                                                    <h3 className="tpservices__title">{ item.position }</h3>
                                                    <p className='text-break'>{ item.description.slice(0, 150) + (item.description.length > 150 ? '...' : '') }</p>
                                                </div>
                                                <div className="tpservices__btn shadow">
                                                    <Link href={ `/career-detail/${item.unique_id}` }>
                                                        <button className="tp-btn w-100 rounded" href="#">Job Details <i className="fal fa-long-arrow-right"></i></button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="row justify-content-center">
                                        <div className="col-xl-8 ">
                                            <div className="card shadow mb-50" style={ { backgroundColor: "#f9fff4" } }>
                                                <div className="tp-error-content-box text-center mb-50 mt-50">
                                                    {/* <img src="/assets/img/text-404.png" alt="theme-pure" /> */ }
                                                    <h1 style={ { fontSize: "3vw", color: "#84b544" } }>There are no vacancies at this time. Thank You</h1>
                                                    {/* <h4 className="error-title-sm">Oops.! Page Not Found!</h4> */ }
                                                    <h4 className="mt-50 mb-30">Please come back later.</h4>
                                                    <Link href={ "/" }><button className="tp-btn-2">Home</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                            <div className="col-xl-12 text-center">
                                <Pagination
                                    currentPage={ pagination.currentPage }
                                    perPage={ pagination.perPage }
                                    total={ pagination.total }
                                    onChange={ (pageNumber) => fetchData(pageNumber) }
                                    position="center"
                                    activeColor="#84b544"

                                />
                            </div>
                        </div>

                    </div>
                </div>

            }

        </>
    );
};

export default ServiceArea;