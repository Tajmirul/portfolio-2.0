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
    description: `<p>Rental hunting in Bangladesh does not happen in a search box. Most to-lets are a paper sign taped to a gate, and you only find them by walking the alleys. Basha Bazar is the app for that walk. It records where you have been, lets you pin every to-let you pass, and turns those pins into a map the whole city builds together.</p>

<p>I built the entire product solo, including the Android app, the Supabase backend, the marketing site, the release pipeline and the growth loops.</p>

<h3>Walk tracking</h3>
<ul>
  <li>Start Walk records your GPS trail in the background with the screen off and the phone in your pocket, through an Android foreground service, and draws it on the map, so you never re-walk an alley you already covered.</li>
  <li>Recording runs only between Start and Stop, never always-on, behind a Play-compliant prominent disclosure shown before the OS asks for Always location.</li>
  <li>A Walks screen lists every recorded trail with its distance, and tapping one shows the path.</li>
</ul>

<h3>Pinning a to-let</h3>
<ul>
  <li>Drop a pin at your current GPS position, or long-press anywhere on the map.</li>
  <li>Capture rent, contact, rooms, washrooms, balconies, floor, sunlight, gas, which tenants the landlord accepts, multiple photos and free-text notes, with every field optional.</li>
  <li>Point the camera at the sign and an AI vision pass reads the phone number straight off the photo into the contact field. Once it holds a dialable number, the scan button becomes a call button.</li>
  <li>A built-in checklist suggests what else to ask the landlord, such as water hours, advance months, parking and house rules.</li>
  <li>Each contribution can be public or private. Public is the default, framed as the community bargain rather than a privacy warning.</li>
</ul>

<h3>A shared map</h3>
<ul>
  <li>A to-let is a shared place, not a private note. Each signed-in user adds one editable contribution, and the detail screen stacks every contributor's block with their name, fields and photos.</li>
  <li>Rent is never averaged or invented. The map shows the newest contribution per place.</li>
  <li>Map pins are price bubbles over a custom-styled basemap that keeps road names and drops commercial POIs, because foot navigation in Dhaka runs on road names.</li>
  <li>A draggable bottom sheet lists the same places as a photo-first two-column grid, paging in more as you scroll, with filters for rent range, bedrooms, bathrooms, availability and photos, plus an honest count of how many of the loaded places match.</li>
  <li>Anyone can report a bad listing. At two distinct reporters a place drops out of the map server-side.</li>
  <li>Share a single find or the app itself through the OS share sheet. The landlord's number is deliberately left out of a shared to-let.</li>
</ul>

<h3>Offline-first</h3>
<ul>
  <li>Pinning works with no signal. Writes land in a local SQLite outbox and push when connectivity returns, after which the local copy is deleted, so a record lives in exactly one place.</li>
  <li>The cloud upsert is keyed on the place and user pair, so a retry after a mid-push photo failure can never duplicate a contribution.</li>
</ul>

<h3>Technical details</h3>
<ul>
  <li><strong>React Native with Expo 57</strong> in TypeScript, on a dev build rather than Expo Go. Background location needs native modules, which also rules out a web or PWA version entirely, since browsers cannot record GPS with the screen off.</li>
  <li><strong>Background GPS</strong> through expo-location and expo-task-manager, with a top-level task definition, an Android foreground service and its persistent notification, and UIBackgroundModes on iOS.</li>
  <li><strong>Supabase backend</strong> running Postgres and PostGIS for the viewport query, row level security on every table so a user reads what is public or theirs and writes only their own rows, Storage for photos, and SQL migrations kept in the repo.</li>
  <li><strong>Google sign-in</strong> behind a login wall, exchanging the native ID token for a Supabase session, with account deletion that purges storage and cascades every row the user owns.</li>
  <li><strong>Edge Functions</strong> hold the secrets the binary must never contain. The Gemini vision call and the account-delete flow both run server-side behind a verified JWT.</li>
  <li><strong>Vision cost control</strong> by downscaling each image to 768px and re-encoding it before the model call, so a scan costs one Gemini image tile instead of a dozen.</li>
  <li><strong>Native rendering traps solved the hard way.</strong> Android snapshots child-view map markers to bitmaps, so price bubbles keep tracking view changes until layout settles, and they must use the system font, because a custom family is not ready at capture time and the pin snapshots blank.</li>
  <li><strong>Analytics with privacy rules</strong> through PostHog product analytics and session replay. Replay masks all images and inputs, third-party phone numbers rendered as plain text are explicitly wrapped, and no event property ever carries rent, contact, photos or coordinates.</li>
  <li><strong>AppsFlyer</strong> for ad install attribution only, with no product events, and fully off without a dev key.</li>
  <li><strong>Tag-driven releases.</strong> Pushing a version tag makes GitHub Actions build a signed, R8-minified AAB and upload it to the Play internal track. Both the version name and the version code are derived from the tag, so a version can never be hand-bumped into a duplicate.</li>
  <li><strong>Landing site</strong> in Next.js 16 with the App Router, Tailwind v4 and Motion, Bangla-first with English at the /en route and a typed dictionary that fails the build on a missing key.</li>
</ul>`,
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
        thumbnail: '/projects/thumbnail/basha-bazar.webp',
        longThumbnail: '/projects/long/basha-bazar-lt.webp',
        images: [
            '/projects/images/basha-bazar-1.webp',
            '/projects/images/basha-bazar-2.webp',
            '/projects/images/basha-bazar-3.webp',
            '/projects/images/basha-bazar-4.webp',
            '/projects/images/basha-bazar-5.webp',
            '/projects/images/basha-bazar-6.webp',
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
