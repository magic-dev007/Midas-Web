import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Play } from "lucide-react";
import SectionShell from "../shared/SectionShell";

type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  appLinks?: {
    android?: string;
    ios?: string;
  };
  videoLink?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "TrueCar",
    category: "Web Application / Mobile",
    description: "A digital car-buying marketplace that gives shoppers transparent pricing insights and connects them with a nationwide network of certified dealers for new and used vehicles. Features include price transparency with 'what others paid' data, end-to-end digital retailing journey including research, pricing, financing, trade-in, and delivery options, plus a certified dealer network providing upfront, personalized offers to buyers nationwide.",
    imageUrl: "src/images/truecar.png",
    link: "https://truecar.com/",
    appLinks: {
      android: "https://play.google.com/store/apps/details?id=com.truecar.mobile.android.consumer&pli=1",
      ios: "https://apps.apple.com/us/app/truecar-used-cars-and-new-cars/id624714390"
    }
  },
  {
    title: "GetFluently",
    category: "AI / Automation",
    description: "An AI-driven automation platform designed to streamline communication, task management, and workflow productivity for remote teams. Features include smart automation engine with Python and Django, Slack & Notion integration, AI summarization & insights using natural language processing, custom workflow builder, and notification & reporting system. Built with React.js frontend, PostgreSQL database, and Dockerized microservices hosted on AWS.",
    imageUrl: "src/images/fluenty.png",
    link: "https://getfluently.app/"
  },
  {
    title: "Federal Market Index",
    category: "Data Engineering / Analytics",
    description: "A custom stock market index platform that replaces a manual Excel-based workflow with an automated, web-based dashboard. Features include automated index engine with Python backend scheduled via cron, real-time data updates from Alpha Vantage API, interactive performance charts with Chart.js, and responsive analytics dashboard built with Next.js and Tailwind CSS. Transforms manual Excel models into professional, automated index platforms with live market data.",
    imageUrl: "src/images/market.png",
    link: "https://www.fedmarketwatch.com/",
    videoLink: "https://youtu.be/MOYa0mxh138"
  },
  {
    title: "Cast It Reach",
    category: "SaaS Platform",
    description: "A premium reality casting platform that powers the applicant intake and selection process for major unscripted TV formats including 'Big Brother,' 'Got Talent,' 'The Traitors,' 'MasterChef,' and 'The Chase.' Features include end-to-end casting pipeline centralizing online applications and candidate profiles, customizable workflows for open calls and screening, applicant communication hub with built-in tools, and scalable & secure SaaS infrastructure designed for high-volume global shows with strong security and data-privacy controls.",
    imageUrl: "src/images/cashit.png",
    link: "https://www.castitreach.com/"
  },
  {
    title: "The Swarm",
    category: "Data Platform / AI",
    description: "The Relationship Data Company that curates a rich dataset of 580M profiles with daily job changes, 100M companies with fundraising data, and a unique relationship mapping AI engine. Built for builders and investors, The Swarm provides comprehensive relationship intelligence through advanced data curation, real-time job change tracking, company fundraising insights, and AI-powered relationship mapping to help businesses make data-driven decisions and identify key connections in their industry.",
    imageUrl: "src/images/theswarm.png",
    link: "https://www.theswarm.com/"
  },
  {
    title: "Jeevz",
    category: "Platform / SaaS",
    description: "A modern platform solution designed to streamline business operations and enhance productivity. Built with scalable architecture and intuitive user experience, Jeevz provides comprehensive tools and services to help organizations optimize their workflows, manage resources efficiently, and drive growth through innovative technology solutions.",
    imageUrl: "src/images/drivers.png",
    link: "https://jeevz.com/"
  }
];

const Portfolio = () => {
  return (
    <SectionShell
      id="portfolio"
      kicker="Portfolio"
      title=""
      description=""
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            {item.imageUrl ? (
              <div className="relative h-52 w-full overflow-hidden bg-slate-200 dark:bg-slate-800 flex-shrink-0 transition-colors duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/40 to-transparent dark:from-slate-900/90 dark:via-slate-900/40 transition-colors duration-300" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-midas-gold/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-midas-gold-soft border border-midas-gold/30">
                    {item.category}
                  </span>
                </div>
              </div>
            ) : (
              <div className="h-52 w-full bg-gradient-to-br from-slate-200 via-slate-200/80 to-slate-100 flex items-center justify-center relative overflow-hidden flex-shrink-0 transition-colors duration-300 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,176,68,0.1),transparent)]" />
                <div className="text-center text-slate-500 dark:text-slate-400 relative z-10 transition-colors duration-300">
                  <div className="text-5xl mb-2">📷</div>
                  <div className="text-sm font-medium">Add Image</div>
                </div>
              </div>
            )}
            <div className="p-6 flex flex-col flex-1 min-h-[240px]">
              {!item.imageUrl && (
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-midas-gold-soft mb-3 flex-shrink-0">
                  {item.category}
                </div>
              )}
              <div className="flex items-start justify-between gap-3 mb-3 flex-shrink-0">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-tight transition-colors duration-300">
                  {item.title}
                </h3>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-midas-gold/20 text-midas-gold-soft hover:bg-midas-gold/30 hover:scale-110 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-grow line-clamp-4 transition-colors duration-300">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-200 hover:border-midas-gold/40 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-all flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Website</span>
                  </a>
                )}
                {item.appLinks?.android && (
                  <a
                    href={item.appLinks.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-200 hover:border-midas-gold/40 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-all flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Android</span>
                  </a>
                )}
                {item.appLinks?.ios && (
                  <a
                    href={item.appLinks.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-200 hover:border-midas-gold/40 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-all flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>iOS</span>
                  </a>
                )}
                {item.videoLink && (
                  <a
                    href={item.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700/70 dark:bg-slate-800/50 dark:text-slate-200 hover:border-midas-gold/40 hover:bg-slate-200 dark:hover:bg-slate-800/70 transition-all flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Play className="h-3.5 w-3.5" />
                    <span>Video</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Portfolio;
