import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import Error from '../Error';

class YelpCategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], loading: false };
  }

  componentDidMount() {
    this.setState({ loading: true }, this.getCategories);
  }

  getCategories = () => {
    fetch(
      'https://cryptic-headland-94862.herokuapp.com/https://api.yelp.com/v3/categories??locale=en_US',
      {
        headers: {
          authorization:
            'Bearer B0_o-WOtonclsraT47gpBMjFd_jGrcgkYkl6O74pf4ETwW_GBcfXgSdCbXjffWEsF2gYeFA54QnyG3sKi48covsP2qsu5wrBivNEHNqdUaS1rGcScv0Es8a8OXY_W3Yx',
        },
      },
    )
      .then(res => res.json())
      .then(json => this.formatCategories(json));
  };

  formatCategories = ({ categories }) => {
    const categoriesToSet = [];
    const filteredCategories = categories.filter(category =>
      category.parent_aliases.includes('restaurants'),
    );
    filteredCategories.forEach(category =>
      categoriesToSet.push({ key: category.alias, text: category.title, value: category.alias }),
    );
    this.setState({ categories: categoriesToSet, loading: false });
  };

  handleChange = (e, data) => {
    this.props.getYelpResults(data.value);
  };

  showBusiness = (e, data) => {};

  render() {
    {
      if (this.state.loading === false) {
        return (
          <Dropdown
            placeholder="Select a Category"
            fluid
            search
            selection
            options={this.state.categories}
            onChange={this.handleChange}
          />
        );
      } else {
        return <Dropdown text="Categories" options={this.state.categories} loading />;
      }
    }
  }
}

export default YelpCategoryFilter;