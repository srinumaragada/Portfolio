export const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and secure payments.",
      image: "/projects/image.png", // Replace with your image path
      githubUrl: "https://github.com/srinumaragada/E-Commerce-Website",
      demoUrl: "https://e-commerce-frontend-ten-phi.vercel.app/",
      features: [
        "Product catalog with 50+ items",
        "Secure payment integration with PayPal",
        "Admin dashboard for inventory management",
        "User authentication and order tracking"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "PayPal API","Express.js","Tailwind CSS","Cloudinary"],
      metrics: [
        { label: "User Engagement", value: "+30%" },
        { label: "Operational Efficiency", value: "+40%" },
        { label: "Quarterly Sales", value: "$5,000+" }
      ]
    },
    {
      title: "Book Store Website",
      description: "An online bookstore with extensive catalog and optimized search functionality.",
      image: "./projects/image1.png", // Replace with your image path
      githubUrl: "https://github.com/srinumaragada/Book-store-Frontend",
      demoUrl: "https://book-store-frontend-zeta-ashy.vercel.app/",
      features: [
        "100+ book listings with categories",
        "Advanced search and filtering",
        "Shopping cart and wishlist",
        "Admin panel for content management"
      ],
      tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB","Express.js",],
      metrics: [
        { label: "Customer Transactions", value: "+18%" },
        { label: "Backend Response", value: "-15%" },
        { label: "Order Efficiency", value: "+30%" }
      ]
    },
    {
        "title": "MemeVerse",
        "description": "A multi-page, highly interactive website where users can explore, upload, and interact with memes.",
        "image": "/projects/image2.png",
        "demoUrl": "https://memeversewebsite.netlify.app/",
        "githubUrl": "https://github.com/srinumaragada/memeverse",
        "features": [
          "Trending memes with API integration",
          "Dark mode toggle",
          "Infinite scrolling with filters",
          "Meme upload with preview",
          "Interactive comment system",
          "User profiles with liked memes",
          "Leaderboard rankings"
        ],
        "tech": [
          "Next.js/React",
          "Tailwind CSS",
          "Framer Motion",
          "Redux Toolkit",
          "Cloudinary",
          "Meme APIs"
        ],
        "metrics": [
          { "label": "API Response Time", "value": "<200ms" },
          { "label": "Animation FPS", "value": "60fps" },
          { "label": "Bundle Size", "value": "~150kb" }
        ]
      },
      {
        "title": "AI-Powered Lesson Planner",
        "description": "Web application for educators to create structured lesson plans using Google Gemini AI.",
        "image": "/projects/Screenshot 2025-04-21 172241.png",
        "demoUrl": "https://lesson-planner-azure.vercel.app/",
        "githubUrl": "https://github.com/srinumaragada/lesson-planner",
        "features": [
          "Dummy authentication system",
          "AI-generated lesson content",
          "Editable lesson templates",
          "PDF export functionality",
          "Responsive ShadCN UI",
          "Dark mode support",
          "Local storage persistence"
        ],
        "tech": [
          "React.js",
          "ShadCN UI",
          "TailwindCSS",
          "Google Gemini API",
          "react-to-print",
          "Vite"
        ],
        "metrics": [
          { "label": "Content Generation", "value": "<5s" },
          { "label": "PDF Export Time", "value": "<2s" },
          { "label": "User Satisfaction", "value": "92%" }
        ]
      },
  ];