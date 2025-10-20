import { UI } from "@/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const Hero = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{UI.TITLES.WELCOME}</CardTitle>
        <CardDescription>{UI.DESCRIPTIONS.INTRO}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col lg:flex-row items-center gap-4">
        <Image
          src={
            "https://udemy-certificate.s3.amazonaws.com/image/UC-06165103-cf3e-4200-9db2-171a00d5b1c7.jpg?v=1759587504000"
          }
          alt={UI.TITLES.WELCOME}
          width={600}
          height={400}
          className="rounded-md border h-96 w-auto object-cover"
        />
        <div>
          <h1 className="font-bold text-2xl ">{UI.TITLES.HERO}</h1>
          <p>{UI.DESCRIPTIONS.HERO_CONTENT}</p>
          <p>{UI.DESCRIPTIONS.HERO_COURSE}</p>
        </div>
      </CardContent>
    </Card>
  );
};
