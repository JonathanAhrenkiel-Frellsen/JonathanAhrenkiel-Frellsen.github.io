// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'JonathanAhrenkiel-Frellsen', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/cv/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['JonathanAhrenkiel-Frellsen/cv'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects i have worked on',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Based Capital AG',
          is_side_project: false,
          short_description:
            'This is a project I worked on as a lead developer. The software was a python codebase for running trading strategies on crypto markets and automated market making. I also developed a rust backtester for the strategies. The project was a success and is still running today.',
          long_description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.\n<img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg" alt="gallery" />\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          tags: [
            'Python',
            'Pandas',
            'Numpy',
            'Rust',
            'High Performance Computing',
            'Matplotlib',
            'Trading',
            'Crypto',
          ],
          thumbnail_url:
            'https://media.licdn.com/dms/image/C4D0BAQHJR4bGdGXbOw/company-logo_100_100/0/1630576117654/based_capital_logo?e=1717632000&v=beta&t=1WnPqFQMa1GSfZvyjWPz_4HmVlm9yALrTfXpNoUY3w0',
          images_url: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
        },
        {
          title: 'DTU - Chemical filtering proccesses',
          is_side_project: false,
          short_description:
            'This is a project I`m working on part time as a consultant. The project is about developing a machine learning model for predicting the outcome of chemical filtering proccesses. The project is still ongoing.',
          long_description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          thumbnail_url:
            'https://media.licdn.com/dms/image/D4E0BAQHYKcm_kkO6WA/company-logo_100_100/0/1692512920097/technical_university_of_denmark_logo?e=1717632000&v=beta&t=FPghG7A79_yegDEZyzKD8eOXZGk0egbmGboJqcjkBNw',
          tags: ['Python', 'PyTorch', 'RNN', 'Pandas', 'Numpy', 'Matplotlib'],
          images_url: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          link: '/DTU',
        },
        {
          title: 'Central Capital Solutions',
          is_side_project: false,
          short_description:
            'This is a project for streame lineing the loan application process. I worked on the project as a full stack engineer to develop a funnel for new users and a portal for handling important documents, kyc and other information for loan approval. The project was a success and is still running today',
          long_description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          tags: [
            'HTML',
            'CSS',
            'TypeScript',
            'React',
            'Angular',
            'Google Cloud Console',
            'Node.js',
          ],
          thumbnail_url:
            'https://media.licdn.com/dms/image/D4D0BAQE4e5sx9IXnsA/company-logo_100_100/0/1692026410339/central_capital_solutions_logo?e=1717632000&v=beta&t=CsjVL1sfFxGpxXNCRxqDmFbM9I_NMpIO_ut7HxTOtok',
          images_url: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          link: '/CCS',
        },
        {
          title: 'The Capital',
          is_side_project: false,
          short_description:
            'This is a new/social media website about Crypto i was a apart of developing. My responsebility for this project was frontend and backend of the website.',
          long_description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'AWS'],
          thumbnail_url:
            'https://media.licdn.com/dms/image/D4E0BAQH6tWYRBoxt-g/company-logo_100_100/0/1699005235072/thecapitalio_logo?e=1717632000&v=beta&t=aGZQT3xBy9hShZrtoRlpgY1jbEBvjOix8HpopBw4nsg',
          images_url: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          link: '/codeery',
        },
        {
          title: 'Fill Out',
          is_side_project: true,
          short_description:
            'This is a new/social media website about Crypto i was a apart of developing. My responsebility for this project was frontend and backend of the website.',
          long_description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          tags: ['Unity', 'C#', 'Mobile', 'Game'],
          thumbnail_url:
            'https://media.licdn.com/dms/image/D4E0BAQH6tWYRBoxt-g/company-logo_100_100/0/1699005235072/thecapitalio_logo?e=1717632000&v=beta&t=aGZQT3xBy9hShZrtoRlpgY1jbEBvjOix8HpopBw4nsg',
          images_url: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          link: '/codeery',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jonathan Ahrenkiel Frellsen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Jonathan Ahrenkiel-Frellsen',
    phone: '+45 22 12 69 50',
    email: 'jola190500@gmail.com',
    company_email: 'jaf@codeery.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Angular',
    'Node.js',
    'PostgreSQL',
    'Python',
    'Rust',
    'C#',
    'Unity',
    'Docker',
    'Google Cloud Platform',
    'Azure',
    'AWS',
    'Keras',
    'PyTorch',
    'TensorFlow',
  ],
  experiences: [
    {
      imgUrl:
        'https://media.licdn.com/dms/image/D4E0BAQHYKcm_kkO6WA/company-logo_100_100/0/1692512920097/technical_university_of_denmark_logo?e=1717632000&v=beta&t=FPghG7A79_yegDEZyzKD8eOXZGk0egbmGboJqcjkBNw',
      company: 'DTU',
      position: 'Konsulent',
      from: 'October 2023',
      to: 'Present',
      companyLink:
        'https://www.linkedin.com/school/technical-university-of-denmark/mycompany/verification/',
    },
    {
      imgUrl:
        'https://media.licdn.com/dms/image/D4D0BAQE4e5sx9IXnsA/company-logo_100_100/0/1692026410339/central_capital_solutions_logo?e=1717632000&v=beta&t=CsjVL1sfFxGpxXNCRxqDmFbM9I_NMpIO_ut7HxTOtok',
      company: 'Central Capital Solutions',
      position: 'Full stack engineer',
      from: 'September 2022',
      to: 'Present',
      companyLink:
        'https://www.linkedin.com/company/central-capital-solutions/',
    },
    {
      imgUrl:
        'https://media.licdn.com/dms/image/C4D0BAQHJR4bGdGXbOw/company-logo_100_100/0/1630576117654/based_capital_logo?e=1717632000&v=beta&t=1WnPqFQMa1GSfZvyjWPz_4HmVlm9yALrTfXpNoUY3w0',
      company: 'Based Capital AG',
      position: 'Lead Developer',
      from: 'November 2020',
      to: 'Present',
      companyLink:
        'https://www.linkedin.com/company/69489725/admin/feed/posts/?feedType=following',
    },
    {
      imgUrl:
        'https://media.licdn.com/dms/image/D4E0BAQHgkhWk9w_oQQ/company-logo_100_100/0/1694896213156/codeery_logo?e=1717632000&v=beta&t=jMYLEDyJSWyh8OtMbh-mUVvL6C9tQJcpjOy1f3r7ZTA',
      company: 'Codeery ApS',
      position: 'Co-Founder',
      from: 'December 2016',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/codeery/',
    },
    {
      imgUrl:
        'https://media.licdn.com/dms/image/D4E0BAQH6tWYRBoxt-g/company-logo_100_100/0/1699005235072/thecapitalio_logo?e=1717632000&v=beta&t=aGZQT3xBy9hShZrtoRlpgY1jbEBvjOix8HpopBw4nsg',
      company: 'The Capital',
      position: 'Full stack engineer & Lead Developer',
      from: 'April 2019',
      to: 'November 2020',
      companyLink: 'https://www.linkedin.com/company/thecapitalio/',
    },
  ],
  educations: [
    {
      institution: 'University of Copenhagen',
      degree: 'Bachelor of Science in Machine Learning and Data Science',
      from: '2019',
      to: '2023',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
