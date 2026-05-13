const _url = import.meta.env.VITE_API;

const UiDataAPI = {
  getUiDataInfo: async () => {
    const res = await fetch(`${_url}/api/content/ui`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default UiDataAPI;
