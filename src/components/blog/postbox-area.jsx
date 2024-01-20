import SidebarSearch from '@/src/forms/sidebar-search';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import RecentPost from './recent-post';
import Category from './category';
import Tags from './tags';
import axios from 'axios';
import Pagination from '@/src/common/pagination';





const PostboxArea = () => {
    const sliderRef = useRef(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [blog, setBlog] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0
    });
    const fetchData = async (pageNumber = 1, keywords = '') => {
        const page = pageNumber ? pageNumber : pagination.currentPage;
        await axios.get(`https://testing.profectaperdana.com/api/blog?search=${keywords}&page=${page}`)
            .then(function (response) {
                // handle success
                setBlog(response.data.data.data);
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
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <section className="postbox__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="postbox__wrapper pr-20">
                                { blog.map((item, i) =>
                                    <article key={ i } className="postbox__item format-image mb-50 transition-3">
                                        { item.image &&
                                            <div className="postbox__thumb w-img">
                                                <Link href="/blog-details">
                                                    <img src={ `https://testing.profectaperdana.com/image_blog/${item.image}` } alt="theme-pure" />
                                                </Link>
                                            </div>
                                        }

                                        <div className="postbox__content">
                                            <div className="postbox__meta">
                                                <span><i className="far fa-calendar-check"></i>{ item.post_date }</span>
                                                <span><a href="#"><i className="far fa-user"></i>{ item.employee.name }</a></span>
                                            </div>
                                            <h3 className="postbox__title">
                                                <Link href="/blog-details">{ item.title }</Link>
                                            </h3>
                                            <div className="postbox__text">
                                                <p>{ item.description.slice(0, 300) + (item.description.length > 300 ? '...' : '') }</p>
                                            </div>
                                            <div className="post__button">
                                                <Link className="tp-btn" href="/blog-details">READ MORE</Link>
                                            </div>
                                        </div>
                                    </article>
                                ) }


                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="sidebar__wrapper">
                                <SidebarSearch />
                                <RecentPost />
                                <Category />
                                {/* <Tags /> */ }

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default PostboxArea;