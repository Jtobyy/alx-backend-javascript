export default function loadBalancer(chinaDownload, USDownload) {
  const myPromise = Promise.any([chinaDownload, USDownload])
    .then((value) => value);
  return myPromise;
}
