import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      [
        {
          protocol: "https",
          hostname: "i.abcnewsfe.com"
        },
        {
          protocol: "https",
          hostname: "styles.redditmedia.com",
        },
        {protocol: "https",
        hostname: "images.icon-icons.com",
        }
      ]
  }
};

export default nextConfig;
