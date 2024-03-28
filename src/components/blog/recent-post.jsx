import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import url from "@/utils/globals";
// recent post

const RecentPost = () => {
  const [recentBlog, setRecentBlog] = useState(null);

  const getRecent = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getblog/recent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setRecentBlog(data);
    });
  };

  useEffect(() => {
    getRecent();
  }, []);
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recentBlog
              ? recentBlog.data.map((item, i) => (
                  <div
                    key={i}
                    className="rc__post mb-20 d-flex align-items-center"
                  >
                    <div className="rc__post-thumb mr-20">
                      <Link href={`/blog-detail/${item.slug}`}>
                        <img
                          src={`${url.PROFECTA_API_URL}/public/images/cms/blogs/${item.img_header}`}
                          alt={item.title}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="rc__post-content">
                      <h3 className="rc__post-title">
                        <Link href={`/blog-detail/${item.slug}`}>
                          {item.title}{" "}
                        </Link>
                      </h3>
                      <div className="rc__meta">
                        <span>
                          {new Date(item.post_date).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",

                            hour12: true,
                          })}
                        </span>
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

export default RecentPost;
