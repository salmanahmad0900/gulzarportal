import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hoverEffect = false }) => {
    return (
        <div
            className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm ${hoverEffect ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:border-zinc-700" : ""
                } ${className}`}
        >
            {children}
        </div>
    );
};
