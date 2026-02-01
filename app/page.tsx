import Link from "next/link";
import { Button } from "../components/ui/Button";
import { redirectToComplaintPortal } from "@/components/Utilz/redirectToComplaintPortal ";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-20"> */}
      <section className="relative overflow-hidden rounded-2xl bg-[#ebf2ff] px-6 py-12 text-center text-gray-900 shadow-xl sm:px-12 sm:py-20">

        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            We Value Your Feedback
          </h1>
          {/* <p className="mb-8 text-lg text-blue-100 sm:text-xl leading-relaxed"> */}
          <p className="mb-8 text-lg text-gray-600 sm:text-xl leading-relaxed">

            Help us improve our services by submitting your complaints or suggestions.
            We are committed to resolving issues promptly and transparently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/submit">
              <Button
                size="lg"
                variant="white"
                // className="w-full sm:w-auto text-blue-700 hover:bg-blue-100 border border-blue-200"
                onClick={redirectToComplaintPortal}
              >
                Submit a Complaint
              </Button>
            </Link>
            <Button size="lg" variant="white" >
              Learn More
            </Button>
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-3xl" />
      </section>

      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Building Trust Through <span className="text-blue-600">Transparency</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our Complaint Portal is dedicated to bridging the gap between users and service providers.
            We believe that every voice matters and that efficient problem-solving is the key to
            long-term success.
          </p>
          <ul className="space-y-4">
            {[
              "24/7 dedicated support team monitoring",
              "Real-time tracking of complaint status",
              "Guaranteed response within 24 hours",
              "Data-driven insights for service improvement"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Resolution Rate</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24h</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Average Response</div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5k+</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-zinc-900 dark:ring-zinc-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">120+</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Support Agents</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
