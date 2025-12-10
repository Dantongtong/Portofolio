export default function Home() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">
        Hi, I'm <span className="text-indigo-600">Dantong</span>
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed">
        Software Engineer @ Barclays US. I build high-impact React + JavaScript/TypeScript
        applications, micro-frontend architectures, and scalable AI-powered tools.
      </p>

      <ul className="space-y-2 text-slate-700">
        <li>• Delivered <b>$3M+</b> annual cost savings via digital-letter platform</li>
        <li>• Mounted complext React micro-service architectures by integrating micro-frontends via Module Federation</li>
        <li>• AI+biology research projects (OpenPhase database, State Space Models improvement)</li>
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
          href="http://www.linkedin.com/in/dantongzhu"
          target="_blank"
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Dantongtong?tab=repositories"
          target="_blank"
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
