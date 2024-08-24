import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  export default function Experience() {
    return (
      <main className="w-screen min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(/green.jpg)" }}>
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
  
        <div className="container mx-auto flex flex-col justify-center items-center min-h-[60vh] text-center px-4 md:px-20 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Experience</h2>
          <p className="mt-6 text-md md:text-lg text-white mb-10">
            I have participated in various educational development activities, including completing the NetSchool program, which provided me with knowledge about Cisco, Linux, and Python. I earned the UKBI certification, showcasing my proficiency in Indonesian language skills. Additionally, I obtained the Skillvul Python Beginner certification, demonstrating my foundational understanding of Python programming. Also, I developed a program in the C language, reinforcing my programming skills and understanding the fundamentals of algorithms.
          </p>
        </div>
  
        <div className="w-full h-1/4">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src="/img_satu.jpeg" 
                  alt="Experience 1"
                  width={600}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src="/img_dua.png" 
                  alt="Experience 2"
                  width={600}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src="/img_tiga.jpg" 
                  alt="Experience 3"
                  width={600}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src="/img_empat.png" 
                  alt="Experience 4"
                  width={600}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Image
                  src="/img_lima.png" 
                  alt="Experience 5"
                  width={600}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </main>
    );
  }
  