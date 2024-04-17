import SidebarSearch from "@/src/forms/sidebar-search";
import VideoPopup from "@/src/modals/video-popup";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import RecentPost from "./recent-post";
import Category from "./category";
import Tags from "./tags";
import axios from "axios";
import Pagination from "@/src/common/pagination";
import url from "@/utils/globals";
import { useLoadingContext } from "../loading/loading-context";
import Loading from "../loading";

const PostboxArea = ({ param }) => {
  const [blogData, setBlogData] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, setIsLoading } = useLoadingContext();

  const getblog = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getblog?page=${currentPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      //   console.log(data.data);
      setBlogData(data.data);
      setTotalPage(data.data.last_page);
    });
  };

  const getFilterByCategory = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getblog/${param}/filterbycategory?page=${currentPage}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      //   console.log(data.data);
      setBlogData(data.data);
      setTotalPage(data.data.last_page);
    });
  };

  useEffect(() => {
    getblog().then(() => {
      setIsLoading(false);
    });
  }, [currentPage]);

  useEffect(() => {
    getFilterByCategory();
  }, [param]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="postbox__area pt-120 pb-120">
          <div className="container">
            {param ? <h3>Filtered By Category: {param}</h3> : ""}
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="postbox__wrapper pr-20">
                  {blogData
                    ? blogData.data.map((item, i) => (
                        <article
                          key={i}
                          className="postbox__item format-image mb-50 transition-3"
                        >
                          {item.img_header && (
                            <div className="postbox__thumb w-img">
                              <Link href="/blog-details">
                                <img
                                  src={`${url.PROFECTA_API_URL}/public/images/cms/blogs/${item.img_header}`}
                                  alt="theme-pure"
                                />
                              </Link>
                            </div>
                          )}

                          <div className="postbox__content">
                            <div className="postbox__meta">
                              <span>
                                <i className="far fa-calendar-check"></i>
                                {new Date(item.post_date).toLocaleString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                  }
                                )}
                              </span>
                              <span>
                                <a href="#">
                                  <i className="far fa-user"></i>
                                  {item.author_by.name}
                                </a>
                              </span>
                            </div>
                            <h3 className="postbox__title">
                              <Link href={`/blog-detail/${item.slug}`}>
                                {item.title}
                              </Link>
                            </h3>
                            <div className="postbox__text">
                              <p>{item.preview}</p>
                            </div>
                            <div className="post__button">
                              <Link
                                className="tp-btn"
                                href={`/blog-detail/${item.slug}`}
                              >
                                READ MORE
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))
                    : ""}
                </div>
                <nav>
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage == 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link text-success"
                        tabIndex="-1"
                        aria-disabled="true"
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    {totalPage > 0
                      ? Array(totalPage)
                          .fill()
                          .map((_, i) => (
                            <li key={i} className="page-item">
                              <button
                                className={`page-link ${
                                  currentPage == i + 1
                                    ? "active bg-success border-success"
                                    : "text-success"
                                }`}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </button>
                            </li>
                          ))
                      : ""}
                    {/* {Array.from({ length: totalPage }, (_, i) => (
                    <li key={i} className="page-item">
                      <a className="page-link" href="#">
                        {i + 1}
                      </a>
                    </li>
                  ))} */}

                    <li
                      className={`page-item ${
                        currentPage == totalPage ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link text-success"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        href="#"
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <SidebarSearch />
                  <RecentPost />
                  <Category />
                  {/* <Tags /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostboxArea;
