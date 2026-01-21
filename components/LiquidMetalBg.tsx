'use client';

interface LiquidMetalBgProps {
    children?: React.ReactNode;
    className?: string;
    opacity?: number;
}

export const LiquidMetalBg = ({
    children,
    className = "",
    opacity = 0.3
}: LiquidMetalBgProps) => {
    return (
        <div className={`${className}`}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ opacity }}
            >
                <source src="/liquid-metal.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    );
};
