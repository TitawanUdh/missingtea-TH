import React from "react";
import { FaTiktok, FaInstagram, FaLine, FaFacebookF } from "react-icons/fa";

const links = [
  {
    num: 1,
    title: "Tiktok",
    link: "https://www.tiktok.com/@missing.tea?_t=ZS-8zEBVkHQ3Hc&_r=1",
    icon: <FaTiktok />,
  },
  {
    num: 2,
    title: "Instagram",
    link: "https://www.instagram.com/missing.tea.th?igsh=cjl0NnJ6Y3ZzNHgx",
    icon: <FaInstagram />,
  },
  {
    num: 3,
    title: "Line",
    link: "https://page.line.me/608pcfhx",
    icon: <FaLine />,
  },
  {
    num: 4,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61576893361940",
    icon: <FaFacebookF />,
  },
];

export default function Directions() {
  const open = (href) =>
    href && window.open(href, "_blank", "noopener,noreferrer");

  return (
    // เอา class ของ Bootstrap ที่บังคับ flex ออก ให้เรา control เองด้วย CSS
    <div className="link-list mt-4">
      {links.map((it) => {
        const disabled = !it.link;
        return (
          <div
            key={it.num}
            className={`link-card ${disabled ? "is-disabled" : ""}`}
            role="button"
            tabIndex={0}
            aria-disabled={disabled}
            onClick={() => !disabled && open(it.link)}
            onKeyDown={(e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                open(it.link);
              }
            }}
          >
            {/* <span className="chip">{it.num}</span> */}
            <div className="link-title">{it.title}</div>
            <span className="icon-wrap" aria-hidden="true">
              {it.icon}
            </span>
          </div>
        );
      })}
    </div>
  );
}
