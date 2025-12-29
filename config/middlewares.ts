export default [
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          // "img-src": [
          //   "'self'",
          //   "data:",
          //   "blob:",
          //   "dl.airtable.com", 
          // ],
          // "media-src": [
          //   "'self'",
          //   "data:",
          //   "blob:",
          //   "dl.airtable.com", 
          // ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::cors',
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost",
        "http://localhost:3000",
        "http://localhost:1337",
        "https://cscollege.cloud",
        "https://www.cscollege.cloud",
        "https://admin.cscollege.cloud",
        "https://www.admin.cscollege.cloud",
        "https://www.admin.cscollege.co.in",
        "https://admin.cscollege.co.in",
        "https://www.cscollege.co.in",
        "https://cscollege.co.in",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  // {
  //   resolve: "./src/middlewares/error-logger",
  //   config: {},
  // },
  'strapi::poweredBy',
  'strapi::query',
  // 'strapi::body',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
      multipart: true, // Enables file uploads
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // 200MB limit for uploaded files
      },
    },
  },
  // {
  //   resolve: "./src/middlewares/api-timeout",
  //   config: {},
  // },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
