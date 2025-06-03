import Link from "next/link";
import projects from "./projects.json";
import { ChevronRight } from "lucide-react";

export default function Projects() {
    return (
        <section className="max-w-2xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid gap-6">
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="relative group block rounded-xl border p-5 hover:shadow-lg transition overflow-hidden min-h-[120px]"
                        style={{ minHeight: 120 }}
                    >
                        {/* Chevron as card-height animated background */}
                        <ChevronRight
                            className="
                                absolute left-0 top-0 h-full w-[64px] 
                                text-gray-400 opacity-0 -translate-x-10 translate-y-5
                                group-hover:opacity-50 group-hover:translate-x-130 
                                transition-all duration-400 ease-in-out
                                pointer-events-none z-0
                            "
                            aria-hidden="true"
                        />
                        <Link
                            href={`/projects/${p.slug}`}
                            className="relative z-10 block"
                        >
                            <h3 className="font-semibold text-xl">{p.title}</h3>
                            <p className="text-gray-600">{p.desc}</p>
                        </Link>
                        <a
                            href={p.url}
                            className="mt-4 relative z-10 flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition group/link w-max"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View live project
                            <ChevronRight size={20} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
