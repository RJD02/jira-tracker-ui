import { useGetProjectsFromCreds } from "@/hooks/jira-hook";
import { ProjectContext, ProjectType } from "@/store/Projects";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCallback, useContext } from "react";
import * as Yup from "yup";
import { useState } from "react";
// import { useGetProjectsFromCreds } from '@/hooks/jira-hook';

// Validation schema
const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required("Project selection is required"),
  description: Yup.string().max(
    500,
    "Description must be at most 500 characters"
  ),
});

// interface Project {
//   id: string;
//   name: string;
//   key: string;
// }

// Sample project list
// const projectList: Project[] = [
//   { id: "web-app", name: "Web Application Redesign", key: "WA" },
//   { id: "mobile-app", name: "Mobile App Development", key: "MA" },
//   { id: "data-migration", name: "Database Migration", key: "DM" },
//   { id: "ux-research", name: "UX Research Project", key: "UX" },
// ];

const ProjectDropdownForm = () => {
  //   const [projects, setProjects] = useState<ProjectType | null | undefined>(
  //     null
  //   );
  const initialValues = {
    projectName: "",
    priority: "",
    description: "",
  };

  const projCtx = useContext(ProjectContext);

  //   const getProjects = useGetProjectsFromCreds();

  //   const projects = getProjects("https://jira.com", "token", "email");

  // const getAllProjects = useGetProjectsFromCreds()
  console.log(projCtx?.projects);

  const handleSubmit = (values: any, { setSubmitting, resetForm }) => {
    // Simulate API call or processing
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Project Selection Form
        </h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={ProjectSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="p-6 space-y-4">
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Project
              </label>
              <Field name="projectName">
                {({ field, meta }) => (
                  <select
                    {...field}
                    onChange={(e) =>
                      setFieldValue("projectName", e.target.value)
                    }
                    className={`
                      w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2
                      ${
                        meta.touched && meta.error
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      }
                    `}
                  >
                    <option value="">Choose a project</option>
                    {projCtx?.projects?.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <ErrorMessage
                name="projectName"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Description
              </label>
              <Field
                as="textarea"
                name="description"
                className={`
                  w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2
                  border-gray-300 focus:ring-blue-500 focus:border-blue-500
                `}
                placeholder="Optional project description"
                rows="4"
                maxLength={500}
              />
              <div className="flex justify-between">
                <ErrorMessage
                  name="description"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  {values.description.length}/500 characters
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-300
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              `}
            >
              {isSubmitting ? "Submitting..." : "Submit Project"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectDropdownForm;
