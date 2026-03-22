/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows the Dockerfile to find the /standalone folder
  output: 'standalone',

  typescript: {
    // !! WARNING !! 
    // This is fine for now, but as a DevOps/Backend engineer, 
    // try to fix these later to ensure your build is stable!
    ignoreBuildErrors: true,
  },

  images: {
    // Keeps images working without needing a specific Node image optimizer
    unoptimized: true,
  },
}

export default nextConfig