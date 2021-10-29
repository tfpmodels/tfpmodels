const withVideos = require("next-videos")

// module.exports = withVideos()

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"]
  },
}

module.exports = withVideos()
