export function imageUtil(imgUrl) {
  return new URL(imgUrl, import.meta.url).href;
}
