import { ComplaintForm } from "../../components/ComplaintForm";

export default function SubmitComplaintPage() {
    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">New Complaint</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    File a new complaint ticket and track its status.
                </p>
            </div>
            <ComplaintForm />
        </div>
    );
}
