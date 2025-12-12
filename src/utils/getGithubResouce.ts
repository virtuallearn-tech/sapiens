export const GIT_REPOSITORIES = {
  IMAGES: "sapiens-images-resources",
  ANIMAL_KINGDOM: "sapiens-animal-kingdom-models",
  HUMAN_ANATOMY: "sapiens-human-anatomy-models",
  CYTOLOGY: "sapiens-models"
} as const;

export const getGithubResource = (
  repo:string, 
  file:string, 
  user:string = "virtuallearn-tech") => {
  return `https://raw.githubusercontent.com/${user}/${repo}/master/${file}`;
}