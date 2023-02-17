import CategoryObj from "../models/CategoryObj";

const generateTopicString = (topicState: { categories: CategoryObj[] }) => {
  //Convert the array to lowercase string and remove whitespace
  const topicString = topicState.categories
    .filter((c: CategoryObj) => c.isActive)
    .map((c: CategoryObj) => c.value.toLowerCase())
    .toString()
    .replace(/\s+/g, "_").replace(/&/g, "and");

  return topicString;
};

export default generateTopicString;
