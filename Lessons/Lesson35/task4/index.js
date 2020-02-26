export const parseUser = (jsonString) => {
  try {
      return JSON.parse(jsonString);

  }
  catch {
      return null;
  }
}