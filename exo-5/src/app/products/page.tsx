"use client";
import fetchProduct from "../external/fetch";
import { useEffect, useState } from "react";
import Image from 'next/image'


export default function MyButton() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProduct().then((response) => {
      setProducts(response.products);
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.code}>
          <p>{product.product_name}</p>
          <Image src={product.image_url} alt={product.product_name} width={100} height={100} />
          <p>{product.nutriments.energy} kJ</p>
        </div>
      ))}
    </>
  );
}
