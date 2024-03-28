import blog_data from "@/src/data/blog-data";
import Link from "next/link";
import React from "react";
import { useHomeContext } from "./home-context";
import { FaCalendar, FaCalendarDays } from "react-icons/fa6";

const BlogArea = () => {
  const { recentBlogData, url } = useHomeContext();
  return (
    <>
      <div className="tp-blog-area pt-110 pb-90">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block pre mb-10">
                  blog
                </span>
                <h2 className="tp-section-title">Company Blog & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {recentBlogData
              ? recentBlogData.data.map((item, i) => (
                  <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                    <div className="tp-blog-main">
                      <div className="tp-blog-item text-center p-relative">
                        <div className="blog-img">
                          <div className="fix">
                            {" "}
                            <a href="#">
                              <img
                                src={`${url.PROFECTA_API_URL}/public/images/cms/blogs/${item.img_header}`}
                                alt="theme-pure"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="tp-blog-content">
                          <div className="tp-news-meta">
                            <span className="user">
                              <a href="#">
                                <i className="fal fa-user"></i>{" "}
                                {item.author_by.name}
                              </a>
                            </span>
                            <span className="user-2">
                              <a href="#">
                                <FaCalendarDays />{" "}
                                {new Date(item.post_date).toLocaleString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",

                                    hour12: true,
                                  }
                                )}
                              </a>
                            </span>
                          </div>
                          <h5 className="tp-blog-title">
                            <a href="#">{item.title}</a>
                          </h5>
                          <p>{item.preview.substring(0, 100) + "..."}</p>
                          <div className="tp-feed-link d-flex align-items-center">
                            <Link className="blog-link" href="/blog-details">
                              Read More{" "}
                              <i className="far fa-long-arrow-alt-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default BlogArea;
