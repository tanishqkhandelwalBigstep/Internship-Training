import axios from 'axios';

export async function getGitHubData(username) {
  const profile = await axios.get(
    `https://api.github.com/users/${username}`
  );

  const repos = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return {
    profile: profile.data,
    repos: repos.data
  };
}