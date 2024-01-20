import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
// recent post


const RecentPost = () => {
    const [recentBlog, setRecentBlog] = useState([]);
    const fetchData = async () => {
        await axios.get(`https://testing.profectaperdana.com/api/blog/recent`)
            .then(function (response) {
                // handle success
                setRecentBlog(response.data.data.data);
                console.log(response.data.data);
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
            <div className="sidebar__widget mb-40">
                <h3 className="sidebar__widget-title">Recent Post</h3>
                <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                        { recentBlog.map((item, i) =>
                            <div key={ i } className="rc__post mb-20 d-flex align-items-center">
                                <div className="rc__post-thumb mr-20">
                                    <Link href="/blog-details">
                                        <img src={ `https://testing.profectaperdana.com/image_blog/${item.image}` } alt={ item.title } />
                                    </Link>
                                </div>
                                <div className="rc__post-content">
                                    <h3 className="rc__post-title">
                                        <Link href="/blog-details">{ item.title } </Link>
                                    </h3>
                                    <div className="rc__meta">
                                        <span>{ item.post_date }</span>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPost;
