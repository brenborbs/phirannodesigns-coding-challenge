/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { CheckBox } from '../../form-elements';

export function CategoryFilterItem({ title, id }) {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter((c) => !!c) || [];
  const checked = collectionIds?.find((cId) => cId === id);
  const searchTerm = qs.s;

  const onClick = () => {
    const navigateTo = '/';

    // assign collectionIds to new Array
    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter((cId) => cId !== id)
        .map((cId) => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map((cId) => encodeURIComponent(cId));
    }
    if (newIds.length && !searchTerm) {
      // eslint-disable-next-line quotes
      navigate(`${navigateTo}?c=${newIds.join(',')}`)
    } else if(newIds.length && !!searchTerm) {
      navigate(`${navigateTo}?c=${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`)
    } else if(!newIds.length && !!searchTerm) {
      navigate(`${navigateTo}?s=${encodeURIComponent(searchTerm)}`)
    } else  {
      navigate(`${navigateTo}`)
    }
  };
  return (
    <div className="flex">
      <form onClick={onClick}>
        <CheckBox checked={checked}/>
        </form>
      <span className="ml-2">{title}</span>
    </div>
   
  );
}

CategoryFilterItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};



