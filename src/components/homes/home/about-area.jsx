import Link from 'next/link';
import React from 'react';

const AboutArea = () => {
    return (
        <>
        <div className="tp-about-area pt-120 pb-80">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-5">
               <div className="tp-about-wapper p-relative">
                  <div className="tp-about-thumb p-relative pt-60 mb-40">
                     <img className="ab-sm" src="/assets/img/about/ab-small.jpg" alt="theme-pure" />
                     <img className="ab-lg ml-80" src="/assets/img/about/ab-large.jpg" alt="theme-pure" />
                     <div className="tp-about-circle pt-40 pb-40">
                        <span>Offer</span>
                        <h3>50<i className="percent">%</i></h3>
                        <p>In March</p>
                        <div className="circle-link">
                           <Link href="/about"><i className="far fa-long-arrow-alt-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-7">
               <div className="tp-about-wrapper pt-50 pl-35 mb-40">
                  <div className="tp-section-box p-relative">
                     <h3 className="tp-big-text">About</h3>
                     <span className="tp-section-subtitle d-inline-block mb-10">About Us</span>
                     <h2 className="tp-section-title mb-30">
                        Magtnificient Quality Gives You an Edge
                     </h2>
                     <p>Bandwidth has historically been very unequally distributed worldwide, with
                        increasing concentration in the digital age. Historically only 10 countries <br />
                        have hosted 70-75% of the global telecommunication capacity.</p>
                  </div>
                  <hr className="mt-25 mb-30" />
                  <div className="tp-ab-meta">
                     <div className="about-meta-img d-flex">
                        <div className="ab-meta-img d-none d-md-block">
                           <img src="/assets/img/about/ab-meta.jpg" alt="theme-pure" />
                        </div>
                        <div className="tp-ab-meta-text pl-30">
                           <h4>In 2014 only 3 countries host 50% of the
                              globally installed bandwidth potential.</h4>
                           <span><b>Alonso D. Dowson</b> <i>-Head Of Idea</i></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>            
        </>
    );
};

export default AboutArea;