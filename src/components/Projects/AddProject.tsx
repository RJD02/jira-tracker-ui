import { useGetProjectsFromCreds } from "@/hooks/jira-hook";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { JiraProject } from "@/__generated__/graphql";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { ProjectContext } from "@/store/Projects";

export const AddProjectForm = () => {
  const [projects, setProjects] = useState<any>(null);

  const projectCtx = useContext(ProjectContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    accessToken: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    baseUrl: Yup.string().required("Base url is required"),
  });

  const initialValues = {
    email: "",
    accessToken: "",
    baseUrl: "",
    projectId: "",
  };

  const getProjects = useGetProjectsFromCreds();

  const navigate = useNavigate();

  const handleSubmit = async (
    values: { email: string; accessToken: string; baseUrl: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setSubmitting(true);
    try {
      const { loading, projects: allProjects } = await getProjects(
        values.baseUrl,
        values.accessToken,
        values.email
      );
      setProjects(allProjects);
      console.log(allProjects);
      if (allProjects.length === 0) {
        throw new Error("Invalid credentials");
      }
      toast.success("Verified credentials");
      setSubmitting(false);
      if (projectCtx) {
        projectCtx.projects = allProjects.map((proj) => {
          return {
            id: proj?.id || "",
            name: proj?.name || "",
            key: proj?.key || "",
          };
        });
        projectCtx.email = values.email;
        projectCtx.token = values.accessToken;
        projectCtx.username = values.email;
      }
      navigate("/projects");
    } catch (e) {
      console.log(e);
      toast.error("Credentials are not correct");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Project</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>
            {/* Base Url Field */}
            <div>
              <label
                htmlFor="baseUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Base Url
              </label>
              <Field
                id="baseUrl"
                name="baseUrl"
                type="text"
                placeholder="Enter your base url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="baseUrl"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Access Token Field */}
            <div>
              <label
                htmlFor="accessToken"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Access Token
              </label>
              <Field
                id="accessToken"
                name="accessToken"
                type="password"
                placeholder="Enter your access token"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="accessToken"
                component="p"
                className="mt-1 text-xs text-red-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

/*

                        <div>
                            <label htmlFor="projectId" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Project
                            </label>
                            <Field
                                as="select"
                                id="projectId"
                                name="projectId"
                                disabled={!projects || projects.length === 0} // Disable if no projects are fetched
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${!projects || projects.length === 0
                                    ? "bg-gray-200 cursor-not-allowed"
                                    : "bg-white"
                                    }`}
                            >
                                <option value="">Select a project</option>
                                {projects &&
                                    projects.map((project: any) => (
                                        <option key={project.id} value={project.id}>
                                            {project.name}
                                        </option>
                                    ))}
                            </Field>
                            <ErrorMessage name="projectId" component="p" className="mt-1 text-xs text-red-600" />
                        </div>

*/
