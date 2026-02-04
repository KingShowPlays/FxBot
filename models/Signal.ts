import { Schema, model, models } from "mongoose";

const SignalSchema = new Schema(
  {
    symbol: { type: String, required: true, uppercase: true, trim: true },
    action: {
      type: String,
      required: true,
      enum: ["BUY", "SELL", "CLOSE", "NONE"],
    },
    lot: { type: Number, default: 0.01, min: 0 },
    slPoints: { type: Number, default: 0, min: 0 },
    tpPoints: { type: Number, default: 0, min: 0 },
    comment: { type: String, default: "" },
    validUntil: { type: Date, required: true },
    status: {
      type: String,
      default: "PENDING",
      enum: ["PENDING", "EXECUTED", "EXPIRED"],
    },
  },
  { timestamps: true }
);

export const Signal = models.Signal || model("Signal", SignalSchema);
