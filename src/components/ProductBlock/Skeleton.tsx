import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="product-block"
    speed={2}
    width={240}
    height={320}
    viewBox="0 0 240 320"
    backgroundColor="#545466"
    foregroundColor="#938585"
  >
    <rect x="112" y="124" rx="0" ry="0" width="6" height="5" />
    <rect x="0" y="188" rx="30" ry="30" width="240" height="72" />
    <rect x="0" y="268" rx="24" ry="24" width="240" height="46" />
    <rect x="0" y="0" rx="26" ry="26" width="160" height="180" />
  </ContentLoader>
);

export default Skeleton;
