// ============================================================
// BACK TO TOP
// ============================================================

function initBackToTop() {
  if (document.getElementById("back-to-top")) {
    return;
  }

  const button = document.createElement("button");

  button.id = "back-to-top";
  button.type = "button";
  button.setAttribute("aria-label", "Back to top");

  button.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      />
    </svg>
  `;

  document.body.appendChild(button);

  const updateBackToTop = () => {
    button.classList.toggle(
      "is-visible",
      window.scrollY > 500
    );
  };

  window.addEventListener(
    "scroll",
    updateBackToTop,
    {
      passive: true,
    }
  );

  button.addEventListener(
    "click",
    () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  );

  updateBackToTop();
}

document.addEventListener(
  "DOMContentLoaded",
  initBackToTop
);


// ============================================================
// PROJECTS
// ============================================================

function projects() {
  return {

    // ----------------------------------------------------------
    // STATE
    // ----------------------------------------------------------

    dark: false,
    scrolled: false,
    mobileMenu: false,
    filter: "all",


    // ----------------------------------------------------------
    // FILTER OPTIONS
    // ----------------------------------------------------------

    filterOptions: [
      {
        value: "all",
        label: "All (25)",
      },
      {
        value: "government",
        label: "Government & Enterprise (6)",
      },
      {
        value: "product",
        label: "Products (7)",
      },
      {
        value: "ecommerce",
        label: "E-commerce (2)",
      },
      {
        value: "mobile",
        label: "Mobile Apps (2)",
      },
      {
        value: "web",
        label: "Web / Corporate (2)",
      },
      {
        value: "organization",
        label: "Organizations (5)",
      },
      {
        value: "design-system",
        label: "Design Systems (1)",
      },
    ],


    // ----------------------------------------------------------
    // ALL PROJECTS
    // ----------------------------------------------------------

    allProjects: [

      // ========================================================
      // GOVERNMENT & ENTERPRISE
      // ========================================================

      {
        id: 1,
        title: "U.P. Excise Department Systems",
        category: "government",
        categoryLabel: "Government / Enterprise",
        tags: [
          "Government",
          "Enterprise UX",
          "Figma",
        ],
        year: "2023",
        desc: "Enterprise government interfaces covering operational workflows, data-heavy screens, complex forms, approvals and responsive experiences.",
        img: "../../assets/images/projects/up-excise/up-excise-cover.png",
        url: "../case-study/up-excise-case-study.html",
      },


      {
        id: 2,
        title: "TNPDS — Tamil Nadu Public Distribution System",
        category: "government",
        categoryLabel: "Government / Enterprise",
        tags: [
          "Government",
          "Enterprise UX",
          "Angular",
        ],
        year: "2023",
        desc: "Government distribution system interfaces designed around structured workflows, operational data, forms and responsive application experiences.",
        img: "../../assets/images/projects/tnpds/tnpds-cover.png",
        url: "../case-study/tnpds-case-study.html",
      },


      {
        id: 3,
        title: "Co-Optex",
        category: "government",
        categoryLabel: "Government / E-commerce",
        tags: [
          "Government",
          "E-commerce",
          "Retail",
          "Figma",
        ],
        year: "2023",
        desc: "Digital commerce and retail experience for Co-Optex, combining government-backed retail operations with product discovery and customer shopping workflows.",
        img: "../../assets/images/projects/cooptex/cooptex-cover.png",
        url: "../case-study/co-optex-case-study.html",
      },


      {
        id: 4,
        title: "UPPDS — Uttar Pradesh Public Distribution System",
        category: "government",
        categoryLabel: "Government / Enterprise",
        tags: [
          "Government",
          "PDS",
          "Enterprise UX",
          "Angular",
        ],
        year: "2024",
        desc: "Public Distribution System experience supporting beneficiary authentication, commodity distribution, stock operations, transactions and structured operational workflows.",
        img: "../../assets/images/projects/uppds/uppds-cover.png",
        url: "#",
      },


      {
        id: 5,
        title: "National Citizen Database System — Republic of Vanuatu",
        category: "government",
        categoryLabel: "Government / Enterprise",
        tags: [
          "Government",
          "Citizen Services",
          "Figma",
        ],
        year: "2024",
        desc: "National citizen database interface designed for structured citizen information, administrative workflows and scalable enterprise interaction patterns.",
        img: "../../assets/images/projects/national-citizen-database-system-republic-of-vanuatu/vanuatu-cover.png",
        url: "#",
      },


      {
        id: 6,
        title: "OASYS HR Management System (HRMS)",
        category: "government",
        categoryLabel: "Enterprise / HRMS",
        tags: [
          "HRMS",
          "Enterprise",
          "UI Development",
        ],
        year: "2025",
        desc: "Unified HR management experience combining employee information, self-service workflows, administrative operations and structured enterprise interactions.",
        img: "../../assets/images/projects/oasys-hrms/hrms-cover.png",
        url: "#",
      },


      // ========================================================
      // PRODUCTS
      // ========================================================

      {
        id: 7,
        title: "OCX Labs",
        category: "product",
        categoryLabel: "Product / Digital Platform",
        tags: [
          "Product",
          "Traceability",
          "Digital Passport",
          "UI/UX",
        ],
        year: "2025",
        desc: "Digital product and supply-chain platform experience focused on product identity, traceability, lifecycle information, analytics and connected data experiences.",
        img: "../../assets/images/projects/ocx-labs/ocx-labs-cover.png",
        url: "#",
      },


      {
        id: 8,
        title: "OASYS Point of Sale",
        category: "product",
        categoryLabel: "Product / PDS POS",
        tags: [
          "POS",
          "PDS",
          "Enterprise",
          "UI Development",
        ],
        year: "2024",
        desc: "Fair Price Shop POS experience supporting PDS transactions, stock operations, beneficiary authentication, sales, payments, receipts and day-to-day shop workflows.",
        img: "../../assets/images/projects/oasys-point-of-sale-pos/oasys-pos-cover.png",
        url: "#",
      },


      {
        id: 9,
        title: "OASYS Pharma App",
        category: "product",
        categoryLabel: "Product / Pharma",
        tags: [
          "Pharma",
          "Application",
          "UI/UX",
        ],
        year: "2025",
        desc: "Pharma field-force application supporting doctor and hospital management, product information, visit planning, sample management, targets, reports and field operations.",
        img: "../../assets/images/projects/oasys-pharma-app/oasys-pharma-cover.png",
        url: "#",
      },


      {
        id: 10,
        title: "OASYS PMS",
        category: "product",
        categoryLabel: "Product / Project Management",
        tags: [
          "Product",
          "Project Management",
          "Dashboard",
          "UI/UX",
        ],
        year: "2026",
        desc: "Project Management System experience designed around project planning, task and milestone tracking, team workflows, timesheets, approvals, progress monitoring and reporting.",
        img: "../../assets/images/projects/oasys-pms/oasys-pms-cover.png",
        url: "#",
      },


      {
        id: 11,
        title: "CarsMart",
        category: "product",
        categoryLabel: "Product / Automotive",
        tags: [
          "Automotive",
          "Marketplace",
          "Product",
          "UI/UX",
        ],
        year: "2026",
        desc: "Automotive marketplace experience designed around vehicle discovery, dealer listings, filtering, vehicle details and clearer customer shopping workflows.",
        img: "../../assets/images/projects/carsmart/carsmart-cover.png",
        url: "#",
      },


      {
        id: 12,
        title: "PrimeTrip",
        category: "product",
        categoryLabel: "Product / Travel",
        tags: [
          "Travel",
          "Booking",
          "Figma",
        ],
        year: "2025",
        desc: "Travel booking experience focused on bus discovery, booking flows and creating a clearer end-to-end customer journey.",
        img: "../../assets/images/projects/primetrip/primetrip-cover.png",
        url: "../case-study/primetrip-case-study.html",
      },


      {
        id: 13,
        title: "OCX Battery Passport",
        category: "product",
        categoryLabel: "Product / Battery Passport",
        tags: [
          "Product",
          "Battery Passport",
          "Traceability",
          "UI/UX",
        ],
        year: "2025",
        desc: "Battery lifecycle experience focused on battery information, materials provenance, ESG performance, traceability and structured sustainability data.",
        img: "../../assets/images/projects/ocx-battery-passport/ocx-battery-passport-cover.png",
        url: "#",
      },


      // ========================================================
      // E-COMMERCE
      // ========================================================

      {
        id: 14,
        title: "OASYS Mart",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        tags: [
          "E-commerce",
          "Retail",
          "UI/UX",
        ],
        year: "2023",
        desc: "Retail commerce experience designed around product browsing, structured categories, product discovery and customer shopping workflows.",
        img: "../../assets/images/projects/oasys-mart/oasys-mart-cover.png",
        url: "#",
      },


      {
        id: 15,
        title: "Pothihai Mart",
        category: "ecommerce",
        categoryLabel: "E-commerce",
        tags: [
          "E-commerce",
          "Retail",
          "UI/UX",
        ],
        year: "2022",
        desc: "Digital shopping experience focused on product presentation, category navigation, hardware and home products and a straightforward customer journey.",
        img: "../../assets/images/projects/pothihai-mart/pothihai-mart-cover.png",
        url: "#",
      },


      // ========================================================
      // MOBILE APPS
      // ========================================================

      {
        id: 16,
        title: "Reddy Nalasangam Community",
        category: "mobile",
        categoryLabel: "Website / Mobile App",
        tags: [
          "Website",
          "Mobile App",
          "Figma",
          "UI/UX",
          "WordPress",
        ],
        year: "2025",
        desc: "Community-focused digital experience combining a WordPress website and mobile application for community information, events, communication and accessible content.",
        img: "../../assets/images/projects/reddy-nalasangam-community/reddynalasangam-cover.png",
        url: "#",
      },


      {
        id: 17,
        title: "TN Election App",
        category: "mobile",
        categoryLabel: "Mobile App",
        tags: [
          "Mobile App",
          "Election",
          "UI/UX",
        ],
        year: "2026",
        desc: "Election-focused mobile application designed to present structured information, constituency data, candidate and party information, surveys and complaints.",
        img: "../../assets/images/projects/tn-election-app/tn-election-app-cover.png",
        url: "#",
      },


      // ========================================================
      // DESIGN SYSTEM
      // ========================================================

      {
        id: 18,
        title: "OASYS Design System",
        category: "design-system",
        categoryLabel: "Design System",
        tags: [
          "Design System",
          "Figma",
          "Components",
        ],
        year: "2025",
        desc: "Reusable design foundation bringing components, patterns, visual language and interaction principles together across enterprise products.",
        img: "../../assets/images/projects/oasys-design-system/oasys-design-system-cover.png",
        url: "../case-study/oasys-design-system-case-study.html",
      },


      // ========================================================
      // WEB / CORPORATE
      // ========================================================

      {
        id: 19,
        title: "CIG India",
        category: "web",
        categoryLabel: "Web / Corporate",
        tags: [
          "Corporate",
          "WordPress",
          "Web",
          "UI/UX",
        ],
        year: "2025",
        desc: "Corporate digital experience designed to present organisational information, services, projects and company content through a structured WordPress website.",
        img: "../../assets/images/projects/cig-india/cig-india-cover.png",
        url: "#",
      },


      {
        id: 20,
        title: "Yaabitech Software Solutions",
        category: "web",
        categoryLabel: "Web / Corporate",
        tags: [
          "Corporate",
          "Web Design",
          "UI Development",
        ],
        year: "2019",
        desc: "Corporate website experience created to communicate software services, training, products and company information through a clear digital presence.",
        img: "../../assets/images/projects/yaabitech-software-solutions/yaabitech-cover.png",
        url: "#",
      },


      // ========================================================
      // ORGANIZATIONS
      // ========================================================

      {
        id: 21,
        title: "DLK Technologies",
        category: "organization",
        categoryLabel: "Organization / Web",
        tags: [
          "Organization",
          "Digital Marketing",
          "WordPress",
          "UI/UX",
        ],
        year: "2020",
        desc: "Digital marketing agency website experience designed to present services, capabilities, client work and business information through a structured responsive interface.",
        img: "../../assets/images/projects/dlk-tech/dlk-tech-cover.png",
        url: "#",
      },


      {
        id: 22,
        title: "Ruah Ministries",
        category: "organization",
        categoryLabel: "Organization / Ministry",
        tags: [
          "Organization",
          "Ministry",
          "Web",
          "UI/UX",
        ],
        year: "2020",
        desc: "Ministry website experience designed around mission and vision content, events, media, ministry communication and accessible navigation.",
        img: "../../assets/images/projects/ruah-ministries/ruah-ministries-cover.png",
        url: "#",
      },


      {
        id: 23,
        title: "Ruah Media",
        category: "organization",
        categoryLabel: "Organization / Media",
        tags: [
          "Media",
          "Web",
          "UI/UX",
        ],
        year: "2020",
        desc: "Media-focused digital experience designed around music albums, live streaming, galleries, events and accessible media navigation.",
        img: "../../assets/images/projects/ruah-media/ruah-media-cover.png",
        url: "#",
      },


      {
        id: 24,
        title: "Nessa Charity",
        category: "organization",
        categoryLabel: "Organization / Charity",
        tags: [
          "Charity",
          "Web",
          "UI/UX",
        ],
        year: "2020",
        desc: "Charity-focused digital experience designed to communicate the organisation's causes, events, galleries, donation opportunities and volunteer engagement.",
        img: "../../assets/images/projects/nessa-charity/nessa-charity-cover.png",
        url: "#",
      },


      {
        id: 25,
        title: "Saivetha",
        category: "organization",
        categoryLabel: "Organization / Web",
        tags: [
          "Organization",
          "Confinement Care",
          "Web",
          "UI/UX",
        ],
        year: "2025",
        desc: "Digital experience for a confinement care organisation, presenting services, traditional postpartum care information and responsive customer-facing content.",
        img: "../../assets/images/projects/saivetha/saivetha-cover.png",
        url: "#",
      },
    ],


    // ----------------------------------------------------------
    // VISIBLE PROJECT COUNT
    // ----------------------------------------------------------

    get visibleCount() {
      if (this.filter === "all") {
        return this.allProjects.length;
      }

      return this.allProjects.filter(
        (project) => project.category === this.filter
      ).length;
    },


    // ----------------------------------------------------------
    // INITIALIZATION
    // ----------------------------------------------------------

    init() {

      // ========================================================
      // DARK MODE
      // ========================================================

      const savedTheme =
        localStorage.getItem("theme");

      this.dark =
        savedTheme === "dark" ||
        (
          !savedTheme &&
          window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches
        );


      this.$watch(
        "dark",
        (value) => {
          localStorage.setItem(
            "theme",
            value ? "dark" : "light"
          );
        }
      );


      // ========================================================
      // HEADER SCROLL
      // ========================================================

      const handleScroll = () => {
        this.scrolled =
          window.scrollY > 20;
      };

      window.addEventListener(
        "scroll",
        handleScroll,
        {
          passive: true,
        }
      );

      handleScroll();


      // ========================================================
      // REVEAL ON SCROLL
      // ========================================================

      this.$nextTick(() => {

        const elements =
          document.querySelectorAll(
            ".reveal"
          );

        if (!elements.length) {
          return;
        }


        // Fallback for browsers without
        // IntersectionObserver support.

        if (!("IntersectionObserver" in window)) {

          elements.forEach(
            (element) => {
              element.classList.add(
                "visible"
              );
            }
          );

          return;
        }


        const observer =
          new IntersectionObserver(
            (entries) => {

              entries.forEach(
                (entry) => {

                  if (
                    entry.isIntersecting
                  ) {

                    // IMPORTANT:
                    // Use "visible".
                    //
                    // Your projects.css reveal
                    // styles depend on:
                    //
                    // .reveal.visible
                    //
                    // Do NOT change this to "in".

                    entry.target.classList.add(
                      "visible"
                    );

                    observer.unobserve(
                      entry.target
                    );
                  }
                }
              );

            },
            {
              threshold: 0.08,
              rootMargin:
                "0px 0px -30px 0px",
            }
          );


        elements.forEach(
          (element) => {
            observer.observe(element);
          }
        );

      });

    },
  };
}


// ============================================================
// FOOTER YEAR
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const year =
      document.getElementById("yr");

    if (year) {
      year.textContent =
        new Date().getFullYear();
    }

  }
);