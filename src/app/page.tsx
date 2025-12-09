export default function Home() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Hi, I'm <span className="text-indigo-600">Dantong Zhu</span>
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed">
        Frontend Engineer @ Barclays US. I build high-impact React + TypeScript
        applications, micro-frontend architectures, and scalable AI-powered tools.
      </p>

      <ul className="space-y-2 text-slate-700">
        <li>• Delivered <b>$3M+</b> annual cost savings via digital-letter platform</li>
        <li>• Own React micro-frontends integrated with AEM & Module Federation</li>
        <li>• AI/biology research projects (OpenPhase, ICLR-style blogs)</li>
      </ul>

      <div className="flex gap-4 pt-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
