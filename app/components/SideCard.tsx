import React from "react";

export default function SideCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="w-153 border-b">
      <h2 className="py-8 border-y text-6xl font-light text-center">{title}</h2>
      <div className="h-80 m-4 text-2xl tracking-wide">{children}</div>
    </article>
  );
}
