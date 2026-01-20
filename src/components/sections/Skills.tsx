import { DecryptedText } from "../ui/bits/DecryptedText";

import { MagicCard } from "../ui/magic/MagicCard";

const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => (
    <div className="h-full">
        <MagicCard className="w-full h-full p-6 flex flex-col" gradientColor="rgba(245, 158, 11, 0.1)">
            <h3 className="text-amber-500 font-mono uppercase tracking-widest text-xs mb-4 relative z-10">{title}</h3>
            <div className="flex flex-wrap gap-2 relative z-10">
                {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-neutral-300 border border-white/5 hover:bg-white/10 transition-colors">
                        {skill}
                    </span>
                ))}
            </div>
        </MagicCard>
    </div>
);

export const Skills = () => {
    return (
        <section id="skills" className="w-full mb-32 relative z-10">
            <h2 className="text-2xl text-white font-display italic mb-16 border-b border-white/5 pb-2">
                <DecryptedText text="Technical Arsenal" animateOn="view" revealDirection="start" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SkillCategory
                    title="Languages"
                    skills={["Python", "Java", "Kotlin", "Dart", "JavaScript", "TypeScript", "SQL"]}
                />
                <SkillCategory
                    title="Web & Mobile"
                    skills={["Next.js", "React.js", "Flutter", "Jetpack Compose", "Django", "Tailwind CSS"]}
                />
                <SkillCategory
                    title="Data & Architecture"
                    skills={["PostgreSQL", "TimescaleDB", "Firebase", "MySQL", "Time-series Optimization"]}
                />
                <SkillCategory
                    title="Infrastructure & Tools"
                    skills={["Docker", "AWS Bedrock", "Vercel", "Git", "LoRa"]}
                />
            </div>
        </section>
    );
};
