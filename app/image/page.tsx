import Image from "next/image";
import React from "react";
import img from "../../public/beach.jpg";
import remainder from "../../public/remainder.svg";

const ImagePage = () => {
  return (
    <div>
      ImagePage
      <div>
        <Image src={img} width={1000} height={500} alt="beach img" />
        <Image src={remainder} width={50} height={50} alt="beach img" />
      </div>
    </div>
  );
};

export default ImagePage;
