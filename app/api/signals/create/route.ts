import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Signal } from "@/models/Signal";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const symbol = String(body.symbol || "")
    .toUpperCase()
    .trim();
  const action = String(body.action || "")
    .toUpperCase()
    .trim();

  if (!symbol)
    return NextResponse.json(
      { ok: false, error: "symbol is required" },
      { status: 400 }
    );
  if (!["BUY", "SELL", "CLOSE", "NONE"].includes(action)) {
    return NextResponse.json(
      { ok: false, error: "invalid action" },
      { status: 400 }
    );
  }

  const lot = Number(body.lot ?? 0); // allow 0 => EA auto calculates
  const slPoints = Number(body.slPoints ?? 0);
  const tpPoints = Number(body.tpPoints ?? 0);

  // Enforce SL for entries
  if (
    (action === "BUY" || action === "SELL") &&
    (!Number.isFinite(slPoints) || slPoints <= 0)
  ) {
    return NextResponse.json(
      { ok: false, error: "Stop loss (slPoints) is required for BUY/SELL" },
      { status: 400 }
    );
  }

  const validUntil = body.validUntil
    ? new Date(body.validUntil)
    : new Date(Date.now() + 60_000);
  if (Number.isNaN(validUntil.getTime())) {
    return NextResponse.json(
      { ok: false, error: "invalid validUntil" },
      { status: 400 }
    );
  }

  const doc = await Signal.create({
    symbol,
    action,
    lot: Number.isFinite(lot) ? lot : 0,
    slPoints: Number.isFinite(slPoints) ? slPoints : 0,
    tpPoints: Number.isFinite(tpPoints) ? tpPoints : 0,
    comment: String(body.comment ?? ""),
    validUntil,
  });

  return NextResponse.json({ ok: true, signal: doc });
}
