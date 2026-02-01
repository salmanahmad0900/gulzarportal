"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";
import { Select } from "./ui/Select";
import { Card } from "./ui/Card";

export const ComplaintForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSuccess(true);
        // In a real app, you'd reset the form here
    };

    if (success) {
        return (
            <Card className="max-w-xl mx-auto text-center py-12">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Complaint Submitted</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Thank you for your feedback. We have received your complaint and will investigate it shortly.
                </p>
                <Button onClick={() => setSuccess(false)}>Submit Another</Button>
            </Card>
        );
    }

    return (
        <Card className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Submit a Complaint</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Please provide as much detail as possible so we can address your issue effectively.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <Input
                        name="title"
                        label="Title"
                        placeholder="Brief summary of the issue"
                        required
                    />
                    <Select
                        name="category"
                        label="Category"
                        options={[
                            { label: "Select a category", value: "" },
                            { label: "Service", value: "Service" },
                            { label: "Product", value: "Product" },
                            { label: "Support", value: "Support" },
                            { label: "Other", value: "Other" },
                        ]}
                        required
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Select
                        name="severity"
                        label="Severity"
                        options={[
                            { label: "Low", value: "Low" },
                            { label: "Medium", value: "Medium" },
                            { label: "High", value: "High" },
                        ]}
                    />
                    <Input
                        name="email"
                        type="email"
                        label="Contact Email"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <TextArea
                    name="description"
                    label="Description"
                    rows={5}
                    placeholder="Please describe the issue in detail..."
                    required
                />

                <div className="flex justify-end pt-4">
                    <Button type="submit" size="lg" isLoading={isSubmitting}>
                        Submit Complaint
                    </Button>
                </div>
            </form>
        </Card>
    );
};
