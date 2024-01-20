import Link from "next/link";
import React from "react";
import Footer from "../layout/footers/footer";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import { color } from "framer-motion";

const index = () => {
    return (
        <>
            <SEO pageTitle={ "Oops.! Page Not Found!" } />
            <HeaderOne />
            <div id="smooth-wrapper error_page">
                <div id="smooth-content">
                    <main>
                        <div className="tp-error-area tp-error-ptb p-relative">
                            <div className="container">
                                <div className="row icon-container">
                                    <i className="flaticon-plus"></i>
                                    <i className="flaticon-minus"></i>
                                    <i className="flaticon-tick"></i>
                                    <i className="flaticon-facebook"></i>
                                    <i className="flaticon-xing"></i>
                                    <i className="flaticon-spotify"></i>
                                    <i className="flaticon-dribbble"></i>
                                    <i className="flaticon-tumblr"></i>
                                    <i className="flaticon-quora"></i>
                                    <i className="flaticon-skype"></i>
                                    <i className="flaticon-twitter"></i>
                                    <i className="flaticon-linkedin"></i>
                                    <i className="flaticon-behance"></i>
                                    <i className="flaticon-vimeo"></i>
                                    <i className="flaticon-youtube"></i>
                                    <i className="flaticon-search-interface-symbol"></i>
                                    <i className="flaticon-shopping-basket"></i>
                                    <i className="flaticon-shopping-cart"></i>
                                    <i className="flaticon-close"></i>
                                    <i className="flaticon-right-arrow"></i>
                                    <i className="flaticon-left-arrow"></i>
                                    <i className="flaticon-phone-call"></i>
                                    <i className="flaticon-mail"></i>
                                    <i className="flaticon-visibility"></i>
                                    <i className="flaticon-chat"></i>
                                    <i className="flaticon-bubble-chat"></i>
                                    <i className="flaticon-chat-1"></i>
                                    <i className="flaticon-cctv"></i>
                                    <i className="flaticon-cctv-1"></i>
                                    <i className="flaticon-cctv-camera"></i>
                                    <i className="flaticon-cctv-2"></i>
                                    <i className="flaticon-cctv-3"></i>
                                    <i className="flaticon-security-camera"></i>
                                    <i className="flaticon-cctv-4"></i>
                                    <i className="flaticon-security-camera-1"></i>
                                    <i className="flaticon-cctv-5"></i>
                                    <i className="flaticon-cctv-camera-1"></i>
                                    <i className="flaticon-spy-camera"></i>
                                    <i className="flaticon-cctv-camera-2"></i>
                                    <i className="flaticon-cctv-6"></i>
                                    <i className="flaticon-cctv-camera-3"></i>
                                    <i className="flaticon-cctv-7"></i>
                                    <i className="flaticon-cctv-8"></i>
                                    <i className="flaticon-cctv-9"></i>
                                    <i className="flaticon-cctv-10"></i>
                                    <i className="flaticon-cctv-11"></i>
                                    <i className="flaticon-cctv-12"></i>
                                    <i className="flaticon-cctv-13"></i>
                                    <i className="flaticon-cctv-14"></i>
                                    <i className="flaticon-bubble-chat-1"></i>
                                    <i className="flaticon-group"></i>
                                    <i className="flaticon-user"></i>
                                    <i className="flaticon-quote"></i>
                                    <i className="flaticon-quote-1"></i>
                                    <i className="flaticon-quote-2"></i>
                                    <i className="flaticon-open-message"></i>
                                    <i className="flaticon-envelope"></i>
                                    <i className="flaticon-arrow-down"></i>
                                    <i className="flaticon-home"></i>
                                    <i className="flaticon-ellipsis"></i>
                                    <i className="flaticon-arrow-up"></i>
                                    <i className="flaticon-arrow-left"></i>
                                    <i className="flaticon-arrow-right"></i>
                                    <i className="flaticon-call"></i>
                                    <i className="flaticon-checked"></i>
                                    <i className="flaticon-comment"></i>
                                    <i className="flaticon-secure"></i>
                                    <i className="flaticon-shield"></i>
                                    <i className="flaticon-cyber-security"></i>
                                    <i className="flaticon-internet-security"></i>
                                    <i className="flaticon-web-security"></i>
                                    <i className="flaticon-guard"></i>
                                    <i className="flaticon-cyber-security-1"></i>
                                    <i className="flaticon-shield-1"></i>
                                    <i className="flaticon-hospital"></i>
                                    <i className="flaticon-school"></i>
                                    <i className="flaticon-play"></i>
                                    <i className="flaticon-play-button"></i>
                                    <i className="flaticon-wifi-router"></i>
                                    <i className="flaticon-approval"></i>
                                    <i className="flaticon-approved"></i>
                                    <i className="flaticon-cargo-ship"></i>
                                    <i className="flaticon-camera-drone"></i>
                                    <i className="flaticon-drone"></i>
                                    <i className="flaticon-drone-1"></i>
                                    <i className="flaticon-drone-2"></i>
                                    <i className="flaticon-drone-3"></i>
                                    <i className="flaticon-open-lock"></i>
                                    <i className="flaticon-shield-2"></i>
                                    <i className="flaticon-smart-door"></i>
                                    <i className="flaticon-password"></i>
                                    <i className="flaticon-locked"></i>
                                    <i className="flaticon-cyber-security-2"></i>
                                    <i className="flaticon-password-1"></i>
                                    <i className="flaticon-key-with-hole"></i>
                                    <i className="flaticon-door-key"></i>
                                    <i className="flaticon-computer-security-shield"></i>
                                    <i className="flaticon-security"></i>
                                    <i className="flaticon-hacker"></i>
                                    <i className="flaticon-user-1"></i>
                                    <i className="flaticon-calendar"></i>
                                    <i className="flaticon-calendar-1"></i>
                                    <i className="flaticon-cloud"></i>
                                    <i className="flaticon-database"></i>
                                    <i className="flaticon-video-camera"></i>
                                    <i className="flaticon-photo-camera"></i>
                                    <i className="flaticon-settings"></i>
                                    <i className="flaticon-television"></i>
                                    <i className="flaticon-pen"></i>
                                    <i className="flaticon-pdf"></i>
                                    <i className="flaticon-pdf-1"></i>
                                    <i className="flaticon-file"></i>
                                    <i className="flaticon-download"></i>
                                    <i className="flaticon-dots-menu"></i>
                                    <i className="flaticon-pin"></i>
                                    <i className="flaticon-maps-and-flags"></i>
                                    <i className="flaticon-compare"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star-1"></i>
                                    <i className="flaticon-share"></i>
                                    <i className="flaticon-reply-arrow"></i>
                                    <i className="flaticon-share-1"></i>
                                    <i className="flaticon-global"></i>


                                </div>
                            </div>
                        </div>
                    </main>
                </div >
            </div >
            <Footer />
        </>
    );
};

export default index;

