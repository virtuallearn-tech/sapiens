export const GIT_REPOSITORIES = {
  GITHUB_RAW_BASE : "https://raw.githubusercontent.com/virtuallearn-tech/sapiens-science-abstracts/master",
  IMAGES: "sapiens-images-resources",
  ANIMAL_KINGDOM: "sapiens-animal-kingdom-models",
  HUMAN_ANATOMY: "sapiens-human-anatomy-models",
  CYTOLOGY: "sapiens-models",
  RESUMES: "sapiens-science-abstracts"
} as const;

export const getGithubResource = (
  repo:string, 
  file:string, 
  user:string = "virtuallearn-tech") => {
  return `https://raw.githubusercontent.com/${user}/${repo}/master/${file}`;
}