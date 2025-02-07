
const corsSettings = {
  origin: ['http://localhost:5500','http://127.0.0.1:5500'], // 允许的源
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法
  allowedHeaders: ['Authorization', 'Content-Type'], // 允许的请求头
};

const middlewares: any[] = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: corsSettings,  // 将 CORS 设置作为配置传入
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default middlewares;