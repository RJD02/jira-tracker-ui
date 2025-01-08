import { FormEvent, useState } from "react";

interface FormValues {
    email: string,
    token: string,
    project: string | null
}

export const SeeProjects = (props: {}) => {
    console.log(props)
    const [projects, setProjects] = useState<{ id: string; name: string }[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true)
        try {
            // Example GraphQL query - replace with your actual endpoint and query
            const response = await fetch('/api/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
            query GetProjects($email: String!, $token: String!) {
              projects(email: $email, token: $token) {
                id
                name
              }
            }
          `,
                    variables: {
                        email: data.email,
                        token: data.token,
                    },
                }),
            })

            const result = await response.json()
            setProjects(result.data.projects)
        } catch (error) {
            console.error('Error fetching projects:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>, fn: (data: FormValues) => {}) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const email = formData.get('email') as string
        const token = formData.get('token') as string
        const project = formData.get('project') as string
        if (!email || !token || !project) {
            console.log('Fill the unfilled details')
            return
        }
        const formValues: FormValues = {
            email,
            token,
            project
        }
        fn(formValues)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Jira Tracker App</h2>
                <p className="text-sm text-gray-600 mb-6">Enter your Jira credentials to fetch projects</p>
                <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Jira Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your Jira email"
                        />
                        {/* errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> */}
                    </div>
                    <div>
                        <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
                            Access Token
                        </label>
                        <input
                            id="token"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your access token"
                        />
                        {/* errors.token && <p className="mt-1 text-xs text-red-600">{errors.token.message}</p> */}
                    </div>
                    {projects.length > 0 && (
                        <div>
                            <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Project
                            </label>
                            <select
                                id="project"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select a project</option>
                                {projects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Loading...
                            </span>
                        ) : (
                            projects.length > 0 ? 'Update Projects' : 'Fetch Projects'
                        )}
                    </button>
                </form>
            </div>
        </div>
    )



}
