declare module "*.svg" {
  import React from "react";
  const SVG: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// Taken from https://github.com/twopluszero/next-images/blob/master/index.d.ts
// Excluding svg

declare module "*.jpeg" {
  const value: string;
  export = value;
}

declare module "*.jpg" {
  const value: string;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.gif" {
  const value: string;
  export = value;
}

declare module "*.ico" {
  const value: string;
  export = value;
}

declare module "*.webp" {
  const value: string;
  export = value;
}

declare module "*.jp2" {
  const value: string;
  export = value;
}

declare module "*.avif" {
  const value: string;
  export = value;
}
