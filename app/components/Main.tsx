import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex items-center h-176 mx-24">{children}</div>
    </main>
  );
}
