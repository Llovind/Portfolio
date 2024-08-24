import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects() {
    const projects = [
      {
        title: "Network Hierarchy",
        description: "A project that involves designing and simulating a hierarchical network structure using Cisco Packet Tracer...",
        imageUrl: "/gambar_satu.png",
      },
      {
        title: "D'Grave",
        description: "This C programming project involved designing and developing a software application that showcases core programming concepts...",
        imageUrl: "/gambar_dua.png",
      },
    ];
  
    return (
      <main className="w-screen min-h-screen bg-neutral-100 bg-cover bg-center" style={{ backgroundImage: "url('/green.jpg')" }}>
        <nav className="fixed opacity-100 top-0 left-0 w-full bg-neutral-950 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-6">
              <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link href="/skills" className="hover:text-yellow-400">Skills</Link></li>
              <li><Link href="/experience" className="hover:text-yellow-400">Experience</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-400">Projects</Link></li>
            </ul>
          </div>
        </nav>
  
        <section className="container mx-auto py-20 px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h1>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
  