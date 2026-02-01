"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { redirectToComplaintPortal } from "./Utilz/redirectToComplaintPortal ";
import Image from "next/image";

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                        CP
                    </div> */}
                    <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                        <Image
                            src="/images/sheikGulzar.jpg.jpeg"
                            alt="Sheik Gulzar Ahmad"
                            width={40}
                            height={40}
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sheik Gulzar Ahmad (MPA Candidate)
                    </span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        About
                    </Link>

                    <Button size="sm" variant="black" onClick={redirectToComplaintPortal}>
                        Submit Complaint
                    </Button>
                </nav>
            </div>
        </header>
    );
};
