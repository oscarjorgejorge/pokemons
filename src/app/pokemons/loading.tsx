import { PokemonCardSkeleton } from "@/components/shared/PokemonCardSkeleton";
import { defaultApiParams } from "@/core/interfaces/api_response";

export default function LoadingPokemonsPake() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
      {Array(defaultApiParams.limit)
        .fill(0)
        .map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
    </div>
  );
}
