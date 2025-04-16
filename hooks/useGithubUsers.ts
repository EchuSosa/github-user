import { useState, useEffect } from "react";

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export function useGithubUsers() {
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInitialUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();

      setUsers(data);
    } catch (err) {
      setError("Error al obtener los usuarios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchUsers = async (term: string) => {
    if (!term) return fetchInitialUsers();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/search/users?q=${term}`);
      const data = await res.json();

      setUsers(data.items ?? []);
    } catch (err) {
      setError("Error al buscar usuarios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialUsers();
  }, []);

  return {
    users,
    loading,
    error,
    searchUsers,
  };
}
