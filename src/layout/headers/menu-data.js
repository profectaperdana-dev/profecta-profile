const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    // sub_menus: [
    //   { link: "/", title: "Home Style 01" },
    //   { link: "/home-2", title: "Home Style 02" },
    //   { link: "/home-3", title: "Home Style 03" },
    // ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Service",
    link: "/service",
    // sub_menus: [
    //   { link: "/flaticon", title: "Flaticon" },
    //   { link: "/service-details", title: "Service Details" },
    // ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Other",
    link: "#",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/clients", title: "Clients/References" },
      { link: "/galerry", title: "Galerry" },
      { link: "/blog", title: "Blog" },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Career",
    link: "/career",
    // sub_menus: [
    //   { link: "/career", title: "Career" },
    //   { link: "/blog-details", title: "Internship" },
    // ],
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },

];
export default menu_data;
