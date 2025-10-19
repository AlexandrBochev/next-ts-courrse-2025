import { getProjects } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { METADATA } from "@/constants";
import { Github } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = METADATA.PROJECTS;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map(({ id, title, url, gitHubUrl, img }) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle className="capitalize">{title}</CardTitle>
            <CardAction>
              <Button variant="outline" size="icon" asChild>
                <Link href={gitHubUrl} target="_blank">
                  <Github />
                </Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Link href={url} target="_blank">
              <Image
                src={img}
                alt={title}
                width={440}
                height={275}
                priority
                className="
                  h-72 w-auto border rounded-lg object-cover
                  hover:scale-101 hover:shadow active:scale-100
                  transition-transform duration-200
                "
              />
            </Link>
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
