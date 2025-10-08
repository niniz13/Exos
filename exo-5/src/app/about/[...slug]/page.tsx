"use client";
import { use } from "react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <div>
      <p>Nom : {slug[0]}</p>
      <p>Age : {slug[1]}</p>
    </div>
  );
}
