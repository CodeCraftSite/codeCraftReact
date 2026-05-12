const _url = import.meta.env.VITE_API;

const mainContentAPI = {
  getMain: async () => {
    const res = await fetch(`${_url}/api/content
        `);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },

  getHero: async () => {
    const res = await fetch(`${_url}/api/content/hero`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default mainContentAPI;
