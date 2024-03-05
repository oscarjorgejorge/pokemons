"use client";

import { TeamRocket } from "@/components/shared/TeamRocket";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="w-full flex flex-col items-center mt-[100px]">
      <p className="font-semibold text-2xl mb-[32px]">
        There was some error: {error.message}
      </p>
      <TeamRocket />
    </div>
  );
}
