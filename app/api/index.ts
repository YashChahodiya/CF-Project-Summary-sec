import axios from "axios";

export const fetchProjectData = async () => {
  try {
    const formData = new FormData();
    formData.append("op", "get_project_detail");
    formData.append("project_id", "147534");
    formData.append("is_refresh", "0");
    formData.append("record_type", "project");
    formData.append("version", "web");
    formData.append("from", "panel");
    formData.append("iframe_call", "0");
    formData.append("tz", "+5:30");
    formData.append("tzid", "Asia/Calcutta");
    formData.append("curr_time", "2024-08-31 15:50:38");
    formData.append("force_login", "0");
    formData.append("global_project", "");
    formData.append("user_id", "109871");
    formData.append("company_id", "829");

    const response = await axios.post(
      "https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=829&u=109871&p=manage_projects",
      formData
    );

    // Return the data fetched from the API
    return response.data.data ?? [];
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};
