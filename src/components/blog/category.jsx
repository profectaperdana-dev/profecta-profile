import Link from "next/link";
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const fetchData = async () => {
    await axios.get(`https://testing.profectaperdana.com/api/blog/categories`)
      .then(function (response) {
        // handle success
        setDataCategory(response.data.data);

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
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            { dataCategory.map((item, i) => (
              <li key={ i }>
                <Link href="/blog">
                  { item.category.name }
                  <span>{ item.count }</span>
                </Link>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
