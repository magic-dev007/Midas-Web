import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import SectionShell from "../shared/SectionShell";

const stacks = [
  {
    label: "Frontend",
    items: [
      "React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS",
      "Angular", "Svelte", "Remix", "Astro", "Vite", "Webpack",
      "Redux", "Zustand", "React Query", "Framer Motion", "Three.js"
    ]
  },
  {
    label: "Language",
    items: [
      "TypeScript", "JavaScript", "Python", "PHP", "Java",
      "Go", "Rust", "C++", "Ruby", "Swift", "Kotlin"
    ]
  },
  {
    label: "Backend",
    items: [
      "Node.js", "Laravel", "Express.js", "NestJS", "FastAPI",
      "Django", "Flask", "Spring Boot", "Ruby on Rails", "ASP.NET",
      "GraphQL", "REST APIs", "gRPC", "WebSockets", "Serverless"
    ]
  },
  {
    label: "Blockchain",
    items: [
      "Solidity", "Web3.js", "Ethers.js", "Hardhat", "Truffle",
      "Foundry", "IPFS", "The Graph", "Chainlink", "OpenZeppelin",
      "Ethereum", "Polygon", "Binance Smart Chain", "Arbitrum", "Optimism"
    ]
  },
  {
    label: "Database",
    items: [
      "PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch",
      "DynamoDB", "Firebase", "Supabase", "Prisma", "Sequelize",
      "TypeORM", "Drizzle", "PlanetScale", "Neo4j", "InfluxDB"
    ]
  },
  {
    label: "Cloud",
    items: [
      "AWS", "GCP", "Azure", "Vercel", "Netlify",
      "Cloudflare", "DigitalOcean", "Heroku", "Railway", "Render",
      "AWS S3", "AWS EC2", "AWS Lambda", "CloudFront", "Route 53"
    ]
  },
  {
    label: "DevOps",
    items: [
      "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins",
      "GitHub Actions", "GitLab CI/CD", "CircleCI", "Travis CI",
      "Nginx", "Apache", "Prometheus", "Grafana", "ELK Stack"
    ]
  },
  {
    label: "AI & Automation",
    items: [
      "Python", "LangChain", "LlamaIndex", "Pinecone", "ElasticSearch",
      "AWS Lambda", "OpenAI API", "Anthropic Claude", "Hugging Face",
      "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
      "OpenCV", "NLTK", "spaCy", "Transformers", "RAG Systems"
    ]
  }
] as const;

const Technology = () => {
  return (
    <SectionShell
      id="technologies"
      kicker="Technologies We Use"
      title="Cutting-edge tools and frameworks powering our solutions"
      description=""
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stacks.map((stack, index) => (
          <motion.div
            key={stack.label}
            className="glass-panel group relative rounded-2xl p-6 overflow-hidden flex flex-col min-h-[280px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-midas-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-midas-gold/20 group-hover:bg-midas-gold/30 transition-colors">
                  <Cpu className="h-5 w-5 text-midas-gold-soft" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 transition-colors duration-300">
                  {stack.label}
                </h3>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-2 text-xs text-slate-600 dark:text-slate-300 auto-rows-min content-start transition-colors duration-300">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-1.5 font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200 group-hover:border-midas-gold/40 transition-colors text-center overflow-hidden text-ellipsis whitespace-nowrap"
                    title={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Technology;

