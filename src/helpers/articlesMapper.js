const mapper = arrayToMap =>
  arrayToMap.map(({ url: id, content: text, title }) => ({
    id,
    text,
    title,
  }));

export default mapper;
