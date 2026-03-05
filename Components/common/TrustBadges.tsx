import { LuTruck, LuRefreshCcw, LuShieldCheck } from "react-icons/lu";

const BADGES = [
  { icon: LuTruck, label: "Free Shipping" },
  { icon: LuRefreshCcw, label: "7-Day Returns" },
  { icon: LuShieldCheck, label: "100% Authentic" },
];

export default function TrustBadges() {
  return (
    <div className="flex gap-6 pt-2 border-t border-black/5">
      {BADGES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-1.5 text-text-black/50"
        >
          <Icon size={12} />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
