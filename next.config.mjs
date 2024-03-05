/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/**",
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
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png",
      },
    ],
  },
};

export default nextConfig;
