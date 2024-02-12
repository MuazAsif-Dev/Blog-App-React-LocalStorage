const useFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default useFetch;
