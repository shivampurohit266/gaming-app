"use client";
import { useEffect, useState } from "react";
import BlogPage from "../components/Blog";

export default function Home() {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setAuthToken(token);
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return <></>;

  const isLoggedIn = !!authToken;

  return (
    <div>
      <BlogPage />
    </div>
  );
}
