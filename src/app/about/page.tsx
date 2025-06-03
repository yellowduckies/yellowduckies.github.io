function yearsSinceDecember2020() {
    const start = new Date('2020-12-01');
    const now = new Date();

    const diff = now.getTime() - start.getTime();
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);

    return years.toFixed(1);
}

export default function About() {
    return (
        <section className="max-w-2xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-2">
                I’m a Senior Software Engineer with {yearsSinceDecember2020()} years of experience, currently working at dunnhumby.
            </p>
            <p className="text-gray-700 mb-2">
                I specialize in React.js, Node.js, MongoDB, and scalable cloud apps. I love blending modern UI/UX with robust backend systems to build digital products people love to use.
            </p>
            <p className="text-gray-700">
                Outside of work, you’ll find me hiking, experimenting with AI, and sharing knowledge on Instagram and YouTube.
            </p>
        </section>
    );
}
