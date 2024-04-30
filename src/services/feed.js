const { ObjectId } = require("mongodb");
const { getCollection } = require("../utils/dbCon");

const fetchPost = async ({ userId }) => {
  try {
    const post = await getCollection("posts");
   const aggregationPipeline = [
  {
    $lookup: {
      from: "likes",
      let: { postId: "$_id", userId: new ObjectId(userId) },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$postId", "$$postId"] }, // Corrected to use $$postId
                { $eq: ["$userId", "$$userId"] }, // Corrected to use $$userId
              ],
            },
          },
        },
        {
          $project: {
            _id: 0,
            isLiked: { $literal: true },
            userId: "$$userId",
          },
        },
      ],
      as: "likesInfo",
    },
  },
  {
    $project: {
      _id: 1,
      title: 1,
      description: 1,
      isLiked: {
        $cond: {
          if: { $gt: [{ $size: "$likesInfo" }, 0] },
          then: true,
          else: false,
        },
      },
    },
  },
];



    const postData = await post.aggregate(aggregationPipeline).toArray();
    return postData;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchPost };
