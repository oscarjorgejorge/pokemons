import React from "react";

interface PokemonCardSkeletonProps {}

export const PokemonCardSkeleton = (props: PokemonCardSkeletonProps) => {
  return (
    <div className="w-full bg-white min-h-[310px] shadow-md p-4 rounded-lg space-y-6">
      <div className="w-full flex justify-center">
        <div className="size-[130px] bg-slate-300 animate-pulse" />
      </div>
      <div className="animate-pulse h-6 bg-slate-400 w-[120px]" />
      <div className="space-y-4">
        <div className="animate-pulse h-4 bg-slate-200 w-[160px]" />
        <div className="animate-pulse h-4 bg-slate-200 w-[140px]" />
      </div>
    </div>
  );
};
