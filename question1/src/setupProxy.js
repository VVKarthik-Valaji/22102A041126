const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/evaluation-service',
    createProxyMiddleware({
      target: 'https://20.244.56.144',
      changeOrigin: true,
      secure: false,
    })
  );
};
