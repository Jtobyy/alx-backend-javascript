export default function loadBalancer(chinaDownload, USDownload) {
  const myPromise = Promise.race([chinaDownload, USDownload])
    .then((value) => value);
  return myPromise;
}
