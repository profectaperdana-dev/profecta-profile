import CommentForm from "@/src/forms/comment-form";
import React, { useEffect, useState } from "react";
import CommentBox from "./comment-box";
import SidebarSearch from "@/src/forms/sidebar-search";
import RecentPost from "../blog/recent-post";
import Category from "../blog/category";
import Tags from "../blog/tags";
import Link from "next/link";
import { useRouter } from "next/router";
import url from "@/utils/globals";

const PostboxArea = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [contentdata, setContentData] = useState(null);

  const getcontent = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getblog/${slug}/read`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      //   console.log(router.query);
      setContentData(data);
    });
  };

  useEffect(() => {
    getcontent();
  }, [slug]);

  //   useEffect(() => {
  //     console.log(router.query);
  //   });

  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <i className="far fa-calendar-check"></i>{" "}
                        {new Date(contentdata?.data?.post_date).toLocaleString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          }
                        )}{" "}
                      </span>
                      <span>
                        <a href="#">
                          <i className="far fa-user"></i>{" "}
                          {contentdata?.data?.author_by.name}
                        </a>
                      </span>
                      {/* <span>
                        <a href="#">
                          <i className="fal fa-comments"></i> 02 Comments
                        </a>
                      </span> */}
                    </div>
                    <h3 className="postbox__title">
                      {contentdata?.data?.title}
                    </h3>
                    <div className="postbox__text">
                      <p>
                        <img
                          src={`${url.PROFECTA_API_URL}/public/images/cms/blogs/${contentdata?.data?.img_header}`}
                          alt="theme-pure"
                        />
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: contentdata?.data?.article,
                        }}
                      />
                    </div>

                    <div className="postbox__tag tagcloud">
                      <span>Post Category :</span>
                      <Link href="/blog-details">
                        {contentdata?.data?.category_by.name}
                      </Link>
                    </div>
                  </div>
                </article>

                {/* <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">3 Comments</h3>
                  <CommentBox />
                </div>
                <div className="postbox__comment-form">
                  <h3 className="postbox__comment-form-title">
                    Write a comment
                  </h3>
                  <CommentForm />
                </div> */}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <SidebarSearch />
                <RecentPost />
                <Category />
                {/* <Tags /> */}
                {/* <div className="sidebar__widget mb-40">
                  <h3 className="sidebar__widget-title">Sponsor Adds</h3>
                  <div className="sidebar__banner w-img p-relative text-center">
                    <img
                      src="/assets/img/news/side-details-img.jpg"
                      alt="theme-pure"
                    />
                    <div className="sidebar__banner-content">
                      <h4>270x240</h4>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostboxArea;
