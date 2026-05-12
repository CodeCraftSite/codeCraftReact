const _url = import.meta.env.VITE_API;

const headerAPI = {
  getHeaderInfo: async () => {
    const res = await fetch(`${_url}/api/content/header`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default headerAPI;
