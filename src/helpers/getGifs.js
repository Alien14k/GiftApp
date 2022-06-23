export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=Kj2vLvNcvcPIn4buMOG89rYV9dYoeQmw&q=${category}&limit=5`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifs;
  };