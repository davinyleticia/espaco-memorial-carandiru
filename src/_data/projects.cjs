const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const username = "davinyleticia";

  try {
    const repos = await EleventyFetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        duration: "1h",
        type: "json",
        fetchOptions: {
          headers: {
            Accept: "application/vnd.github+json"
          }
        }
      }
    );

    if (!Array.isArray(repos)) {
      console.log("Erro GitHub:", repos);
      return [];
    }

    return repos
      .filter(repo => 
        !repo.fork &&
        repo.topics &&
        repo.topics.includes("projects")
      )
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language
      }))
      .sort((a, b) => b.stars - a.stars);

  } catch (error) {
    console.error("Erro ao buscar GitHub:", error);
    return [];
  }
}