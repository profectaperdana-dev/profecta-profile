import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={ `tp-sidebar-menu ${isOpen && "sidebar-opened"}` }>
                <button className="sidebar-close"><i className="fal fa-times"></i></button>
                <div onClick={ () => setIsOpen(false) } className="side-logo mb-20">
                    <Link href="/"><img width={ 150 } src="https://apps.profectaperdana.com/images/logos.png" alt="logo" /></Link>
                </div>
                <div className="mobile-menu mean-container">
                    <MobileMenus />
                    
                    <div className="sidebar-title">
                        <h3>Contact Us</h3>
                    </div>
                    <br></br>
                    <div className="sidebar-title">
                        <h5>Palembang</h5>
                    </div>
                    <ul className="sidebar-list">
                        <li>Jl. Brigjen. H. Kasim, Ruko Jaya Raya, No.12 Palembang - South Sumatera</li>
                        <li>0711-8254-56</li>
                    </ul>

                    <div className="sidebar-title">
                        <h5>Jambi</h5>
                    </div>
                    <ul className="sidebar-list">
                        <li>Jl.Abdul Rahman Saleh Kel.Pasir Putih Kec.Jambi Selatan, Kota Jambi</li>
                        <li>0811-7819-980</li>
                    </ul>

                    <div className="sidebar-title">
                        <h5>Bengkulu</h5>
                    </div>
                    <ul className="sidebar-list">
                        <li>Jl. Kapuas no.17 RT 014 / Rw 004 , Padang Harapan , Gading cempaka, Kota Bengkulu</li>
                        <li>0811-6119-009</li>
                    </ul>
                    
                    <div className="tp-sidebar-social">
                        <SocialLinks />
                    </div>
                </div>
            </div>
            <div onClick={ () => setIsOpen(false) } className={ `body-overlay ${isOpen && "opened"}` }></div>
        </>
    );
};

export default Sidebar;
