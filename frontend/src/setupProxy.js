const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://assignment1-gae-patss.ue.r.appspot.com',
            changeOrigin: true,
        })
    );
};