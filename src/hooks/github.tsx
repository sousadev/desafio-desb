import { useEffect, useState } from "react";
import api from "../services/api";

export const useGithub = () => {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await api.get("/users/sousadev");
                setUser(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await api.get("/users/sousadev/repos");
                setRepos(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    const searchUser = async (username: string) => {
        setLoading(true);
        setError("");
        try {
            const response = await api.get(`/users/${username}`);
            setUser(response.data);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { user, repos, loading, error, searchUser };
};