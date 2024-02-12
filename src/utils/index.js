const sortArrByDate = (arr, setItem) => {
  const currDate = new Date().toUTCString();
  const sortedArr = [...arr].sort((a, b) => {
    const diffA = Math.abs(
      new Date(a.createdAt).getTime() - new Date(currDate).getTime()
    );
    const diffB = Math.abs(
      new Date(b.createdAt).getTime() - new Date(currDate).getTime()
    );
    return diffA - diffB;
  });

  setItem(sortedArr);
};

export { sortArrByDate };
