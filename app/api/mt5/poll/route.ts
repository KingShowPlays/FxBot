import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Signal } from "@/models/Signal";

export async function GET(req: Request) {
  await dbConnect();

  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token || token !== process.env.MT5_POLL_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 }
    );
  }

  const now = new Date();

  await Signal.updateMany(
    { status: "PENDING", validUntil: { $lte: now } },
    { $set: { status: "EXPIRED" } }
  );

  const signal = await Signal.findOne({
    status: "PENDING",
    validUntil: { $gt: now },
  }).sort({ createdAt: -1 });

  if (!signal) return NextResponse.json({ ok: true, action: "NONE" });

  return NextResponse.json({
    ok: true,
    id: String(signal._id),
    symbol: signal.symbol,
    action: signal.action,
    lot: signal.lot,
    slPoints: signal.slPoints,
    tpPoints: signal.tpPoints,
    comment: signal.comment,
  });
}
