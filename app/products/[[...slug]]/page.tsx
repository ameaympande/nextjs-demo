import React from "react";

type propTypes = {
  params: { slug: String[] };
  searchParams: { sortOrder: String };
};
const ProductDetails = ({
  params: { slug },
  searchParams: { sortOrder },
}: propTypes) => {
  return (
    <div>
      ProductDetails {slug} {sortOrder}
    </div>
  );
};

export default ProductDetails;
