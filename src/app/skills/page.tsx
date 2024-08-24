import Image from "next/image";
import Link from "next/link";


export default function Skills() {
  
  const skills = [
    { name: "Python", description: "Familiar with Python programming language on a beginner level." },
    { name: "C", description: "Building a Back-End build with C." },
    { name: "Cisco Packet Tracer", description: "Making network simulation with Packet tracer as a medium of training." },
    { name: "Microsoft Office", description: "Proficient in using Microsoft Office for document creation, and presentations." },
  ];

  return (
    <main className="w-screen h-screen relative">
      {/* Navbar */}
      <nav className="fixed opacity-100 top-0 left-0 w-full bg-neutral-950 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-yellow-400">About</Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-yellow-400">Skills</Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-yellow-400">Experience</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Background sama seperti di halaman Home */}
      <div
        className="flex items-center justify-between w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/green.jpg)" }}
      >
        {/* Konten halaman Skills */}
        <div className="w-full p-6 bg-opacity-70 bg-neutral-900">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center text-white mb-8">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                    {/* Ikon untuk setiap skill */}
                    <span className="text-white text-2xl">{skill.name.charAt(0)}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
                  <p className="text-gray-600 text-center">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}