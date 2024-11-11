import { useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { useProjects } from "@/hooks/project-hook";
import Logout from "../Login/Logout.tsx";

interface HeaderProps {
    activeProject: string | null;
    onClick: (project: string) => void;
}

export function Header({
    activeProject,
    onClick: setActiveProject,
}: HeaderProps) {
    const { loading, projects } = useProjects();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (!activeProject && !loading) {
            if (projects && projects.length > 0) setActiveProject(projects[0].id);
        }
    }, [loading]);

    const links = projects;
    if (loading) return <div>Loading...</div>;

    return (
        <header className="bg-background border-b border-border">
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Jira Tracker App</h1>
                    <div className="flex items-center gap-2">
                        {links.slice(0, 2).map((link, index) => (
                            <button
                                key={link.id}
                                onClick={() => setActiveProject(link.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeProject === link.id
                                    ? "bg-blue-100 text-blue-800"
                                    : index === 0
                                        ? "bg-teal-100 text-teal-600"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}

                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center"
                            >
                                More <ChevronDownIcon className="w-4 h-4 ml-1" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                    {links.slice(2).map((link) => (
                                        <button
                                            key={link.id}
                                            onClick={() => {
                                                setActiveProject(link.id);
                                                setIsDropdownOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                    <Logout />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* </nav> */}
                </div>
                <div className="hidden md:flex items-center space-x-4"></div>
            </div>
        </header>
    );
}
