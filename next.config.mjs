/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/sprites/master/sprites/**",
      },
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
        port: "",
        pathname: "/uploads/pokemon-symbol-logo-png-31.png",
      },
    ],
  },
};

export default nextConfig;
