import unfetch from 'isomorphic-unfetch';

const fetch = async (input: RequestInfo, init?: RequestInit) => {
  const res = await unfetch(input, init);

  if (!res.ok) throw Error(res.statusText);
  return res.json();
};

export default fetch;
