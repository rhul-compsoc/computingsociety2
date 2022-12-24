export const getImageUrl = (img: string) => {
  return new URL(`../assets/${img}`, import.meta.url).toString();
}
