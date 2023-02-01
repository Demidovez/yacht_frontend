module.exports = {
  publicPath: "/projects/",
  transpileDependencies: ["vuetify"],
  filenameHashing: false,
  productionSourceMap: false,
  chainWebpack: (config) => config.optimization.minimize(false),

  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        timeout: 6000,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
        logLevel: "debug",
      },
    },
  },

  pwa: {
    name: "Yacht",
    themeColor: "#41B883",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
