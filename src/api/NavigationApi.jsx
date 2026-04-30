const _url = import.meta.env.VITE_API;

const navigationAPI = {
  getNavigation: async () => {
    const res = await fetch(`${_url}/api/content/navigation`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default navigationAPI;
