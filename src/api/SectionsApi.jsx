const _url = import.meta.env.VITE_API;

const sectionsDataAPI = {
  getModalsInfo: async () => {
    const res = await fetch(`${_url}/api/content/sections/portfolio`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default sectionsDataAPI;
