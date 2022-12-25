export const getImageUrl = (img: string) => {
  return new URL(`../assets/${img}`, import.meta.url).toString();
};

export const dateFromStr = (str: string | undefined) => {
  if (str != null) {
    return new Date(str);
  } else {
    return new Date();
  }
};