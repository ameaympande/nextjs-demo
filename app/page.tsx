import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <>
      <div>
        <h1>This is home Page</h1>
        <ProductCart />
      </div>
    </>
  );
}
