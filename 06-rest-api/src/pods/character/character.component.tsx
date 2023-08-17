import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { CharacterInfo } from './components/character-info.component';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <>
     <CharacterInfo character={character}></CharacterInfo>
     <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="bestSentences"
            label="Best Sentences"
            multiline={true}
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
    </>
  );
};

