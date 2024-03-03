"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Failed to load one pokemon: {error.message}</p>
      {/* <button onClick={reset}>Try again</button> */}
    </div>
  );
}
