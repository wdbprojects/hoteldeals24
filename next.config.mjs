/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://wdbmain:vFQiG9Do24BCRBFk@cluster0.2idxc.mongodb.net/hoteldeals?retryWrites=true&w=majority",
    DB_URI:
      "mongodb+srv://wdbmain:vFQiG9Do24BCRBFk@cluster0.2idxc.mongodb.net/hoteldeals?retryWrites=true&w=majority",
  },
};

export default nextConfig;
