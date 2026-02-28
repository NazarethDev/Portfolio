import axios from "axios";

import { GITHUB_BASE_URL_ALL_REPOS_LIST, GITHUB_BASE_URL_ONE_REPO } from "../config/appURLs"

export const gitHubService = async (repoName = "", isOneRepo = false) => {
    if (isOneRepo) {
        const url = `${GITHUB_BASE_URL_ONE_REPO}${repoName}/readme`;

        console.log("Debug - URL Gerada:", url);

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Erro Axios no endpoint:", url, error);
            throw error;
        }
    } else {
        try {
            const response = await axios.get(GITHUB_BASE_URL_ALL_REPOS_LIST);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};