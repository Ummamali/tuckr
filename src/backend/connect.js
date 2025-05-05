import { urls } from "./config";

export async function requestFoodItems() {
  return await fetch(urls.foodItems.getAll);
}

export async function requestCreateOrder(orderObj) {
  return await fetch(urls.orders.post, {
    method: "POST",
    body: JSON.stringify(orderObj),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
