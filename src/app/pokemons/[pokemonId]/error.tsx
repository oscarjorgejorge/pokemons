"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <p>Failed to load one pokemon: {error.message}</p>
    </div>
  );
}
