import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <main className="w-screen min-h-screen relative bg-cover bg-center" style={{ backgroundImage: "url(/green.jpg)" }}>
      
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

      <div className="flex items-center justify-between w-full h-screen pt-20 pb-20 px-4">
        <div className="flex-1 flex flex-col justify-center pl-4 md:pl-20">
          <h2 className="text-4xl md:text-5xl text-white font-semibold mb-4">
            Hi, My Name Is
            <span className="text-transparent bg-clip-text bg-yellow-400 ml-3">
              Lovind Luthfan Hakeem Firdaus
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white italic mb-6">
            Student at the Faculty of Electrical Engineering, majoring in Telecommunication Engineering at Telkom University. 
            I have the ambition and interest to work in the telecommunications sector. I aim to make a meaningful contribution and progress to the team.
          </p>
          <Link href="https://drive.google.com/file/d/1I49u3_vOdjHQ8PphnjAmJH6REDdbVY_s/view?usp=sharing">
            <Button className="text-lg mt-4" variant="outline">Download My CV</Button>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/Foto-saya.jpeg"
            alt="A profile picture of Lovind Luthfan Hakeem Firdaus"
            height={300}
            width={290}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Sosial Media */}
      <div className="flex justify-center items-center py-4 bg-neutral-950 text-white">
        <ul className="flex space-x-8">
          <li>
            <Link href="blank">
              <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Llovind">
              <FaGithub className="text-3xl text-white hover:text-gray-400" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/vin_lhf?igsh=MWsweTNvZXFxc3Yyeg==">
              <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
            </Link>
          </li>
        </ul>
      </div>

    </main>
  );
}
