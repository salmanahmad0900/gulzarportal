export interface Complaint {
    id: string;
    title: string;
    description: string;
    category: "Service" | "Product" | "Support" | "Other";
    severity: "Low" | "Medium" | "High";
    status: "Open" | "In Progress" | "Resolved";
    contactEmail: string;
    date: string;
}

export const initialComplaints: Complaint[] = [
    {
        id: "1",
        title: "Slow Internet Connection",
        description: "My internet speed has been significantly lower than what I'm paying for since last Tuesday. I cannot attend meetings.",
        category: "Service",
        severity: "High",
        status: "Open",
        contactEmail: "alex.doe@example.com",
        date: "2023-10-27",
    },
    {
        id: "2",
        title: "Damaged Package Delivery",
        description: "The package I received yesterday was crushed on one corner, and the contents are damaged.",
        category: "Product",
        severity: "Medium",
        status: "In Progress",
        contactEmail: "sarah.smith@example.com",
        date: "2023-10-25",
    },
    {
        id: "3",
        title: "Billing Error",
        description: "I was charged twice for the same subscription this month.",
        category: "Support",
        severity: "High",
        status: "Resolved",
        contactEmail: "mike.jones@example.com",
        date: "2023-10-20",
    },
    {
        id: "4",
        title: "Feature Request for Dashboard",
        description: "It would be great to have a dark mode toggle on the main dashboard.",
        category: "Other",
        severity: "Low",
        status: "Open",
        contactEmail: "emily.white@example.com",
        date: "2023-10-28",
    },
];
