import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image 
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};
