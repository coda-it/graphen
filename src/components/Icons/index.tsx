import React from "react";

type IconProps = {
  className?: string;
};

export const IconSearch = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

export const IconEdit = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </svg>
);

export const IconTrash = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M3 6h18" />
    <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </svg>
);

export const IconPlus = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconRefresh = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
    <path d="M21 3v6h-6" />
  </svg>
);

export const IconClock = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconImg = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

export const IconMail = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconCheck = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconChevron = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
