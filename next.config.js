/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build', // Defined build directory
  webpack: (config, options) => { // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name:"widget2",
        filename: "remoteEntry.js", // remote file name which will used later
        remoteType: "var",
        exposes: { // expose all component here.
          "./demo": "./components/demo-widget"
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
        ]
      })
    )
    return config
  }
}
