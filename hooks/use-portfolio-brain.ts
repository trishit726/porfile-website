import { useState, useCallback } from 'react';

interface BrainResponse {
    content: string;
    source: 'MOCK_NANO' | 'MOCK_CLOUD';
    latency: number;
}

export function usePortfolioBrain() {
    const [isProcessing, setIsProcessing] = useState(false);

    const queryBrain = useCallback(async (prompt: string): Promise<BrainResponse> => {
        setIsProcessing(true);
        const start = performance.now();

        // Simulate Network/Processing Delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsProcessing(false);

        // Return dummy data based on keywords
        if (prompt.toLowerCase().includes('projects')) {
            return {
                content: "Showing top projects: Starshield, Drone Swarm, and Zynd.",
                source: 'MOCK_NANO',
                latency: performance.now() - start
            };
        }

        return {
            content: "I can help you explore projects, skills, and experience.",
            source: 'MOCK_NANO',
            latency: performance.now() - start,
        };
    }, []);

    return { queryBrain, isProcessing };
}
