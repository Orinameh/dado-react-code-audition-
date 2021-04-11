import React from 'react';
import { useHistory } from 'react-router';

const FilterItem = ({filters}) => {
    const { push } = useHistory()
    return (
        <div className="home__filter">
        <p>Or pick one of these suggested repos</p>
        <div className="home__filter-item">
          {
            filters.map((filter, i) => 
            <button key={i} onClick={() => push(`commits/${filter.name.split('/').join('-')}`)}>
              {filter.name}
            </button>)
          }
          
        </div>
      </div>
    )
}

export default FilterItem;