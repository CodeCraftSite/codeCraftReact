const _url = import.meta.env.VITE_API;

const contactAPI = {
  getContactInfo: async () => {
    const res = await fetch(`${_url}/api/content/contact`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};

export default contactAPI;
