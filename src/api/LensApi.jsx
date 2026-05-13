const _url = import.meta.env.VITE_API;

const lensDataAPI = {
  getLensInfo: async () => {
    const res = await fetch(`${_url}/api/content/lens`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default lensDataAPI;
