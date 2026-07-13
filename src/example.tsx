/* eslint-disable jsx-a11y/anchor-is-valid, react/no-deprecated */
import React, { useEffect, useMemo, useState } from "react";
import { render } from "react-dom";
import {
  Accordion,
  Badge,
  Button,
  Card,
  CoverEmpty,
  Dialog,
  Dropdown,
  Flex,
  FlexItem,
  Icons,
  Input,
  Joystick,
  Link,
  Loader,
  Logo,
  Navigation,
  NavigationOption,
  Panel,
  PanelContent,
  PanelFooter,
  PanelTitle,
  Scroller,
  SegmentedControl,
  Separator,
  Skeleton,
  Stat,
  Switch,
  Tooltip,
  Validation,
  constants,
} from "./index";

declare const GRAPHEN_VERSION: string;

const VERSION = GRAPHEN_VERSION;

const TOKENS = [
  [
    "#337ab7",
    "Primary",
    "Default brand color, links and primary actions",
    "$gb-color-primary",
  ],
  [
    "#585858",
    "Text",
    "Body copy, headings, default foreground",
    "$gb-color-text",
  ],
  ["#337ab7", "Link", "Inline and standalone hyperlinks", "$gb-color-link"],
  [
    "#f5f5f5",
    "Component",
    "Default surface for cards, inputs, buttons",
    "$gb-color-component",
  ],
  [
    "#e5e5e5",
    "Component dark",
    "Hover state for component surfaces",
    "$gb-color-component-dark",
  ],
  [
    "#0ea348",
    "Success",
    "Positive feedback, confirmation states",
    "$gb-color-success",
  ],
  ["#337ab7", "Info", "Neutral messaging, hints", "$gb-color-info"],
  ["#db5551", "Danger", "Errors, destructive actions", "$gb-color-danger"],
] as const;

const TYPE_SCALE = [
  {
    meta: "36 / 1.1",
    token: "$gb-fs-display",
    style: { fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em" },
    sample: "The quick brown fox",
  },
  {
    meta: "22 / 1.3",
    token: "$gb-fs-h1",
    style: { fontSize: 22, fontWeight: 500 },
    sample: "The quick brown fox jumps over",
  },
  {
    meta: "17 / 1.4",
    token: "$gb-fs-h2",
    style: { fontSize: 17, fontWeight: 500 },
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    meta: "15 / 1.55",
    token: "$gb-fs-body",
    style: {},
    sample:
      "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
  },
  {
    meta: "13 / 1.5",
    token: "$gb-fs-small",
    style: { fontSize: 13, color: "var(--text-muted)" },
    sample:
      "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
  },
];

const SPACING = [
  ["$gb-sp-1", "4 px", "0.25rem", 4],
  ["$gb-sp-2", "8 px", "0.5rem", 8],
  ["$gb-sp-3", "12 px", "0.75rem", 12],
  ["$gb-sp-4", "16 px", "1rem", 16],
  ["$gb-sp-6", "24 px", "1.5rem", 24],
  ["$gb-sp-8", "32 px", "2rem", 32],
  ["$gb-sp-12", "48 px", "3rem", 48],
  ["$gb-sp-16", "64 px", "4rem", 64],
] as const;

const BREAKPOINTS = [
  ["@include gx-phone", "< 768 px", "up to $g-tablet-width − 1px"],
  [
    "@include gx-tablet",
    "768 – 1023 px",
    "$g-tablet-width … $g-desktop-width − 1px",
  ],
  ["@include gx-desktop", "≥ 1024 px", "$g-desktop-width and up"],
] as const;

const RADIUS = [
  ["$gb-r-sm", "4 px", 4],
  ["$gb-r", "6 px", 6],
  ["$gb-r-lg", "10 px", 10],
  ["$gb-r-full", "9999 px", 999],
] as const;

const ICONS: ReadonlyArray<readonly [string, string]> = [
  ["chevron-up", "M6 15l6-6 6 6"],
  ["chevron-right", "M9 6l6 6-6 6"],
  ["chevron-down", "M6 9l6 6 6-6"],
  ["chevron-left", "M15 6l-6 6 6 6"],
  ["flame", "M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s0 2 2 2 1-3 1-7z"],
  ["user", ""],
  ["menu", "M4 7h16M4 12h16M4 17h16"],
  ["menu-add", "M4 7h16M4 12h10M4 17h16M17 12h5M19.5 9.5v5"],
  ["menu-sort", "M4 7h12M4 12h8M4 17h12 m6 -3 3 3-3 3"],
  ["thermometer", "M14 14V5a2 2 0 1 0-4 0v9a4 4 0 1 0 4 0z"],
  ["target", ""],
  ["record", ""],
  ["circle", ""],
  ["plus", "M12 5v14M5 12h14"],
];

const ICON_SET: ReadonlyArray<
  readonly [string, (props: { className?: string }) => React.ReactElement]
> = [
  ["IconSearch", Icons.IconSearch],
  ["IconEdit", Icons.IconEdit],
  ["IconTrash", Icons.IconTrash],
  ["IconPlus", Icons.IconPlus],
  ["IconRefresh", Icons.IconRefresh],
  ["IconClock", Icons.IconClock],
  ["IconImg", Icons.IconImg],
  ["IconMail", Icons.IconMail],
  ["IconCheck", Icons.IconCheck],
  ["IconChevron", Icons.IconChevron],
];

const SEGMENTED_OPTIONS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "archived", label: "Archived" },
] as const;

type SegmentedValue = (typeof SEGMENTED_OPTIONS)[number]["value"];

const NAV = [
  {
    title: "Getting started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "installation", label: "Installation" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing & radius" },
      { id: "iconography", label: "Iconography", count: "14" },
      { id: "responsiveness", label: "Responsiveness" },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "logo", label: "Logo" },
      { id: "button", label: "Button" },
      { id: "link", label: "Link" },
      { id: "header-comp", label: "Header" },
      { id: "separator", label: "Separator" },
      { id: "input", label: "Input" },
      { id: "dropdown", label: "Dropdown" },
      { id: "dialog", label: "Dialog" },
      { id: "card", label: "Card" },
      { id: "badge", label: "Badge" },
      { id: "navigation", label: "Navigation" },
      { id: "segmented-control", label: "Segmented control" },
      { id: "stat", label: "Stat" },
      { id: "cover-empty", label: "Cover empty" },
      { id: "switch", label: "Switch" },
      { id: "panel", label: "Panel" },
      { id: "accordion", label: "Accordion" },
      { id: "flex", label: "Flex" },
      { id: "loader", label: "Loader" },
      { id: "skeleton", label: "Skeleton" },
      { id: "tooltip", label: "Tooltip" },
      { id: "validation", label: "Validation" },
      { id: "alert", label: "Alert" },
      { id: "list", label: "List" },
      { id: "textarea", label: "Textarea" },
      { id: "led", label: "LED" },
      { id: "joystick", label: "Joystick" },
      { id: "scroller", label: "Scroller" },
    ],
  },
];

const TOC = [
  ["introduction", "Introduction"],
  ["colors", "Colors"],
  ["typography", "Typography"],
  ["spacing", "Spacing & radius"],
  ["iconography", "Iconography"],
  ["responsiveness", "Responsiveness"],
  ["logo", "Logo"],
  ["button", "Button"],
  ["link", "Link"],
  ["header-comp", "Header"],
  ["separator", "Separator"],
  ["input", "Input"],
  ["dropdown", "Dropdown"],
  ["dialog", "Dialog"],
  ["card", "Card"],
  ["badge", "Badge"],
  ["navigation", "Navigation"],
  ["segmented-control", "Segmented control"],
  ["stat", "Stat"],
  ["cover-empty", "Cover empty"],
  ["switch", "Switch"],
  ["panel", "Panel"],
  ["accordion", "Accordion"],
  ["flex", "Flex"],
  ["loader", "Loader"],
  ["skeleton", "Skeleton"],
  ["tooltip", "Tooltip"],
  ["validation", "Validation"],
  ["alert", "Alert"],
  ["list", "List"],
  ["textarea", "Textarea"],
  ["led", "LED"],
  ["joystick", "Joystick"],
  ["scroller", "Scroller"],
] as const;

type IconProps = {
  d?: string;
  children?: React.ReactNode;
  size?: number;
  stroke?: number;
};
function StrokeIcon({ d, children, size = 16, stroke = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
}

function CopyButton({
  value,
  label = "copy",
}: {
  value: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={`docs-copy-btn${copied ? " copied" : ""}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          /* noop */
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1100);
      }}
    >
      {copied ? "copied" : label}
    </button>
  );
}

function JoystickDemo() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  return (
    <>
      <Joystick
        isEnabled
        onPositionChange={(left, top) =>
          setPosition({ left: Math.round(left), top: Math.round(top) })
        }
      />
      <span className="docs-demo-value">
        left: {position.left} / top: {position.top}
      </span>
    </>
  );
}

function ScrollerDemo() {
  const [scrollValue, setScrollValue] = useState(0);
  return (
    <>
      <div className="docs-scroller-track">
        <Scroller
          min={0}
          max={100}
          onScrollChange={(value) => setScrollValue(Math.round(value))}
        />
      </div>
      <span className="docs-demo-value">value: {scrollValue}</span>
    </>
  );
}

type DemoProps = {
  code: React.ReactNode;
  stageClass?: string;
  children: React.ReactNode;
};
function Demo({ code, stageClass = "", children }: DemoProps) {
  const [active, setActive] = useState<"preview" | "code">("preview");
  return (
    <div className="docs-demo" data-active={active}>
      <div className="tabs" role="tablist">
        <button
          type="button"
          role="tab"
          className="tab"
          aria-selected={active === "preview"}
          onClick={() => setActive("preview")}
        >
          <svg
            className="ico"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          </svg>
          Preview
        </button>
        <button
          type="button"
          role="tab"
          className="tab"
          aria-selected={active === "code"}
          onClick={() => setActive("code")}
        >
          <svg
            className="ico"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
          </svg>
          Code
        </button>
      </div>
      <div className={`stage ${stageClass}`}>{children}</div>
      <pre className="code">{code}</pre>
    </div>
  );
}

function HexLogoMark() {
  return (
    <svg className="docs-hex" viewBox="0 0 24 24" aria-hidden="true">
      <polygon
        points="12,2 21,7 21,17 12,22 3,17 3,7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <polygon
        points="12,7 17,9.5 17,14.5 12,17 7,14.5 7,9.5"
        fill="currentColor"
        opacity={0.18}
      />
    </svg>
  );
}

const INSTALL_CMDS: Record<string, string> = {
  npm: "npm i graphen",
  pnpm: "pnpm add graphen",
  yarn: "yarn add graphen",
};

const DROPDOWN_ITEMS = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
] as const;

function IconCell({ name, d }: { name: string; d: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="docs-icon-cell"
      role="button"
      tabIndex={0}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(name);
        } catch {
          /* noop */
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 900);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          (e.currentTarget as HTMLDivElement).click();
        }
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={d} />
      </svg>
      <span style={copied ? { color: "var(--gb-success)" } : undefined}>
        {copied ? "copied!" : name}
      </span>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof localStorage === "undefined") return "light";
    return (
      (localStorage.getItem("graphen-theme") as "light" | "dark") || "light"
    );
  });
  const [installTab, setInstallTab] =
    useState<keyof typeof INSTALL_CMDS>("npm");
  const [activeId, setActiveId] = useState<string>("introduction");
  const [installCopied, setInstallCopied] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("red");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [segmentedValue, setSegmentedValue] = useState<SegmentedValue>("all");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("graphen-theme", theme);
    } catch {
      /* noop */
    }
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section.docs-section[id]")
    );
    if (sections.length === 0) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const installCmd = INSTALL_CMDS[installTab];

  const colorRows = useMemo(
    () =>
      TOKENS.map(([hex, name, desc, varName]) => (
        <div className="docs-token-row" key={varName}>
          <div className="swatch" style={{ background: hex }} />
          <div className="name">
            {name}
            <span className="desc">{desc}</span>
          </div>
          <div className="var">{varName}</div>
          <div className="docs-row" style={{ gap: 8 }}>
            <span className="hex-val">{hex.toUpperCase()}</span>
            <CopyButton value={hex.toUpperCase()} />
          </div>
        </div>
      )),
    []
  );

  return (
    <div className="docs">
      <header className="docs-topbar">
        <a href="#top" className="docs-brand">
          <HexLogoMark />
          <span>graphen</span>
          <span className="ver">{VERSION}</span>
        </a>
        <div className="docs-tools">
          <button
            type="button"
            className="docs-icon-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <StrokeIcon stroke={1.8}>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </StrokeIcon>
            ) : (
              <StrokeIcon stroke={1.8}>
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </StrokeIcon>
            )}
          </button>
          <a
            className="docs-icon-btn"
            href="https://github.com/coda-it/graphen"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.21.7-3.88-1.55-3.88-1.55-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5z" />
            </svg>
          </a>
        </div>
      </header>

      <div className="docs-app" id="top">
        <nav className="docs-sidebar" aria-label="Documentation">
          {NAV.map((group) => (
            <div className="group" key={group.title}>
              <div className="group-title">{group.title}</div>
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeId === item.id ? "active" : ""}
                >
                  {item.label}
                  {"count" in item && item.count ? (
                    <span className="count">{item.count}</span>
                  ) : null}
                </a>
              ))}
            </div>
          ))}
          <div className="group">
            <div className="group-title">Resources</div>
            <a href="https://github.com/coda-it/graphen">Source on GitHub ↗</a>
          </div>
        </nav>

        <main className="docs-content">
          <section className="docs-section" id="introduction">
            <div className="docs-eyebrow">
              <span className="dot" /> Component library · {VERSION} · MIT
            </div>
            <h1 className="docs-title">
              A minimal toolkit for clean&nbsp;interfaces.
            </h1>
            <p className="docs-lede">
              Graphen is a small, opinionated set of UI primitives — built on
              plain CSS variables and lightweight markup. No runtime, no theming
              engine. Drop the stylesheet, use the classes, ship.
            </p>

            <div className="docs-meta-row">
              <span>
                <strong>14</strong> components
              </span>
              <span className="sep" />
              <span>
                <strong>32</strong> tokens
              </span>
              <span className="sep" />
              <span>Zero runtime</span>
              <span className="sep" />
              <span>SCSS first</span>
            </div>

            <div
              className="docs-install"
              id="installation"
              role="group"
              aria-label="Install Graphen"
            >
              <div className="tabs" role="tablist">
                {(
                  Object.keys(INSTALL_CMDS) as Array<keyof typeof INSTALL_CMDS>
                ).map((k) => (
                  <button
                    key={k}
                    type="button"
                    role="tab"
                    className="tab"
                    aria-selected={installTab === k}
                    onClick={() => setInstallTab(k)}
                  >
                    {k}
                  </button>
                ))}
              </div>
              <div className="cmd">
                <span className="prompt">$</span>
                <span>{installCmd}</span>
                <button
                  type="button"
                  aria-label="Copy install command"
                  title="Copy"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(installCmd);
                    } catch {
                      /* noop */
                    }
                    setInstallCopied(true);
                    window.setTimeout(() => setInstallCopied(false), 900);
                  }}
                  style={
                    installCopied ? { color: "var(--gb-success)" } : undefined
                  }
                >
                  <StrokeIcon size={14}>
                    <rect x="9" y="9" width="11" height="11" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </StrokeIcon>
                </button>
              </div>
            </div>

            <div className="docs-comp-index" aria-label="Component index">
              <a href="#colors">
                <span className="nm">Colors</span>
                <span className="st">8 tokens</span>
              </a>
              <a href="#typography">
                <span className="nm">Typography</span>
                <span className="st">5 sizes</span>
              </a>
              <a href="#button">
                <span className="nm">Button</span>
                <span className="st">5 variants</span>
              </a>
              <a href="#input">
                <span className="nm">Input</span>
                <span className="st">stable</span>
              </a>
            </div>
          </section>

          <section className="docs-section" id="colors">
            <div className="docs-section-eyebrow">Foundations / 01</div>
            <h2 className="docs-section-title">Colors</h2>
            <p className="docs-section-desc">
              Brand tokens are exposed as Sass variables and matching CSS custom
              properties. Click any value to copy. Component tokens (
              <code>$gb-color-component</code>) are the only colors used as
              backgrounds for surfaces — everything else is reserved for accent
              or status.
            </p>
            <div className="docs-tokens" role="table" aria-label="Color tokens">
              {colorRows}
            </div>
          </section>

          <section className="docs-section" id="typography">
            <div className="docs-section-eyebrow">Foundations / 02</div>
            <h2 className="docs-section-title">Typography</h2>
            <p className="docs-section-desc">
              Graphen uses the system font stack by default, with a single
              optical scale of five steps. Numerics are tabular for tables;{" "}
              <code>code</code> uses the monospace stack.
            </p>
            {TYPE_SCALE.map((row) => (
              <div className="docs-type-row" key={row.token}>
                <div className="meta">{row.meta}</div>
                <div className="meta">{row.token}</div>
                <div className="sample" style={row.style}>
                  {row.sample}
                </div>
              </div>
            ))}
          </section>

          <section className="docs-section" id="spacing">
            <div className="docs-section-eyebrow">Foundations / 03</div>
            <h2 className="docs-section-title">Spacing &amp; radius</h2>
            <p className="docs-section-desc">
              A four-pixel base scale. Use the smallest token that still reads
              as deliberate; double up rather than introduce new sizes.
            </p>
            <div className="docs-space-grid">
              {SPACING.map(([token, px, rem, w]) => (
                <div className="docs-space-row" key={token}>
                  <span className="token">{token}</span>
                  <span className="px">{px}</span>
                  <span className="px">{rem}</span>
                  <div className="vis" style={{ width: w }} />
                </div>
              ))}
            </div>
            <div className="docs-spacer-y" />
            <h3 className="docs-subsection-title">Radius</h3>
            <div className="docs-space-grid">
              {RADIUS.map(([token, px, r]) => (
                <div className="docs-space-row" key={token}>
                  <span className="token">{token}</span>
                  <span className="px">{px}</span>
                  <span className="px" />
                  <div className="swatch-radius" style={{ borderRadius: r }} />
                </div>
              ))}
            </div>
          </section>

          <section className="docs-section" id="iconography">
            <div className="docs-section-eyebrow">Foundations / 04</div>
            <h2 className="docs-section-title">Iconography</h2>
            <p className="docs-section-desc">
              Stroke-based, 24 × 24 viewBox, 1.6 px stroke. Inherit color from
              the parent. Click an icon to copy its name.
            </p>
            <div className="docs-icon-grid">
              {ICONS.map(([name, d]) => (
                <IconCell key={name} name={name} d={d} />
              ))}
            </div>
            <h3 className="docs-subsection-title">Icon set</h3>
            <p className="docs-section-desc">
              Ready-to-use React icon components exported from{" "}
              <code>Icons</code>. They inherit <code>currentColor</code>; size
              and stroke are set by the consumer via a class name.
            </p>
            <div className="docs-icon-grid">
              {ICON_SET.map(([name, IconComponent]) => (
                <div className="docs-icon-cell docs-iconset-cell" key={name}>
                  <IconComponent className="docs-iconset-cell__svg" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="docs-section" id="responsiveness">
            <div className="docs-section-eyebrow">Foundations / 05</div>
            <h2 className="docs-section-title">Responsiveness</h2>
            <p className="docs-section-desc">
              Breakpoints are exposed as Sass variables and wrapped by three
              mixins — <code>gx-phone</code>, <code>gx-tablet</code> and{" "}
              <code>gx-desktop</code>. Each mixin scopes its block to exactly
              one range, so the three never overlap. The demo below is styled
              with the real mixins — resize the window to see the active range
              light up.
            </p>
            <div className="docs-bp-grid" role="table" aria-label="Breakpoints">
              {BREAKPOINTS.map(([mixin, range, vars]) => (
                <div className="docs-bp-row" key={mixin}>
                  <span className="mixin">{mixin}</span>
                  <span className="range">{range}</span>
                  <span className="vars">{vars}</span>
                </div>
              ))}
            </div>
            <div className="docs-spacer-y" />
            <Demo
              stageClass="center"
              code={`.docs-bp-demo .pill { opacity: 0.35; }

@include gx-phone {
  .docs-bp-demo .pill--phone { opacity: 1; }
}

@include gx-tablet {
  .docs-bp-demo .pill--tablet { opacity: 1; }
}

@include gx-desktop {
  .docs-bp-demo .pill--desktop { opacity: 1; }
}`}
            >
              <div className="docs-bp-demo">
                <div className="pill pill--phone">
                  <span className="nm">gx-phone</span>
                  <span className="rg">&lt; 768 px</span>
                </div>
                <div className="pill pill--tablet">
                  <span className="nm">gx-tablet</span>
                  <span className="rg">768 – 1023 px</span>
                </div>
                <div className="pill pill--desktop">
                  <span className="nm">gx-desktop</span>
                  <span className="rg">≥ 1024 px</span>
                </div>
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="logo">
            <div className="docs-section-eyebrow">Components / 01</div>
            <h2 className="docs-section-title">Logo</h2>
            <p className="docs-section-desc">
              A monospace wordmark with a single blinking-cursor accent. The
              cursor blink is a CSS animation; pause it via{" "}
              <code>prefers-reduced-motion</code>.
            </p>
            <Demo stageClass="center" code="<Logo />">
              <Logo />
            </Demo>
          </section>

          <section className="docs-section" id="button">
            <div className="docs-section-eyebrow">Components / 02</div>
            <h2 className="docs-section-title">Button</h2>
            <p className="docs-section-desc">
              Five visual variants and a small size. Buttons are{" "}
              <code>&lt;button&gt;</code> elements; never wrap them in anchors.
            </p>

            <h3 className="docs-subsection-title">Variants</h3>
            <Demo
              code={`<Button className="gc-btn--primary">Primary</Button>
<Button>Default</Button>
<Button className="gc-btn--outline">Outline</Button>
<Button className="gc-btn--ghost">Ghost</Button>
<Button className="gc-btn--success">Success</Button>
<Button className="gc-btn--danger">Danger</Button>
<Button className="gc-btn--primary" isDisabled>Disabled</Button>`}
            >
              <Button className="gc-btn--primary">Primary</Button>
              <Button>Default</Button>
              <Button className="gc-btn--outline">Outline</Button>
              <Button className="gc-btn--ghost">Ghost</Button>
              <Button className="gc-btn--success">Success</Button>
              <Button className="gc-btn--danger">Danger</Button>
              <Button className="gc-btn--primary" isDisabled>
                Disabled
              </Button>
            </Demo>

            <h3 className="docs-subsection-title">Sizes</h3>
            <Demo
              code={`<Button className="gc-btn--small gc-btn--primary">Small</Button>
<Button className="gc-btn--primary">Default</Button>
<Button className="gc-btn--large gc-btn--primary">Large</Button>`}
            >
              <Button className="gc-btn--small gc-btn--primary">Small</Button>
              <Button className="gc-btn--primary">Default</Button>
              <Button className="gc-btn--large gc-btn--primary">Large</Button>
            </Demo>
          </section>

          <section className="docs-section" id="link">
            <div className="docs-section-eyebrow">Components / 03</div>
            <h2 className="docs-section-title">Link</h2>
            <p className="docs-section-desc">
              Two flavors: <em>primary</em> (brand-colored, for navigation and
              calls to action) and <em>default</em> (inherits text color, for
              inline references).
            </p>
            <Demo
              stageClass="column"
              code={`<Link link="#">Primary link</Link>
<Link link="#" skin={constants.SKIN_DEFAULT}>Default link</Link>`}
            >
              <p style={{ margin: 0, maxWidth: "60ch" }}>
                For more on the system, see{" "}
                <Link link="#">the design principles</Link>, or read our{" "}
                <Link link="#" skin={constants.SKIN_DEFAULT}>
                  release notes
                </Link>{" "}
                from last quarter.
              </p>
            </Demo>
          </section>

          <section className="docs-section" id="header-comp">
            <div className="docs-section-eyebrow">Components / 04</div>
            <h2 className="docs-section-title">Header</h2>
            <p className="docs-section-desc">
              A small section header pattern — icon, title, optional metadata.
              Used to introduce dashboards, lists and panels.
            </p>
            <Demo
              stageClass="column"
              code={`<header className="gc-section-header">
  <span className="gc-section-header__icon">…</span>
  <span className="gc-section-header__title">Component overview</span>
  <span className="gc-section-header__sub">14 items</span>
</header>`}
            >
              <header className="gc-section-header">
                <span className="gc-section-header__icon">
                  <StrokeIcon stroke={1.8}>
                    <polygon points="12,3 21,7.5 21,16.5 12,21 3,16.5 3,7.5" />
                  </StrokeIcon>
                </span>
                <span className="gc-section-header__title">
                  Component overview
                </span>
                <span className="gc-section-header__sub">14 items</span>
              </header>
              <header className="gc-section-header gc-section-header--success">
                <span className="gc-section-header__icon">
                  <StrokeIcon size={14} stroke={2.2}>
                    <path d="m5 12 5 5 9-11" />
                  </StrokeIcon>
                </span>
                <span className="gc-section-header__title">Build passing</span>
                <span className="gc-section-header__sub">2 min ago</span>
              </header>
            </Demo>
          </section>

          <section className="docs-section" id="separator">
            <div className="docs-section-eyebrow">Components / 05</div>
            <h2 className="docs-section-title">Separator</h2>
            <p className="docs-section-desc">
              Horizontal dividers. Prefer over borders on parent containers when
              content needs to feel grouped, not boxed.
            </p>
            <Demo stageClass="column" code="<Separator />">
              <div style={{ width: "100%", maxWidth: 480 }}>
                <div style={{ fontSize: 13.5, padding: "6px 0" }}>
                  Section A
                </div>
                <Separator />
                <div style={{ fontSize: 13.5, padding: "6px 0" }}>
                  Section B
                </div>
                <Separator />
                <div style={{ fontSize: 13.5, padding: "6px 0" }}>
                  Section C
                </div>
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="input">
            <div className="docs-section-eyebrow">Components / 06</div>
            <h2 className="docs-section-title">Input</h2>
            <p className="docs-section-desc">
              Single-line text input with focus ring keyed to the brand color.
              Try typing — focus state is real.
            </p>
            <Demo
              stageClass="column"
              code={`<Input label="Search" type="text" />
<Input label="Email" type="email" validation="success" />`}
            >
              <Input label="Search" type="text" />
              <Input label="Email" type="email" validation="success" />
            </Demo>
          </section>

          <section className="docs-section" id="dropdown">
            <div className="docs-section-eyebrow">Components / 07</div>
            <h2 className="docs-section-title">Dropdown</h2>
            <p className="docs-section-desc">
              A compact selector for short option lists. Keep labels clear and
              avoid using it when users need to compare many values at once.
            </p>
            <Demo
              code={`<Dropdown
  label="Theme accent"
  initValue={{ value: "${dropdownValue}", label: "${
                DROPDOWN_ITEMS.find((item) => item.value === dropdownValue)
                  ?.label
              }" }}
  items={[
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ]}
  onChange={setDropdownValue}
/>`}
            >
              <Dropdown
                label="Theme accent"
                initValue={
                  DROPDOWN_ITEMS.find((item) => item.value === dropdownValue) ||
                  DROPDOWN_ITEMS[0]
                }
                items={DROPDOWN_ITEMS}
                onChange={setDropdownValue}
              />
            </Demo>
          </section>

          <section className="docs-section" id="dialog">
            <div className="docs-section-eyebrow">Components / 08</div>
            <h2 className="docs-section-title">Dialog</h2>
            <p className="docs-section-desc">
              A fixed overlay surface for focused messages and short actions.
              Render it conditionally and keep a clear dismissal path.
            </p>
            <Demo
              code={`const [isDialogOpen, setIsDialogOpen] = useState(false);

<Button className="gc-btn--primary" onClick={() => setIsDialogOpen(true)}>
  Open dialog
</Button>

{isDialogOpen && (
  <Dialog isOverlay>
    <h4>Publish changes?</h4>
    <p>This action will update the public example bundle.</p>
    <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
  </Dialog>
)}`}
            >
              <Button
                className="gc-btn--primary"
                onClick={() => setIsDialogOpen(true)}
              >
                Open dialog
              </Button>
              {isDialogOpen && (
                <Dialog isOverlay>
                  <div className="docs-dialog-content">
                    <h4>Publish changes?</h4>
                    <p>This action will update the public example bundle.</p>
                    <Button onClick={() => setIsDialogOpen(false)}>
                      Close
                    </Button>
                  </div>
                </Dialog>
              )}
            </Demo>
          </section>

          <section className="docs-section" id="card">
            <div className="docs-section-eyebrow">Components / 09</div>
            <h2 className="docs-section-title">Card</h2>
            <p className="docs-section-desc">
              A single-content surface. Don&apos;t nest cards. If a card has
              more than one CTA, you probably want a list.
            </p>
            <Demo
              code={`<Card>
  <div className="docs-card-eyebrow">Release</div>
  <h4>Graphen 1.0 is here</h4>
  <p>A small, opinionated set …</p>
  <Button className="gc-btn--small gc-btn--primary">Read announcement</Button>
</Card>`}
            >
              <Card>
                <div className="docs-card-eyebrow">Release</div>
                <h4 className="docs-card-title">Graphen 1.0 is here</h4>
                <p className="docs-card-text">
                  A small, opinionated set of UI primitives — finally stable.
                </p>
                <Button className="gc-btn--small gc-btn--primary">
                  Read announcement
                </Button>
              </Card>
              <Card>
                <div className="docs-card-eyebrow">Tutorial</div>
                <h4 className="docs-card-title">Theming with CSS variables</h4>
                <p className="docs-card-text">
                  Override <code>--gb-primary</code> on <code>:root</code> to
                  retheme everything in one line.
                </p>
                <Button className="gc-btn--small gc-btn--secondary">
                  Open guide
                </Button>
              </Card>
            </Demo>
          </section>

          <section className="docs-section" id="badge">
            <div className="docs-section-eyebrow">Components / 10</div>
            <h2 className="docs-section-title">Badge</h2>
            <p className="docs-section-desc">
              Small status pills. Use sparingly — one badge per row, never
              decorative.
            </p>
            <Demo
              code={`<Badge showPulse>idle</Badge>
<Badge type="info" showPulse>info</Badge>
<Badge type="success" showPulse>success</Badge>
<Badge type="danger" showPulse>danger</Badge>`}
            >
              <Badge showPulse>idle</Badge>
              <Badge type="info" showPulse>
                info
              </Badge>
              <Badge type="success" showPulse>
                success
              </Badge>
              <Badge type="danger" showPulse>
                danger
              </Badge>
            </Demo>
          </section>

          <section className="docs-section" id="navigation">
            <div className="docs-section-eyebrow">Components / 11</div>
            <h2 className="docs-section-title">Navigation</h2>
            <p className="docs-section-desc">
              Horizontal navigation for top-of-page links. The active option is
              underlined with the brand color; click an option that owns a
              submenu to open it.
            </p>
            <Demo
              stageClass="column"
              code={`<Navigation>
  <NavigationOption label="Overview" href="#" isActive />
  <NavigationOption label="Components">
    <a className="gc-submenu__item" href="#">Button</a>
    <a className="gc-submenu__item" href="#">Card</a>
    <a className="gc-submenu__item" href="#">Dialog</a>
  </NavigationOption>
  <NavigationOption label="Resources" href="#" />
</Navigation>`}
            >
              <Navigation>
                <NavigationOption label="Overview" href="#" isActive />
                <NavigationOption label="Components">
                  <a className="gc-submenu__item" href="#">
                    Button
                  </a>
                  <a className="gc-submenu__item" href="#">
                    Card
                  </a>
                  <a className="gc-submenu__item" href="#">
                    Dialog
                  </a>
                </NavigationOption>
                <NavigationOption label="Resources" href="#" />
              </Navigation>
            </Demo>
            <p className="docs-section-desc">
              Inside a narrow container the navigation scrolls horizontally. The
              submenu follows its scrolled parent option and stays within the
              viewport.
            </p>
            <Demo
              stageClass="column"
              code={`<div style={{ maxWidth: 280, overflowX: "auto" }}>
  <Navigation>
    <NavigationOption label="Overview" href="#" isActive />
    <NavigationOption label="Admin" href="#" />
    <NavigationOption label="Platform">
      <a className="gc-submenu__item" href="#">Users</a>
      <a className="gc-submenu__item" href="#">Events</a>
    </NavigationOption>
    <NavigationOption label="e-Shop" href="#" />
    <NavigationOption label="Account" href="#" />
  </Navigation>
</div>`}
            >
              <div style={{ maxWidth: 280, overflowX: "auto" }}>
                <Navigation>
                  <NavigationOption label="Overview" href="#" isActive />
                  <NavigationOption label="Admin" href="#" />
                  <NavigationOption label="Platform">
                    <a className="gc-submenu__item" href="#">
                      Users
                    </a>
                    <a className="gc-submenu__item" href="#">
                      Events
                    </a>
                  </NavigationOption>
                  <NavigationOption label="e-Shop" href="#" />
                  <NavigationOption label="Account" href="#" />
                </Navigation>
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="segmented-control">
            <div className="docs-section-eyebrow">Components / 12</div>
            <h2 className="docs-section-title">Segmented control</h2>
            <p className="docs-section-desc">
              A pill-shaped toggle for switching between a few mutually
              exclusive views. Prefer it over a dropdown when there are two to
              four options that benefit from being visible at once.
            </p>
            <Demo
              stageClass="center"
              code={`<SegmentedControl
  options={[
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "archived", label: "Archived" },
  ]}
  value="${segmentedValue}"
  onChange={setSegmentedValue}
/>`}
            >
              <SegmentedControl<SegmentedValue>
                options={SEGMENTED_OPTIONS}
                value={segmentedValue}
                onChange={setSegmentedValue}
              />
            </Demo>
          </section>

          <section className="docs-section" id="stat">
            <div className="docs-section-eyebrow">Components / 13</div>
            <h2 className="docs-section-title">Stat</h2>
            <p className="docs-section-desc">
              A single key figure with a labelled, color-coded dot. Group a few
              of them to summarise the state of a page. The dot color is set via
              the <code>modifier</code> prop.
            </p>
            <Demo
              stageClass="column"
              code={`<Stat modifier="blue" label="Posts" value="128" />
<Stat modifier="green" label="Published" value="94" />
<Stat modifier="amber" label="Drafts" value="26" />
<Stat modifier="red" label="Flagged" value="8" />`}
            >
              <div className="docs-stat-grid">
                <Stat modifier="blue" label="Posts" value="128" />
                <Stat modifier="green" label="Published" value="94" />
                <Stat modifier="amber" label="Drafts" value="26" />
                <Stat modifier="red" label="Flagged" value="8" />
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="cover-empty">
            <div className="docs-section-eyebrow">Components / 14</div>
            <h2 className="docs-section-title">Cover empty</h2>
            <p className="docs-section-desc">
              A neutral placeholder for a missing image or empty media slot. It
              fills its container, so give the parent a fixed size.
            </p>
            <Demo
              stageClass="center"
              code={`<div style={{ width: 160, height: 120 }}>
  <CoverEmpty />
</div>`}
            >
              <div className="docs-cover-empty-stage">
                <CoverEmpty />
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="switch">
            <div className="docs-section-eyebrow">Components / 15</div>
            <h2 className="docs-section-title">Switch</h2>
            <p className="docs-section-desc">
              A toggle for a single on / off setting that takes effect
              immediately. The <code>type</code> prop colors the active state to
              match the semantic palette.
            </p>
            <Demo
              stageClass="center"
              code={`<Switch onChange={(isSwitched) => console.log(isSwitched)} />
<Switch isSwitched />
<Switch isSwitched type="success" />
<Switch isSwitched type="info" />
<Switch isSwitched type="danger" />`}
            >
              <Switch />
              <Switch isSwitched />
              <Switch isSwitched type="success" />
              <Switch isSwitched type="info" />
              <Switch isSwitched type="danger" />
            </Demo>
          </section>

          <section className="docs-section" id="panel">
            <div className="docs-section-eyebrow">Components / 16</div>
            <h2 className="docs-section-title">Panel</h2>
            <p className="docs-section-desc">
              A composable surface for grouping related content. Combine{" "}
              <code>PanelTitle</code>, <code>PanelContent</code> and{" "}
              <code>PanelFooter</code>; <code>isBordered</code> outlines the
              panel and <code>isSeparator</code> draws dividers between the
              parts.
            </p>
            <Demo
              stageClass="column"
              code={`<Panel isBordered>
  <PanelTitle>Billing</PanelTitle>
  <PanelContent>Invoices are issued on the first day of each month.</PanelContent>
  <PanelFooter>Last updated today</PanelFooter>
</Panel>
<Panel isSeparator>
  <PanelTitle>Notifications</PanelTitle>
  <PanelContent>Choose how you want to be notified about activity.</PanelContent>
</Panel>`}
            >
              <Panel isBordered>
                <PanelTitle>Billing</PanelTitle>
                <PanelContent>
                  Invoices are issued on the first day of each month.
                </PanelContent>
                <PanelFooter>Last updated today</PanelFooter>
              </Panel>
              <Panel isSeparator>
                <PanelTitle>Notifications</PanelTitle>
                <PanelContent>
                  Choose how you want to be notified about activity.
                </PanelContent>
              </Panel>
            </Demo>
          </section>

          <section className="docs-section" id="accordion">
            <div className="docs-section-eyebrow">Components / 17</div>
            <h2 className="docs-section-title">Accordion</h2>
            <p className="docs-section-desc">
              A collapsible panel for secondary content. It starts collapsed by
              default — click the title to expand it.
            </p>
            <Demo
              stageClass="column"
              code={`<Accordion title="Shipping details">
  Orders placed before noon ship the same day. Tracking is emailed
  once the parcel leaves the warehouse.
</Accordion>`}
            >
              <Accordion title="Shipping details">
                Orders placed before noon ship the same day. Tracking is emailed
                once the parcel leaves the warehouse.
              </Accordion>
            </Demo>
          </section>

          <section className="docs-section" id="flex">
            <div className="docs-section-eyebrow">Components / 18</div>
            <h2 className="docs-section-title">Flex</h2>
            <p className="docs-section-desc">
              A thin flexbox wrapper. <code>FlexItem</code> children opt into
              growing or shrinking; <code>isVertical</code> stacks them as a
              column.
            </p>
            <Demo
              stageClass="column"
              code={`<Flex>
  <FlexItem>aside</FlexItem>
  <FlexItem isGrow>main content</FlexItem>
  <FlexItem>aside</FlexItem>
</Flex>
<Flex isVertical>
  <FlexItem>row one</FlexItem>
  <FlexItem>row two</FlexItem>
</Flex>`}
            >
              <Flex className="docs-flex-demo">
                <FlexItem className="docs-flex-box">aside</FlexItem>
                <FlexItem className="docs-flex-box" isGrow>
                  main content
                </FlexItem>
                <FlexItem className="docs-flex-box">aside</FlexItem>
              </Flex>
              <Flex isVertical>
                <FlexItem className="docs-flex-box">row one</FlexItem>
                <FlexItem className="docs-flex-box">row two</FlexItem>
              </Flex>
            </Demo>
          </section>

          <section className="docs-section" id="loader">
            <div className="docs-section-eyebrow">Components / 19</div>
            <h2 className="docs-section-title">Loader</h2>
            <p className="docs-section-desc">
              An indeterminate spinner for blocking waits. The ring mixes white
              and gray strokes, so it reads best on dark or tinted surfaces.
            </p>
            <Demo stageClass="center" code="<Loader />">
              <div className="docs-loader-stage">
                <Loader />
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="skeleton">
            <div className="docs-section-eyebrow">Components / 20</div>
            <h2 className="docs-section-title">Skeleton</h2>
            <p className="docs-section-desc">
              A shimmering placeholder line for content that is still loading.
              Compose several with varying widths to sketch the final layout.
            </p>
            <Demo
              stageClass="column"
              code={`<Skeleton />
<Skeleton />
<Skeleton />`}
            >
              <div className="docs-skeleton-demo">
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="tooltip">
            <div className="docs-section-eyebrow">Components / 21</div>
            <h2 className="docs-section-title">Tooltip</h2>
            <p className="docs-section-desc">
              A small anchored bubble for contextual feedback. It positions
              absolutely against the nearest positioned ancestor; the{" "}
              <code>type</code> prop keys the color to the semantic palette.
            </p>
            <Demo
              code={`<Tooltip type="success">Saved successfully</Tooltip>
<Tooltip type="danger">Something went wrong</Tooltip>`}
            >
              <div className="docs-tooltip-anchor">
                <Tooltip type="success">Saved successfully</Tooltip>
              </div>
              <div className="docs-tooltip-anchor">
                <Tooltip type="danger">Something went wrong</Tooltip>
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="validation">
            <div className="docs-section-eyebrow">Components / 22</div>
            <h2 className="docs-section-title">Validation</h2>
            <p className="docs-section-desc">
              Wraps a form control and reveals a tooltip with the validation
              message on hover. Hover the inputs below to see it.
            </p>
            <Demo
              stageClass="column"
              code={`<Validation type="danger" message="Email is required">
  <Input label="Email" type="email" validation="danger" />
</Validation>
<Validation type="success" message="Looks good">
  <Input label="Username" type="text" validation="success" />
</Validation>`}
            >
              <Validation type="danger" message="Email is required">
                <Input label="Email" type="email" validation="danger" />
              </Validation>
              <Validation type="success" message="Looks good">
                <Input label="Username" type="text" validation="success" />
              </Validation>
            </Demo>
          </section>

          <section className="docs-section" id="alert">
            <div className="docs-section-eyebrow">Components / 23</div>
            <h2 className="docs-section-title">Alert</h2>
            <p className="docs-section-desc">
              A bordered message box for inline page-level feedback. Styles-only
              primitive — apply the classes to your own markup.
            </p>
            <Demo
              stageClass="column"
              code={`<div className="gc-alert gc-alert--info">A new version is available.</div>
<div className="gc-alert gc-alert--success">Settings saved.</div>
<div className="gc-alert gc-alert--danger">Could not reach the server.</div>`}
            >
              <div className="gc-alert gc-alert--info">
                A new version is available.
              </div>
              <div className="gc-alert gc-alert--success">Settings saved.</div>
              <div className="gc-alert gc-alert--danger">
                Could not reach the server.
              </div>
            </Demo>
          </section>

          <section className="docs-section" id="list">
            <div className="docs-section-eyebrow">Components / 24</div>
            <h2 className="docs-section-title">List</h2>
            <p className="docs-section-desc">
              A bordered stack of rows for simple records. Styles-only primitive
              — apply the classes to your own markup.
            </p>
            <Demo
              stageClass="column"
              code={`<ul className="gc-list">
  <li className="gc-list__item">Production deploy</li>
  <li className="gc-list__item">Staging deploy</li>
  <li className="gc-list__item">Nightly backup</li>
</ul>`}
            >
              <ul className="gc-list docs-list-demo">
                <li className="gc-list__item">Production deploy</li>
                <li className="gc-list__item">Staging deploy</li>
                <li className="gc-list__item">Nightly backup</li>
              </ul>
            </Demo>
          </section>

          <section className="docs-section" id="textarea">
            <div className="docs-section-eyebrow">Components / 25</div>
            <h2 className="docs-section-title">Textarea</h2>
            <p className="docs-section-desc">
              Multi-line text input matching the Input styling. Styles-only
              primitive — apply the class to a native textarea.
            </p>
            <Demo
              stageClass="column"
              code={`<textarea className="gc-textarea" rows={3} placeholder="Describe the issue…" />`}
            >
              <textarea
                className="gc-textarea"
                rows={3}
                placeholder="Describe the issue…"
              />
            </Demo>
          </section>

          <section className="docs-section" id="led">
            <div className="docs-section-eyebrow">Components / 26</div>
            <h2 className="docs-section-title">LED</h2>
            <p className="docs-section-desc">
              A status light for dashboards and device panels. Add{" "}
              <code>gc-led--blink</code> for attention-demanding states.
              Styles-only primitive.
            </p>
            <Demo
              stageClass="center"
              code={`<span className="gc-led gc-led--green" />
<span className="gc-led gc-led--blue" />
<span className="gc-led gc-led--red" />
<span className="gc-led gc-led--red gc-led--blink" />`}
            >
              <span className="gc-led gc-led--green" />
              <span className="gc-led gc-led--blue" />
              <span className="gc-led gc-led--red" />
              <span className="gc-led gc-led--red gc-led--blink" />
            </Demo>
          </section>

          <section className="docs-section" id="joystick">
            <div className="docs-section-eyebrow">Components / 27</div>
            <h2 className="docs-section-title">Joystick</h2>
            <p className="docs-section-desc">
              A draggable two-axis control for hardware-like interfaces. Drag
              the knob — the position is reported through{" "}
              <code>onPositionChange</code>.
            </p>
            <Demo
              stageClass="center"
              code={`<Joystick
  isEnabled
  onPositionChange={(left, top) => console.log(left, top)}
/>`}
            >
              <JoystickDemo />
            </Demo>
          </section>

          <section className="docs-section" id="scroller">
            <div className="docs-section-eyebrow">Components / 28</div>
            <h2 className="docs-section-title">Scroller</h2>
            <p className="docs-section-desc">
              A draggable horizontal slider for scrubbing through a range. Drag
              the knob — the position is reported through{" "}
              <code>onScrollChange</code> when the knob is released.
            </p>
            <Demo
              stageClass="center"
              code={`<Scroller
  min={0}
  max={100}
  onScrollChange={(value) => console.log(value)}
/>`}
            >
              <ScrollerDemo />
            </Demo>
          </section>

          <footer className="docs-footer">
            <div>graphen · {VERSION} · MIT</div>
            <div>Built by the CODA_ team</div>
          </footer>
        </main>

        <aside className="docs-toc" aria-label="On this page">
          <div className="toc-title">On this page</div>
          {TOC.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </aside>
      </div>
    </div>
  );
}

const appContainer = document.querySelector(".js-example");
if (appContainer) {
  render(<App />, appContainer);
}
