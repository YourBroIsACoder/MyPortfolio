import { BentoGrid, BentoGridItem } from "../ui/aceternity/BentoGrid";
import { Icons } from "../ui/Icons";

import { DecryptedText } from "../ui/bits/DecryptedText";

export const About = () => {
    return (
        <section id="about" className="w-full mx-auto mb-60 px-4 md:px-0">
            <h2 className="text-2xl text-white font-display italic mb-8 border-b border-white/5 pb-2">
                <DecryptedText text="About & Stats" animateOn="view" revealDirection="start" />
            </h2>
            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

const items = [
    {
        title: "Full Stack Developer Intern @ Shubh Castings",
        description: (
            <span className="text-sm">
                Optimized industrial data with TimescaleDB and secured APIs with Django.
            </span>
        ),
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden flex-col">
                <div className="h-6 w-full bg-neutral-800 flex items-center px-2 gap-1.5 border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="p-3 font-mono text-[10px] text-green-400 opacity-80 leading-relaxed">
                    <span className="text-blue-400">user@dev</span>:<span className="text-amber-400">~/work</span>$ ./optimize_db.sh<br />
                    <span className="text-neutral-500">{`>`} Analyzing query performance...</span><br />
                    <span className="text-green-300">{`>`} Indexing time-series data...</span><br />
                    <span className="text-neutral-500">{`>`} Optimization complete. (40% faster)</span><br />
                    <span className="text-blue-400 animate-pulse">_</span>
                </div>
                <div className="absolute bottom-2 right-2 p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 md:block hidden">
                    <Icons.Briefcase className="w-4 h-4 text-amber-500" />
                </div>
            </div>
        ),
        className: "md:col-span-2",
        icon: <Icons.Briefcase className="h-4 w-4 text-neutral-500" />,
    },
     {
        title: "Technical Head @ CSI COMPS",
        description: (
            <span className="text-sm">
                Spearheading workshops and managing technical resources.
            </span>
        ),
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-20" />
                <img
                    src="/team-photo.jpg"
                    alt="Workshop"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-80"
                />
                <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-[10px] text-blue-300 font-mono z-30 backdrop-blur-sm">
                    CSI_CORE_TEAM
                </div>
            </div>
        ),
        className: "md:col-span-1",
        icon: <Icons.Code className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Technical Co-Head @ Agnel Cyber Cell",
        description: (
            <span className="text-sm">
                Orchestrating technical events and fostering a coding culture.
            </span>
        ),
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-20" />
                <img
                    src="/grp.jpg"
                    alt="Team"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-80"
                />
                <div className="absolute top-2 left-2 px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-[10px] text-purple-300 font-mono z-30 backdrop-blur-sm">
                    CYBER_CELL_UNIT
                </div>
            </div>
        ),
        className: "md:col-span-1",
        icon: <Icons.Users className="h-4 w-4 text-neutral-500" />,
    },
   
    {
        title: "9.29 CGPA",
        description: (
            <span className="text-sm">
                Bachelor of Technology in Computer Engineering.
            </span>
        ),
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex items-center justify-center relative overflow-hidden">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-800 z-10">9.29</div>
            <div className="absolute inset-0 bg-grid-white/[0.03]" />
        </div>,
        className: "md:col-span-1",
        icon: <Icons.GraduationCap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Hackathon Participations",
        description: (
            <div className="text-sm space-y-1">
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Hacquinox, FCRIT</span> <span className="text-amber-500">Top 8</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>AWS ImpactX, IIT Bombay</span> <span className="text-amber-500">Finalist</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>SIH 2025</span> <span className="text-amber-500">Internal Round Cleared</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Inceptia, PCCOER</span> <span className="text-amber-500">6th out of 1000+ participants</span></div>
            </div>
        ),
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative overflow-hidden group flex items-center justify-around px-8">
                <div className="relative group/trophy">
                    <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover/trophy:opacity-100 transition-opacity" />
                    <Icons.Trophy className="w-12 h-12 text-amber-400 relative z-10" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap opacity-0 group-hover/trophy:opacity-100 transition-opacity text-amber-300">Finalist</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="relative group/trophy">
                    <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover/trophy:opacity-100 transition-opacity" />
                    <Icons.Trophy className="w-12 h-12 text-amber-600 relative z-10" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap opacity-0 group-hover/trophy:opacity-100 transition-opacity text-amber-500">Top 8</div>
                </div>
            </div>
        ),
        className: "md:col-span-1",
        icon: <Icons.Trophy className="h-4 w-4 text-neutral-500" />,
    },
];
