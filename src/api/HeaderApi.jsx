const _url = import.meta.env.VITE_API;

const headerAPI = {
  getNameHeader: async () => {
    const res = await fetch(`${_url}/api/site-name`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },

  getDescriptionHeader: async () => {
    const res = await fetch(`${_url}/api/short-description`);
    if (!res.ok) throw new Error("Failed to fetch description");
    return res.json();
  },
};

export default headerAPI;
