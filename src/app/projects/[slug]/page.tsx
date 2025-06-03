import { notFound } from "next/navigation";
import projects from "../projects.json";
import { ChevronRight } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-2">
        <b>Role:</b> {project.role}<br />
        <b>Duration:</b> {project.duration}
      </p>
      <p className="text-gray-700 mb-4">{project.desc}</p>
      <ul className="list-disc ml-5 mb-4 text-gray-600">
        {project.highlights?.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      <a href={project.url} className="mt-4 relative z-10 flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition group/link w-max" target="_blank" rel="noopener noreferrer">
        View Live Project
        <ChevronRight size={20} />
      </a>
    </section>
  );
}

// For static site generation (recommended for public portfolios)
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
