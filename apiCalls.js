export const fetchAllCenturies = () => {
  return fetch('https://api.harvardartmuseums.org/century?size=47&apikey=7416b440-5c9c-11ea-9401-ed9c8b78a90d')
    .then(res => {
      if (!res.ok) {
        throw Error('Error getting centuires')
      }
      return res.json();
    })
};

export const fetchObjectsFromCentury = century => {
  return fetch(`https://api.harvardartmuseums.org/object?century=${century}&size=30&apikey=7416b440-5c9c-11ea-9401-ed9c8b78a90d`)
    .then(res => {
      if (!res.ok) {
        throw Error('Error getting objects')
      }
      return res.json();
    })
};
