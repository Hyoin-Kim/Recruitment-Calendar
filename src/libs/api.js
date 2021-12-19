import axios from "axios";

export const client = axios.create({
  baseURL: "https://frontend-assignments.s3.ap-northeast-2.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async () => {
  try {
    const data = await client.get("/job_postings.json");
    return data.data;
  } catch (e) {
    console.log("[Fail] Get data");
    return null;
  }
};
