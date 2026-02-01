import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", id, ...props }) => {
    const inputId = id || props.name || Math.random().toString(36).substr(2, 9);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`w-full rounded-lg border bg-white px-4 py-2 text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-zinc-900 dark:text-white dark:focus:border-blue-500 ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300"
                    } ${className}`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};
