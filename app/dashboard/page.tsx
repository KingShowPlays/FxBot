"use client";

import { useEffect, useState } from "react";

type Action = "BUY" | "SELL" | "CLOSE" | "NONE";

export default function Dashboard() {
  const [symbol, setSymbol] = useState("EURUSD");
  const [lot, setLot] = useState(0.01);
  const [slPoints, setSlPoints] = useState(200);
  const [tpPoints, setTpPoints] = useState(300);
  const [expirySec, setExpirySec] = useState(60);
  const [status, setStatus] = useState("");

  async function send(action: Action) {
    setStatus("Sending...");

    const res = await fetch("/api/signals/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbol,
        action,
        lot,
        slPoints,
        tpPoints,
        validUntil: new Date(Date.now() + expirySec * 1000).toISOString(),
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      setStatus(`❌ ${data?.error ?? "Request failed"}`);
      return;
    }
    setStatus(`✅ Sent ${action} for ${symbol}`);
  }

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(""), 6000);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border bg-white p-6 space-y-5">
        <div>
          <h1 className="text-2xl font-semibold">MT5 Signal Dashboard</h1>
          <p className="text-sm text-gray-600">
            Click BUY/SELL/CLOSE. Your MT5 EA will poll and execute.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label className="space-y-1">
            <span className="text-sm">Symbol</span>
            <input
              className="w-full rounded-md border p-2"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm">Lot</span>
            <input
              className="w-full rounded-md border p-2"
              type="number"
              step="0.01"
              value={lot}
              onChange={(e) => setLot(Number(e.target.value))}
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm">SL (points)</span>
            <input
              className="w-full rounded-md border p-2"
              type="number"
              value={slPoints}
              onChange={(e) => setSlPoints(Number(e.target.value))}
            />
          </label>

          <label className="space-y-1">
            <span className="text-sm">TP (points)</span>
            <input
              className="w-full rounded-md border p-2"
              type="number"
              value={tpPoints}
              onChange={(e) => setTpPoints(Number(e.target.value))}
            />
          </label>

          <label className="space-y-1 col-span-2">
            <span className="text-sm">Signal expires in (seconds)</span>
            <input
              className="w-full rounded-md border p-2"
              type="number"
              value={expirySec}
              onChange={(e) => setExpirySec(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => send("BUY")}
          >
            BUY
          </button>
          <button
            className="rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => send("SELL")}
          >
            SELL
          </button>
          <button
            className="rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => send("CLOSE")}
          >
            CLOSE
          </button>
          <button
            className="rounded-md border px-4 py-2 hover:bg-gray-50"
            onClick={() => send("NONE")}
          >
            NONE
          </button>
        </div>

        {status ? (
          <div className="rounded-md bg-gray-100 p-3 text-sm">{status}</div>
        ) : null}

        <p className="text-xs text-gray-500">
          Use a demo account first. Add security before deploying.
        </p>
      </div>
    </div>
  );
}
