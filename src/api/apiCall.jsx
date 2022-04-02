export const getCharacters = async (
  url = "https://rickandmortyapi.com/api/character"
) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = async (name) => {
  try {
    const url = `https://rickandmortyapi.com/api/character?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
