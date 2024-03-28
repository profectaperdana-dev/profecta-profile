import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import url from "@/utils/globals";

const Category = () => {
  const [dataCategory, setDataCategory] = useState(null);

  const getcategories = async () => {
    const response = await fetch(
      `${url.PROFECTA_API_URL}/api/getblog/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json().then((data) => {
      setDataCategory(data);
    });
  };

  useEffect(() => {
    getcategories();
  }, []);
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            {dataCategory
              ? dataCategory.data.map((item, i) => (
                  <li key={i}>
                    <Link href={`/blog/filterbycategory/${item.name}`}>
                      {item.name}
                      <span>{item.blog_by_count}</span>
                    </Link>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
