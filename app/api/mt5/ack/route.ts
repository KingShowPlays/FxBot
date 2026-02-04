import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Signal } from "@/models/Signal";
import { TradeLog } from "@/models/TradeLog";

export async function POST(req: Request) {
  await dbConnect();

  const body = await req.json();
  const token = String(body.token || "");

  if (!token || token !== process.env.MT5_POLL_TOKEN) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 }
    );
  }

  const signalId = String(body.signalId || "");
  const ok = Boolean(body.ok);

  await TradeLog.create({
    signalId,
    symbol: String(body.symbol || ""),
    action: String(body.action || ""),
    ok,
    message: String(body.message || ""),
    ticket: String(body.ticket || ""),
  });

  if (ok && signalId) {
    await Signal.findByIdAndUpdate(signalId, { status: "EXECUTED" });
  }

  return NextResponse.json({ ok: true });
}
