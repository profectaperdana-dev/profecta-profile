import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import ImagePopup from '@/src/modals/ImagePopup';
import axios from 'axios';
import Link from "next/link";
const PortfolioArea = () => {
    const [dataCategories, setDataCategories] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [data, setData] = useState([]);

    const fetchCategories = async () => {
        await axios.get(`https://testing.profectaperdana.com/api/portfolio/get_categories`)
            .then(function (response) {
                // handle success
                setDataCategories(response.data.data);
            })
            .catch(function (error) {
                // handle error
            })
    }
    const fetchPortfolio = async () => {

        await axios.get(`https://testing.profectaperdana.com/api/portfolio`)
            .then(function (response) {
                // handle success
                setPortfolio(response.data.data.data);
                console.log(response.data.data.data);
                setData(response.data.data.data);
            })
            .catch(function (error) {
                // handle error
            })
    }
    const categories = [
        "All",
        ...new Set(dataCategories.map((item) => item.nama_sub_material)),
    ];

    // filtering                       
    const [activeCategory, setActiveCategory] = useState("All");

    const filterItems = (cateItem) => {
        setActiveCategory(cateItem);

        if (cateItem === "All") {
            return setPortfolio(data);
        } else {
            const findItems = data.filter((findItem) => {
                return findItem.product.sub_materials.nama_sub_material == cateItem;
            });
            console.log(findItems);
            setPortfolio(findItems);
        }
    };

    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(0);

    // image open state
    const [isOpen, setIsOpen] = useState(false);

    // handleImagePopup
    const handleImagePopup = (i) => {
        setPhotoIndex(i);
        setIsOpen(true);
    };

    //  images
    const img = portfolio.map((item) => `https://testing.profectaperdana.com/image_portfolio/${item.image}`);

    useEffect(() => {
        fetchPortfolio();
        fetchCategories();
    }, []);
    return (
        <>
            <div className="tp-portfolio-area pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="tp-port-button masonary-menu">
                                { categories.map((cate, i) => (
                                    <button
                                        onClick={ () => filterItems(cate) }
                                        key={ i }
                                        className={ `${cate === activeCategory ? "active" : ""}` }>
                                        <span>{ cate }</span>
                                    </button>
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className="row grid mixitup-active pt-40">
                        <motion.div layout className="row grid mixitup-active pt-40">

                            { portfolio.length >= 1 ? portfolio.map((item, i) =>
                                <motion.div
                                    key={ i }
                                    layout
                                    animate={ { opacity: 1 } }
                                    initial={ { opacity: 0 } }
                                    exit={ { opacity: 0 } }
                                    transition={ { duration: 0.8 } }
                                    className="col-xl-4 col-lg-6 col-md-6 grid-item cat3 cat5">
                                    <div className="tp-port-item mb-30">
                                        <div className="tp-case-img">
                                            <div className="fix"><img src={ `https://testing.profectaperdana.com/image_portfolio/${item.image}` } alt="" className="img-fluid w-100" /></div>
                                        </div>
                                        <div className="tp-port-content">
                                            <span className="port-title">{ item.title }</span>
                                            <h3 className="port-subtitle">{ item.description.slice(0, 150) + (item.description.length > 150 ? '...' : '') }</h3>
                                        </div>
                                        <div className="tp-port-icon">
                                            <button className="popup-image" onClick={ () => handleImagePopup(i) } ><i className="far fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) :
                                <div className="row mx-auto justify-content-center">
                                    <div className="col-xl-8 ">
                                        <div className="card shadow mb-50" style={ { backgroundColor: "#f9fff4" } }>
                                            <div className="tp-error-content-box text-center mb-50 mt-50">
                                                {/* <img src="/assets/img/text-404.png" alt="theme-pure" /> */ }
                                                <h1 style={ { fontSize: "3vw", color: "#84b544" } }>Portfolio not yet available</h1>
                                                {/* <h4 className="error-title-sm">Oops.! Page Not Found!</h4> */ }
                                                <h4 className="mt-50 mb-30">Wait for our next update.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </motion.div>

                    </div>

                </div>
            </div>

            {/* image light box start */ }
            { isOpen && (
                <ImagePopup
                    images={ img }
                    setIsOpen={ setIsOpen }
                    photoIndex={ photoIndex }
                    setPhotoIndex={ setPhotoIndex }
                />
            ) }
            {/* image light box end */ }
        </>
    );
};

export default PortfolioArea;