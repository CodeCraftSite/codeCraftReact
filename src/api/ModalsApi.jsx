const _url = import.meta.env.VITE_API;

const modalsDataAPI = {
  getModalsInfo: async () => {
    const res = await fetch(`${_url}/api/content/modals`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default modalsDataAPI;
