import Link from "next/link";
import { useEffect, useState } from "react";
import {
  SiDuolingo,
  SiFacebook,
  SiInstagram,
  SiShopee,
  SiTiktok,
} from "react-icons/si";
import url from "@/utils/globals";
import { FaStore } from "react-icons/fa6";

const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.behance.com",
    target: "_blank",
    icon: "fab fa-behance",
  },
  {
    link: "https://www.youtube.com",
    target: "_blank",
    icon: "fab fa-youtube",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
];

const SocialLinks = () => {
  const [contactData, setContactData] = useState(null);

  const getContact = async () => {
    const response = await fetch(`${url.PROFECTA_API_URL}/api/getcontact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json().then((data) => {
      setContactData(data);
      // console.log(data);
    });
  };

  useEffect(() => {
    getContact();
  }, []);
  return (
    <>
      {contactData?.data?.shopee_url != "-" ? (
        <a
          href={contactData?.data?.shopee_url}
          className={``}
          target={`_blank`}
        >
          <SiShopee className="fs-5" />
        </a>
      ) : (
        ""
      )}

      {contactData?.data?.tokopedia_url != "-" ? (
        <a
          href={contactData?.data?.tokopedia_url}
          className={``}
          target={`_blank`}
        >
          <FaStore className="fs-5" />
        </a>
      ) : (
        ""
      )}

      {contactData?.data?.instagram_url != "-" ? (
        <a
          href={contactData?.data?.instagram_url}
          className={``}
          target={`_blank`}
        >
          <SiInstagram className="fs-5" />
        </a>
      ) : (
        ""
      )}

      {contactData?.data?.facebook_url != "-" ? (
        <a
          href={contactData?.data?.facebook_url}
          className={``}
          target={`_blank`}
        >
          <SiFacebook className="fs-5" />
        </a>
      ) : (
        ""
      )}

      {contactData?.data?.tiktok_url != "-" ? (
        <a
          href={contactData?.data?.tiktok_url}
          className={``}
          target={`_blank`}
        >
          <SiTiktok className="fs-5" />
        </a>
      ) : (
        ""
      )}

      {/* {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))} */}
    </>
  );
};

export default SocialLinks;

const copy_right_text = {
  copy_right: (
    <>
      Copyright © {new Date().getFullYear()} Profecta Perdana Profile by{" "}
      <a href="#">Beloved IT Team</a>. All Rights Reserved.
    </>
  ),
};
const { copy_right } = copy_right_text;

export const CopyRight = () => {
  return <>{copy_right}</>;
};

// home 04 social link
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1",
  },
  {
    link: "https://www.instagram.com",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "2",
  },

  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "3",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_two.map((link, i) => (
        <Link
          key={i}
          target={link.target}
          className={`icon-color-${link.color}`}
          href={link.link}
        >
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}
    </>
  );
};
