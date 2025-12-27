export const INSTAGRAM_URL = "https://www.instagram.com/sapienslab3d/";

export const openURL = (url:string, type:string = "blank") => {
  window.open(url, type)
} 

export const openInstagram = () => openURL(INSTAGRAM_URL)