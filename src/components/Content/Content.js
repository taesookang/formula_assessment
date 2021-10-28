import React, { useState, useEffect } from "react";
import axios from "axios";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const apiUrl = "https://dev-assessment.netlify.app/.netlify/functions/me";

// Create new axios with configurations
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const Content = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const result = await authAxios.get(`${apiUrl}`, {
          crossDomain: true,
        });
        setUser(result.data.name);
      } catch (error) {
        console.log(`!REQUEST FAILED! \n ${error}`);
      }
      setIsLoading(false);
    };

    getUser();
  }, []);

  switch (isLoading) {
    case true:
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );

    default:
      return (
        <div>
          <h1>Welcome back</h1>
          <h1 style={{ color: "#73CDFF" }}>{user}</h1>
        </div>
      );
  }
};

export default Content;
