export const backendUrl = "http://127.0.0.1";
export const backendPort = 8000;

const resources = {
  foodItems: "/fooditems",
};

export const urls = {
  foodItems: {
    getAll: `${backendUrl}:${backendPort}${resources.foodItems}`,
  },
};
