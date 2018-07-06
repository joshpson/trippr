import React from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';

const YelpHeader = props => (
  <Grid.Row>
    {console.log(props)}
    <Header as="h1">
      <Icon name="plane" />
      <Header.Content>
        What do you want to eat?
        <Header.Subheader>
          Enter a restaurant or cusine to get the best food near {props.location}
        </Header.Subheader>
      </Header.Content>
    </Header>
  </Grid.Row>
);

export default YelpHeader;
