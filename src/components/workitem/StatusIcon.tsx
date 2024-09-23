import { Circle, CheckCircle2, AlertCircle, ArrowUpCircle } from "lucide-react";

export const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case "To Do":
            return <Circle className="h-4 w-4 text-gray-500" />;
        case "Done":
        case "Closed":
            return <CheckCircle2 className="h-4 w-4 text-green-500" />;
        case "Blocked":
            return <AlertCircle className="h-4 w-4 text-red-500" />;
        case "In Progress":
        default:
            return <ArrowUpCircle className="h-4 w-4 text-blue-500" />;
    }
};

export const statusColors: { [key: string]: string } = {
    "To Do": "bg-gray-500",
    "In Progress": "bg-blue-500",
    Done: "bg-green-500",
    Blocked: "bg-red-500",
};

