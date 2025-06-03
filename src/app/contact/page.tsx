import { Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section className="max-w-md mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-6">
                Let’s connect! Reach me at <a href="mailto:saroj.prasad@email.com" className="text-blue-600">prasad.hunny03@gmail.com</a>
                <br />
                or message me on <a href="https://linkedin.com/in/saroj-prasad" target="_blank" className="text-blue-600">Saroj Prasad <Linkedin className="inline w-4 h-4" /></a>.
            </p>
            <form className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border rounded px-3 py-2"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border rounded px-3 py-2"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="border rounded px-3 py-2"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white rounded-full px-6 py-2 mt-2 hover:bg-gray-800 transition"
                >
                    Send
                </button>
            </form>
        </section>
    );
}
