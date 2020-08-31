import React from "react";
import Image from "gatsby-image";

export function ImageGallery({ images }) {
  return (
    <div>
      <Image fluid={images[0].localFile.childImageSharp.fluid} />
    </div>
  );
}
