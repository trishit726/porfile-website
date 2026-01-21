import { GlassPanel } from './glass-ui/GlassPanel';

interface GitHubStatsProps {
    username: string;
}

export const GitHubStats = ({ username }: GitHubStatsProps) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-cyan-400">//</span> GitHub Activity
            </h2>
            <GlassPanel className="p-6" intensity="medium">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    {/* GitHub Stats Card */}
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&icon_color=22d3ee&text_color=9ca3af&bg_color=00000000`}
                        alt="GitHub Stats"
                        className="max-w-full"
                    />
                    {/* GitHub Streak */}
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=9ca3af&currStreakNum=ffffff&sideNums=ffffff&dates=6b7280&background=00000000`}
                        alt="GitHub Streak"
                        className="max-w-full"
                    />
                </div>
            </GlassPanel>
        </div>
    );
};
