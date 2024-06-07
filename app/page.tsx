import Encriyption from "@/app/encryption/Encriyption";
import Hero from "@/app/hero/Hero";
import Project from "@/app/project/Project";
import Skills from "@/app/about/Skills";
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
