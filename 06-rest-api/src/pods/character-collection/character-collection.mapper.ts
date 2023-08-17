import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character: apiModel.CharacterEntityApi): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentences: character.bestSentences
});
