const fetchRedit = async (topic) => {
  const url = `https://www.reddit.com/r/${topic}.json`;
  const req = await fetch(url);
  const { data: { children } } = await req.json();
  return children;
}

export default fetchRedit;
