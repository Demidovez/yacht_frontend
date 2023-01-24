module.exports = {
  publicPath: "/projects/",
  transpileDependencies: ["vuetify"],
  filenameHashing: false,
  productionSourceMap: false,

  devServer: {
    proxy: {
      "/api11": {
        target: "http://localhost:8000",
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
