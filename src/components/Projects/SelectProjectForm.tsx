import { useCreateProject, useGetProjectsFromCreds } from "@/hooks/jira-hook";
import { ProjectContext, ProjectType } from "@/store/Projects";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCallback, useContext } from "react";
import * as Yup from "yup";

// Validation schema
const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required("Project selection is required"),
  description: Yup.string().max(
    500,
    "Description must be at most 500 characters"
  ),
});

const SelectProjectForm = () => {
  const initialValues = {
    projectName: "",
    priority: "",
    description: "",
  };

  const projCtx = useContext(ProjectContext);

  const [createSiteUrl, createProject] = useCreateProject();

  //   const getProjects = useGetProjectsFromCreds();

  //   const projects = getProjects("https://jira.com", "token", "email");

  // const getAllProjects = useGetProjectsFromCreds()
  // console.log(projCtx?.projects);

  const handleSubmit = async (values: any, { setSubmitting, resetForm }) => {
    // Need logic for creating siteUrl and project

    try {
      console.log("base url", projCtx);
      const res = await createSiteUrl(projCtx?.baseUrl || "");
      const siteId = parseInt(res?.data.createSiteUrl.site_id);
      console.log("Site_id", siteId);
      // const projectId = values.projectName;
      // const label = projCtx?.projects.find(
      //   (proj) => proj.id === projectId
      // )?.key;
      // const baseUrl = projCtx?.baseUrl;
      // const email = projCtx?.email;
      // const token = projCtx?.token;
      // const project = await createProject(
      //   projectId,
      //   siteId,
      //   label || "",
      //   baseUrl || "",
      //   email || "",
      //   token || "",
      //   ""
      // );
      // console.log(project);
      // console.log(values);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
    // resetForm();

    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    //   resetForm();
    // }, 400);
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
                    {projCtx && projCtx?.projects.length > 0 ? (
                      projCtx?.projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>No projects found</option>
                    )}
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

            {/* <button
              type="submit"
              disabled={!isSubmitting}
              className={`
                w-full py-2 px-4 bg-black rounded-md text-white font-semibold transition-colors duration-300
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              `}
            >
              {isSubmitting ? "Submitting..." : "Submit Project"}
            </button> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
    w-full py-4 px-6 rounded-lg font-medium text-lg bg-gray-500
    transition-all duration-300 ease-in-out 
    ${
      isSubmitting
        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
    }
  `}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Submit Project"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SelectProjectForm;
