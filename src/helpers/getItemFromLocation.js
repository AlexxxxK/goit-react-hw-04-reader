import queryString from "query-string";

const getItemFromLocation = location =>
  Number(queryString.parse(location.search).item);

export default getItemFromLocation;
