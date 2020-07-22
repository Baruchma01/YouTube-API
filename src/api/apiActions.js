
const search = (videosList, searchkey) => {
  const videos = videosList.filter((item) => item.snippet.title.toLowerCase().includes(searchkey.toLowerCase()));
  return videos
}


export {
  search
}