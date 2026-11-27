import { get } from "../../utility/utility.js";

export const Model = {
  async getReviews() {
    const reviews = await get("https://solvebox.onrender.com/reviews");

    return reviews.reviews;
  },
};
