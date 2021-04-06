const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("@c", resolve("examples/components"))
      .set("@a", resolve("examples/assets"))
      .set("@r", resolve("src"));
  },
  devServer: {
    overlay: {
      errors: true,
    },
  },
};
