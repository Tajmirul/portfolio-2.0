import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'tasmirolislam@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
    { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Electro EV',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
    title: 'Basha Bazar',
    year: 2026,
    description: `Rental hunting in Bangladesh does not happen in a search box. Most to-lets are a paper sign taped to a gate — you find them by walking the alleys. Basha Bazar is the app for that walk: it records where you have been, lets you pin every to-let you pass, and turns those pins into a map the whole city builds together.

    I built the whole product solo — the Android app, the Supabase backend, the marketing site, the release pipeline and the growth loops.

    ### What it does

    **Walk tracking**
    - Start Walk records your GPS trail in the background — screen off, phone in pocket — via an Android foreground service, and draws it on the map, so you never re-walk an alley you already covered.
    - Recording only runs between Start and Stop, never always-on, with a Play-compliant prominent-disclosure prompt before the OS asks for "Always" location.
    - A Walks screen lists every recorded trail with its distance; tap to view the path.

    **Pinning a to-let**
    - Drop a pin at your current GPS, or long-press anywhere on the map.
    - Capture rent, contact, rooms, washrooms, balconies, floor, sunlight, gas, which tenants the landlord accepts, multiple photos, and free-text notes — every field optional.
    - Point the camera at the sign and an AI vision pass reads the phone number straight off the photo into the contact field; once it holds a dialable number the scan button turns into a call button.
    - A built-in checklist suggests what else to ask the landlord (water hours, advance months, parking, rules).
    - Toggle each contribution public or private — public is the default, framed as the community bargain.

    **A shared map**
    - A to-let is a shared place, not a private note. Each signed-in user adds one editable contribution; the detail screen stacks every contributor's block with their name, fields and photos.       - Rent is never averaged or invented — the map shows the newest contribution per pla
    - Map pins are price bubbles (৳18k, ৳1.2L) over a custom-styled basemap that keeps road names and drops commercial POIs, because foot navigation in Dhaka runs on road names.                      - A draggable bottom sheet lists the same places as a photo-first two-column grid, pl, with client-side filters for rent range, bedrooms, bathrooms, availability andphotos — and an honest "N of M shown" label.                                                                                                                                                       - Report a bad listing; at two distinct reporters a place drops out of the map serve
    - Share a find or the app itself through the OS share sheet — the landlord's number is deliberately never included.                                                                                
    **Offline-first**                                                                                                                                                                                  - Pinning works with no signal: writes land in a local SQLite outbox and push when cthe local copy is deleted so a record lives in exactly one place.
    - The cloud upsert is keyed on (place, user), so a retry after a mid-push photo failure can never duplicate a contribution.                                                                        
    ### Technical details                                                                                                                                                                              
    - **React Native + Expo 57 (dev build, not Expo Go)** with TypeScript. Background location needs native modules, which also rules out a web/PWA version entirely — browsers cannot record GPS with the screen off.
    - **Background GPS** through expo-location + expo-task-manager: a top-level task definition, an Android foreground service with a persistent notification, and UIBackgroundModes on iOS.
    - **Supabase** backend — Postgres + PostGIS for the viewport query, row-level securiblic-or-mine, write only your own), Storage for photos, and SQL migrations in therepo.
    - **Google sign-in** behind a login wall: native ID token exchanged for a Supabase sion that purges storage and cascades the user's rows.
    - **Edge Functions** hold the secrets the binary must never contain — the Gemini vision call and the account-delete flow both run server-side behind a verified JWT.
    - **Vision cost control**: images are downscaled to 768px and re-encoded before the s a single Gemini image tile instead of a dozen.
    - **Rendering traps solved the hard way**: Android snapshots child-view map markers to bitmaps, so price bubbles keep tracksViewChanges on until layout settles and must use the system font — a
    custom family is not ready at capture time and the pin snapshots blank.
    - **Analytics with privacy rules**: PostHog product analytics and session replay, where replay masks all images and inputs, third-party phone numbers rendered as plain text are explicitly
    wrapped, and no event property ever carries rent, contact, photos or coordinates.
    - **AppsFlyer** for ad install attribution only — no product events, off entirely without a dev key.
    - **Releases are tag-driven CI**: push a version tag and GitHub Actions builds a sigploads it to the Play internal track; both versionName and versionCode are derivedfrom the tag so a version can never be hand-bumped into a duplicate.
    - **Landing site** in Next.js 16 (App Router) + Tailwind v4 + Motion, Bangla-first wyped dictionary that fails the build on a missing key.`,
        role: 'Solo developer — product, design, mobile app, backend, landing site, release pipeline and growth',
        techStack: [
            'React Native',
            'Expo 57',
            'TypeScript',
            'react-native-maps',
            'expo-location',
            'Supabase',
            'PostgreSQL',
            'PostGIS',
            'Row Level Security',
            'Supabase Edge Functions',
            'Gemini Vision',
            'Google Sign-In',
            'SQLite',
            'Next.js 16',
            'Tailwind CSS v4',
            'PostHog',
            'GitHub Actions',
        ],
        thumbnail: '/projects/basha-bazar/thumbnail.png',
        longThumbnail: '/projects/basha-bazar/long-thumbnail.png',
        images: [
            '/projects/basha-bazar/map.png',
            '/projects/basha-bazar/trail.png',
            '/projects/basha-bazar/add-tolet.png',
            '/projects/basha-bazar/detail.png',
            '/projects/basha-bazar/list.png',
            '/projects/basha-bazar/landing.png',
        ],
        slug: 'basha-bazar',
        liveUrl: 'https://www.bashabazar.com/',
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
