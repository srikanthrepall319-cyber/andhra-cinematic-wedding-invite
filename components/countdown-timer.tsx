"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(target.getTime() - Date.now(), 0);
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000)    % 60),
    seconds: Math.floor((diff / 1_000)     % 60),
  };
}

function Digit({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-center">
      <span className="font-serif text-2xl leading-none text-white">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({
  targetDate,
  compact = false,
}: {
  targetDate: Date;
  compact?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = window.setInterval(
      () => setTimeLeft(getTimeLeft(targetDate)),
      1_000
    );
    return () => window.clearInterval(id);
  }, [targetDate]);

  const entries = compact
    ? [
        { label: "Days",  value: timeLeft.days    },
        { label: "Hrs",   value: timeLeft.hours   },
        { label: "Min",   value: timeLeft.minutes },
        { label: "Sec",   value: timeLeft.seconds },
      ]
    : [
        { label: "Days",    value: timeLeft.days    },
        { label: "Hours",   value: timeLeft.hours   },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ];

  return (
    <div className={compact ? "flex gap-2" : "grid grid-cols-2 gap-3 sm:grid-cols-4"}>
      {entries.map((e) => (
        <Digit key={e.label} label={e.label} value={e.value} />
      ))}
    </div>
  );
}