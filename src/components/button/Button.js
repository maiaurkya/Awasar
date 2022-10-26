import React from "react";
import "./Button.css";
import SocialMedia from "../socialMedia/SocialMedia";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({
  text,
  className,
  href,
  newTab,
  theme,
  icon = false,
}) {
  console.log(icon);
  return (
    <div className={className}>
      <a
        class="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {icon && <i className={`fab ${icon}`}></i>}
        {` ${text}`}
      </a>
    </div>
  );
}
