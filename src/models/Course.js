const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    publisher: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    courseURL: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    tags: {
      type: [String],
    },
    recommendCount: {
      type: Number,
      default: 0,
    },
    recommendedBy: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

courseSchema.virtual("review", {
  ref: "Review",
  localField: "_id",
  foreignField: "courseId",
});

module.exports = mongoose.model("Course", courseSchema);
