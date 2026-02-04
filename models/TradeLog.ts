import { Schema, model, models } from "mongoose";

const TradeLogSchema = new Schema(
  {
    signalId: { type: String, default: "" },
    symbol: { type: String, required: true },
    action: { type: String, required: true },
    ok: { type: Boolean, required: true },
    message: { type: String, default: "" },
    ticket: { type: String, default: "" },
  },
  { timestamps: true }
);

export const TradeLog = models.TradeLog || model("TradeLog", TradeLogSchema);
