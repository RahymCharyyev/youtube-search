import { forwardRef, memo } from "react";
import type { SVGProps } from "react";

export const SvgGrid = memo(
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(() => (
    <svg width="55px" height="55px" viewBox="0 0 55 55" fill="none">
      <path
        d="M10 5H5V10H10V5Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 5H14V10H19V5Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 14H14V19H19V14Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 14H5V19H10V14Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ))
);
