export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Experience", link: "#experience" }
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: ""
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: ""
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: ""
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg"
  },

  {
    id: 5,
    title: "Currently learning the Next.js Framework",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg"
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: ""
  }
];

export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    des: "An application to manage and store employee data built using React, TypeScript, Express, Shadcn UI and MySQL",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/bhatsushant/employee-management-system"
  },
  {
    id: 2,
    title: "MediaHub",
    des: " A website providing comprehensive catalog users with a catalog of movies and TV shows to view/search existing movies/shows, provide opinions through ratings and comments, find streaming platforms on which the movie/show is available, create watchlists of movies/shows to watch, and much more",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/rgorai/cs546-final-project"
  },
  {
    id: 3,
    title: "House Of Books",
    des: "A one stop solution to fulfill all your reading needs. Fantasy, Horror, Drama, Thriller.. We have it all!!!",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/bhatsushant/house-of-books"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Humana",
    desc: "Constructed a streamlined case prep API using Node.js, Express.js, PostgreSQL, and Redis to combine eligibility, provider, and policy feeds and cut cross system hops by about 45 percent",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Frontend Developer - Cardinal Health",
    desc: "Owned medication-replenishment dashboards using React, TypeScript, Tailwind CSS, and shadcn-ui, giving pharmacists cleaner visibility into stock trends and improving daily task completion time by ~28%",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Full Stack Developer - SageSofttech",
    desc: "Directed a campaign designer UI using React, TypeScript, Tailwind CSS, and custom drag modules that let merchandisers schedule discounts and flash deals, cutting manual spreadsheet work by nearly 50 percent",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Software Engineer - Crisil Ltd.",
    desc: "Architected an event routing module using Node.js, Express.js, and MongoDB, processing incoming tasks from multiple systems and reducing message drop rates by about 40 percent",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/bhatsushant"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sushantbhat22/"
  }
];
