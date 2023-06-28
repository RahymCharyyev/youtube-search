export const getLocalStorage = (key: string) => {
  const localData = String(localStorage.getItem(key));
  const parsedData = JSON.parse(localData);
  return parsedData;
};
