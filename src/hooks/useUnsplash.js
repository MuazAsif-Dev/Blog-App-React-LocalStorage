const useUnsplash = (query, setImages) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=4&client_id=${
    import.meta.env.VITE_UNSPLASH_API
  }`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const urls = data.results.map((obj) => {
        // Img Quality Options

        // full
        // raw
        // regular
        // small
        // small_s3
        // thumb

        const urlObj = {
          id: obj.id,
          url: obj.urls.regular,
        };

        return urlObj;
      });

      setImages(urls);
    });
};

export default useUnsplash;
