import { urls } from "./config";

export async function requestFoodItems() {
  return await fetch(urls.foodItems.getAll);
}
