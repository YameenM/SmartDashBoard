import React from "react";
import { ArrowUpRight, ArrowDownRight, Download } from "lucide-react";

const SummaryCard = ({
  title,
  amount,
  percentage,
  breakdown,
  sparklineData,
  lastUpdated,
  target,
  isCurrency = true
}) => {
  const isPositive = percentage >= 0;

  const formatAmount = (num) =>
    num?.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const downloadCSV = () => {
    const rows = [
      ["Title", title],
      ["Amount", formatAmount(amount)],
      ["Percentage", percentage + "%"],
      ["Monthly", breakdown?.month?.value != null ? formatAmount(breakdown.month?.value) : "N/A"],
      ["Weekly", breakdown?.week?.value != null ? formatAmount(breakdown.week?.value) : "N/A"],
      ["Daily", breakdown?.day?.value != null ? formatAmount(breakdown.day?.value) : "N/A"],
      ["Last Updated", formatDate(lastUpdated)]
    ];

    const csvContent = "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `${title.replace(/\s/g, "_")}_summary.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md flex flex-col justify-between gap-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{title}</h3>
        <button
          onClick={downloadCSV}
          className="text-sm text-blue-500 hover:text-blue-700"
          title="Download CSV"
        >
          <Download size={18} />
        </button>
      </div>

      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {isCurrency ? `$${formatAmount(amount)}` : formatAmount(amount)}
      </div>

      <div className={`flex items-center space-x-1 text-sm ${isPositive ? "text-green-600" : "text-red-500"}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{percentage}%</span>
      </div>

      {target && (
        <div className="mt-1">
          <div className="text-xs text-gray-600 dark:text-gray-300 mb-1">
            Target: {isCurrency ? `$${formatAmount(target)}` : formatAmount(target)} — {Math.min((amount / target) * 100, 100).toFixed(1)}%
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className={`h-2 ${isPositive ? "bg-green-500" : "bg-red-500"}`}
              style={{ width: `${Math.min((amount / target) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {breakdown && (
        <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
          <p>Month: {isCurrency ? `$${formatAmount(breakdown.month?.value)}` : formatAmount(breakdown.month?.value)} ({breakdown.month?.percentage}%)</p>
          <p>Week: {isCurrency ? `$${formatAmount(breakdown.week?.value)}` : formatAmount(breakdown.week?.value)} ({breakdown.week?.percentage}%)</p>
          <p>Day: {isCurrency ? `$${formatAmount(breakdown.day?.value)}` : formatAmount(breakdown.day?.value)} ({breakdown.day?.percentage}%)</p>
        </div>
      )}

      {lastUpdated && (
        <div className="text-[11px] text-right text-gray-500 dark:text-gray-400 mt-1">
          Last Updated: {formatDate(lastUpdated)}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
