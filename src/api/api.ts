import { JiraResponse } from "../shared/types/types";
import { PROJECT } from "../config/config";
import { useState, useEffect } from "react";

export const useFetchJiraDetails = (_event: any, project: PROJECT) => {
  const [data, setData] = useState<JiraResponse | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let issuesToTrack: JiraResponse | null = null;
      try {
        const response = await fetch(
          `https://jira-tracker-server.onrender.com/${project}`
        );
        // console.log(`https://jira-tracker-server.onrender.com/${project}`)
        setLoading(true);
        // const response = await fetch(`http://localhost:5002/${project}`, {
        //   //cache: "force-cache",
        // });
        if (!response.ok) {
          setError(response.statusText);
        }
        const data = await response.json();
        issuesToTrack = data.data;
        console.log(issuesToTrack);

        // return issuesToTrack;
        setData(issuesToTrack);
        setError(null);
      } catch (error: any) {
        console.log(error);
        // return { error: error.message };
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [project]);

  return { data, loading, error };
};
