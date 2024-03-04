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
      {
        protocol: "https",
        hostname: "media.tenor.com",
        port: "",
        pathname: "/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif",
      },
    ],
  },
};

export default nextConfig;
