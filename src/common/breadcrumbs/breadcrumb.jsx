import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title = "About", innertitle = "Blog Grid Classic" }) => {
    return (
        <>
            <section className="breadcrumb__area include-bg pt-60 pb-60"
                style={ { backgroundImage: `url(/assets/img/breadcrumb/ab-slider.jpg)` } }>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <div className="breadcrumb__list">
                                    <span className='fs-6'><Link href="/">Home </Link></span>
                                    <span className="dvdr"><i className="flaticon-arrow-right"></i></span>
                                    <span>{ title }</span>
                                </div>
                                <h3 className="fs-1 fs-md-3">{ innertitle }</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Breadcrumb;