import React from "react";

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-russo">This line uses Russo One</h1>

      <p className="text-lg">This line uses the default font</p>

      <p className="font-russo uppercase tracking-wide">
        Another line with Russo One
      </p>
    </div>
  );
}
