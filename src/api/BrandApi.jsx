const _url = import.meta.env.VITE_API;

const brandAPI = {
  getBrand: async () => {
    const res = await fetch(`${_url}/api/content/brand`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default brandAPI;
