import Encriyption from "@/app/components/main/encriyption/page";
import Hero from "./components/main/hero/page";
import Project from "@/app/components/main/project/page";
import Skills from "@/app/components/main/skill/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encriyption />
        <Project />
      </div>
    </main>
  );
}