import product_data from '@/src/data/product-data';
import NiceSelect from '@/src/ui/nice-select';
import Link from 'next/link';
import React from 'react';

const ShoppingArea = () => {
    const selectHandler = (e) => {};
    return (
        <>
            <section className="product__area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="product__result">
                            <p><span>20</span> Item On List</p>
                        </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
                        <div className="product__filter-wrapper d-flex align-items-center justify-content-md-end">
                            <div className="product__filter-count d-flex align-items-center"> 
                                <span>Show</span>
                                <NiceSelect 
                                    options={[
                                    { value: "12", text: "12" },
                                    { value: "16", text: "16" },
                                    { value: "20", text: "20" },
                                    { value: "24", text: "24" },
                                    ]}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    />  
                            </div>
                            <div className="product__filter-style nav nav-tabs" role="tablist">

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                        <div className="product__filter-tab">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid-tab" role="tabpanel"
                                    aria-labelledby="nav-grid-tab">
                                    <div className="row">
                                        {product_data.slice(4, 16).map((item, i)  => 
                                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                                <div className="product__item mb-30 text-center transition-3">
                                                    <div className="product__thumb p-relative mb-30 w-img fix">
                                                        <Link href="/shop-details">
                                                        <img src={item.img} alt="theme-pure" />
                                                        </Link>
                                                        <div className="product__icon">
                                                        <a href="#"><i className="fal fa-eye"></i></a>
                                                        <a href="#"><i className="fal fa-shopping-cart"></i></a>
                                                        <a href="#"><i className="fal fa-heart"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="product__content">
                                                        <h4 className="product__title">
                                                        <Link href="/shop-details">{item.title}</Link>
                                                        </h4>
                                                        <div className="product__price">
                                                        <span className="price">£{item.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        )} 

                                        <div className="basic-pagination pt-40">
                                            <nav>
                                                <ul>
                                                    <li>
                                                    <Link href="/blog">
                                                        <i className="far fa-angle-left"></i>
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog">1</Link>
                                                    </li>
                                                    <li>
                                                    <span className="current">2</span>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog">3</Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/blog">
                                                        <i className="far fa-angle-right"></i>
                                                    </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShoppingArea;