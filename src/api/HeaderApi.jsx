const _url = import.meta.env.VITE_API;

const headerAPI = {
  getName: async () => {
    return fetch(`${_url}/api/texts`).then((r) => r.json());
  },
};

export default headerAPI;
