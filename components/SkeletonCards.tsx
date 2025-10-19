import { cn, range } from "@/utils";
import { HTMLAttributes } from "react";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type SkeletonCardsProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  numberOfCards?: number;
};

export const SkeletonCards = ({ className, numberOfCards }: SkeletonCardsProps) => {
  const cards = range(numberOfCards || 9);
  return (
    <main className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card} className="animate-pulse">
          <CardContent>
            <Skeleton className={cn("h-64 w-full rounded-lg", className)} />
          </CardContent>
        </Card>
      ))}
    </main>
  );
};
