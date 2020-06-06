import { useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://graphql-geopins.herokuapp.com/graphql"
    : "https://graphql-geopins.herokuapp.com/graphql";

export const useClient = () => {
  const [idToken, setIdToken] = useState("");

  useEffect(() => {
    const token = window.gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .getAuthResponse().id_token;

    setIdToken(token);
  }, []);

  return new GraphQLClient(BASE_URL, {
    headers: {
      authorization: idToken,
    },
  });
};
