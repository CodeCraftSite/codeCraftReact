const _url = import.meta.env.VITE_API;

const ribbonAPI = {
  getRibbonInfo: async () => {
    const res = await fetch(`${_url}/api/content/ribbon`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default ribbonAPI;
