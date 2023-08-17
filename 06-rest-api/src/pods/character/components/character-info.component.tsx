import React from 'react';
import { Character } from '../character.vm';
import { Avatar, Grid, Typography } from '@mui/material';

interface Props {
  character: Character;
}

export const CharacterInfo: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar
            alt={`${character.name}`}
            src={`${character.image}`}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {`${character.name}`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`${character.gender}`}
              </Typography>
              <Typography variant="body2" gutterBottom color="text.secondary">
                {`${character.status}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {`${character.species}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
