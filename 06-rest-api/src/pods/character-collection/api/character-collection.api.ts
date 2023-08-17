import { CharacterEntityApi } from './character-collection.api-model';

let url = "https://rickandmortyapi.com/api/character"

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // FETCH CON PROMESAS
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results)
      return data.results
    })
    .catch((error) => {
      console.log(error)
      throw Error(error)
    })
}

