"use client";

import { useState } from "react";
import { allSkins } from "../data/allSkins";
import { Skin } from "../data/types";

type Result = {
  today: number;
  in7days: number;
  in30days: number;
  in90days: number;
  expectedDays: number;
};

export default function Home() {
  const [ownedIds, setOwnedIds] = useState<string[]>([]);
  const [targetId, setTargetId] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ★ 追加：検索用 state
  const [search, setSearch] = useState("");

  // ★ 追加：検索フィルタ
  const filteredSkins = allSkins.filter((skin) =>
    skin.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOwned = (id: string) => {
    setOwnedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleCalculate = () => {
    setError(null);
    setResult(null);

    if (!targetId) {
      setError("欲しいスキンを選択してください。");
      return;
    }

    if (ownedIds.includes(targetId)) {
      setError("欲しいスキンを所持済みです。");
      return;
    }

    const eligibleIds = allSkins
      .map((s) => s.id)
      .filter((id) => !ownedIds.includes(id));

    if (!eligibleIds.includes(targetId)) {
      setError("欲しいスキンが候補に含まれていません。");
      return;
    }

    const M = eligibleIds.length;
    if (M === 0) {
      setError("未所持スキンがありません。");
      return;
    }

    const pDay = Math.min(4 / M, 1);
    const probWithin = (days: number) => 1 - Math.pow(1 - pDay, days);

    setResult({
      today: pDay,
      in7days: probWithin(7),
      in30days: probWithin(30),
      in90days: probWithin(90),
      expectedDays: 1 / pDay,
    });
  };

  const formatPercent = (p: number) => `${(p * 100).toFixed(2)} %`;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6">
        <h1 className="text-2xl font-bold mb-4">
          VALORANT スキン出現確率計算ツール（全スキン版）
        </h1>

        {/* ★ 追加：検索バー */}
        <input
          type="text"
          placeholder="🔍 スキン名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full px-4 py-2 rounded-xl
            border border-slate-600 bg-slate-800 text-white
            placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500
            mb-6
          "
        />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 所持スキン */}
          <div className="border border-slate-700 rounded-lg p-4">
            <h2 className="font-semibold mb-2">所持スキン</h2>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {filteredSkins.map((skin) => (
                <label key={skin.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={ownedIds.includes(skin.id)}
                    onChange={() => toggleOwned(skin.id)}
                  />
                  <span>{skin.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 欲しいスキン */}
          <div className="border border-slate-700 rounded-lg p-4">
            <h2 className="font-semibold mb-2">欲しいスキン</h2>
            <select
              className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-sm"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
            >
              <option value="">選択してください</option>

              {/* ★ 追加：検索結果から選ぶ */}
              {filteredSkins.map((skin) => (
                <option key={skin.id} value={skin.id}>
                  {skin.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleCalculate}
              className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-sm font-semibold py-2 rounded"
            >
              確率を計算
            </button>

            {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
          </div>
        </div>

        {/* 結果 */}
        {result && (
          <div className="border border-slate-700 rounded-lg p-4">
            <h2 className="font-semibold mb-3">結果</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p>今日出る確率: {formatPercent(result.today)}</p>
                <p>7日以内: {formatPercent(result.in7days)}</p>
                <p>30日以内: {formatPercent(result.in30days)}</p>
                <p>90日以内: {formatPercent(result.in90days)}</p>
              </div>
              <div>
                <p>推定待機日数: {result.expectedDays.toFixed(1)} 日</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
