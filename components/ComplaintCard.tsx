import React from "react";
import { Card } from "./ui/Card";
import { Complaint } from "../data/complaints";

interface ComplaintCardProps {
    complaint: Complaint;
}

export const ComplaintCard: React.FC<ComplaintCardProps> = ({ complaint }) => {
    const statusColors = {
        Open: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        Resolved: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
    };

    const severityColors = {
        Low: "bg-gray-100 text-gray-600 dark:bg-gray-800/50 dark:text-gray-400",
        Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    };

    const severityGradients = {
        Low: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800",
        Medium: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/40 dark:to-zinc-900",
        High: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-zinc-900",
    };

    return (
        <Card
            hoverEffect
            className={`flex h-full flex-col justify-between ${severityGradients[complaint.severity]}`}
        >
            <div>
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                        <span
                            className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${severityColors[complaint.severity]}`}
                        >
                            {complaint.severity} Severity
                        </span>
                        <span className="text-xs text-gray-400">{complaint.category}</span>
                    </div>

                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[complaint.status]}`}
                    >
                        {complaint.status}
                    </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                    {complaint.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {complaint.description}
                </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/5">
                <span className="text-xs text-gray-400">ID: {complaint.id}</span>
                <span className="text-xs text-gray-500">
                    {new Date(complaint.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>
            </div>
        </Card>
    );
};
