import axios from 'axios';
import { Character } from './character.api-model';

// let url = "https://rickandmortyapi.com/api/character"
const url = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  // FETCH CON PROMESAS
  return fetch(`${url}/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error('Character not found');
    }
  });
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  // AXIOS
  if (character.id) {
    // console.log(character)
    axios.put(`${url}/${character.id}`, character); // Con Axios se introduce directamente la entidad character sin transformar y no hay que indicar el tipo del cuerpo
  } else {
    axios.post(`${url}`, character);
  }
  return true;
};
