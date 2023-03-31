import React from 'react';
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";
export const Home = (props) => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact/").then((res) => res.data)
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>Homepage <p>{data.fact}</p> </h1>
      <button onClick={refetch}> Update Data </button>
    </div>
  );
};
