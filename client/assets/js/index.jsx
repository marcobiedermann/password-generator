import {
  Card, CardContent, Checkbox, FormControlLabel, TextField,
} from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <Card>
    <CardContent>
      <form>
        <div>
          <TextField />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Numbers"
            value="numbers"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Symbols"
            value="symbols"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Uppercase"
            value="uppercase"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Exclude Similar Characters"
            value="excludeSimilarCharacters"
          />
        </div>
      </form>
    </CardContent>
  </Card>
);

render(<App />, document.getElementById('root'));
