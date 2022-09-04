/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [require("remark-prism")],
	},
});

const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx"],
	styledComponents: true,
	swcMinify: true,
	reactStrictMode: false,
	images: {
		domains: [
      "images.unsplash.com",
      "placeimg.com",
      "picsum.photos",
      "via.placeholder.com",
      "images.pexels.com",
      "m.media-amazon.com",
      "tailwindui.com",
		],
	},
	experimental: {
		output: 'standalone',
	},
};

module.exports = withMDX(nextConfig);