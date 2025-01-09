import {
  useCreateUsers,
  useGetJiraUsers,
  useGetProjectsFromCreds,
} from "@/hooks/jira-hook";
import { ProjectContext } from "@/store/Projects";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const SearchSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required"),
  selectedOption: Yup.string().required("Please select an option"),
});
// {
//   value: {
//     account_id: string | undefined;
//     active: boolean | undefined;
//     displayName: string | undefined;
//     emailAddress: string | undefined;
//   };
//   label: string;
// }[]
const SelectUserForm = () => {
  const [dropdownOptions, setDropdownOptions] = useState<any[]>([]);
  const [isDropdownEnabled, setIsDropdownEnabled] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const projCtx = useContext(ProjectContext);
  const getUsers = useGetJiraUsers();
  const createUser = useCreateUsers();
  const navigate = useNavigate();

  const handleSubmit = async (values: any, { setSubmitting, resetForm }) => {
    // setSelectedUsers([...selectedUsers, values.selectedOption]);
    const user = dropdownOptions.find(
      (option) => option.label === values.selectedOption
    );
    console.log(user);
    const result = await createUser(
      user?.value?.account_id || "",
      user?.value?.displayName || "",
      projCtx?.projectId || "",
      "developer"
    );
    console.log(
      result?.data?.jiraUserData.message,
      result?.data?.jiraUserData.success
    );
    setSelectedUsers([...selectedUsers, values.selectedOption]);
    setSubmitting(false);
    resetForm();
  };

  const handleSearch = async (searchTerm: string) => {
    if (!projCtx) {
      console.log("Context is undefined");
      return;
    }

    const options = await getUsers(
      projCtx.baseUrl || "",
      projCtx.token || "",
      projCtx.email || "",
      searchTerm
    );
    const userOptions =
      options?.data?.getUsers?.map((user, idx) => {
        return {
          value: user,
          label: user?.displayName || "",
        };
      }) || [];
    console.log("userOptions", userOptions);

    // setDropdownOptions(userOptions);

    setDropdownOptions(userOptions);
    setIsDropdownEnabled(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          User Selection Form
        </h2>
      </div>

      <Formik
        initialValues={{ searchTerm: "", selectedOption: "" }}
        validationSchema={SearchSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="space-y-4">
            {/* Search Term Field */}
            <div>
              <label
                htmlFor="searchTerm"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search Term
              </label>
              <Field
                name="searchTerm"
                placeholder="Enter search term"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="searchTerm"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Search Button */}
            <button
              type="button"
              onClick={() => handleSearch(values.searchTerm)}
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 text-black font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>

            {/* Dropdown Field */}
            <div>
              <label
                htmlFor="selectedOption"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Option
              </label>
              <Field
                as="select"
                name="selectedOption"
                disabled={!isDropdownEnabled}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                  isDropdownEnabled
                    ? "focus:ring-2 focus:ring-blue-500"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
              >
                <option value="">Choose an option</option>
                {dropdownOptions.map((option, idx) => (
                  <option key={idx} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="selectedOption"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md font-medium ${
                !isDropdownEnabled
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }`}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <button>Add these users</button>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Selected Users</h3>
        {selectedUsers.length > 0 ? (
          <ul className="space-y-2">
            {selectedUsers.map((user, userId) => {
              //   const user = .find((u) => u.id === userId);
              return (
                <li
                  key={userId}
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg shadow-sm"
                >
                  <span className="text-gray-800 font-medium">{user}</span>
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => console.log(userId)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No users selected.</p>
        )}
      </div>
    </div>
  );
};

export default SelectUserForm;
