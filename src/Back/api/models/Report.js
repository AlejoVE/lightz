const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    have_electricity: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: false }
);

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;