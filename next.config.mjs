/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI:
      "mongodb+srv://wdbmain:vFQiG9Do24BCRBFk@cluster0.2idxc.mongodb.net/hoteldeals?retryWrites=true&w=majority",
    DB_URI:
      "mongodb+srv://wdbmain:vFQiG9Do24BCRBFk@cluster0.2idxc.mongodb.net/hoteldeals?retryWrites=true&w=majority",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "FSGSDYERTHDFHGRTYHFDGHFGHJRJ",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
