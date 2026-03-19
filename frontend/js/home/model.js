import { get } from "../../utility/utility.js";

export const Model = {
  async getReviews() {
    const reviews = await get("http://localhost:5000/reviews");

    return reviews.reviews;
  },
};
