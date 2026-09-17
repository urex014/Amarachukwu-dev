'use client';

import React, { useId } from 'react';

interface SignatureSymbolProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
  mono?: boolean;
}

/**
 * SignatureSymbol: The official A+O "Interlocking Keystone" monogram
 * for Amarachukwu Onuoha.
 *
 * Geometry:
 * - Architectural Chevron Arch (A)
 * - Interlocking Geometric Torus (O) with true vector alpha keyways
 * - Floating Keystone Crossbar (Vivid Neon Green by default or monochrome)
 */
export default function SignatureSymbol({
  className = '',
  size = 20,
  color = 'currentColor',
  accentColor = '#39FF14',
  mono = false,
}: SignatureSymbolProps) {
  const reactId = useId();
  const cleanId = reactId.replace(/[^a-zA-Z0-9_-]/g, '');
  const maskId = `ao-keyway-${cleanId || 'std'}`;

  const resolvedAccent = mono ? color : accentColor;

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 select-none transition-transform duration-300 hover:scale-110 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Amarachukwu Onuoha Monogram"
      role="img"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <mask id={maskId}>
            {/* Base reveal */}
            <rect width="200" height="200" fill="white" />
            {/* Cutout behind left leg of A where it crosses over the O ring */}
            <path d="M 44,170 L 94,32" stroke="black" strokeWidth="36" strokeLinecap="square" />
            {/* Cutout behind right segment of O ring where A's right leg passes under */}
            <path d="M 124,78 A 48,48 0 0,1 154,124" stroke="black" strokeWidth="36" strokeLinecap="round" />
          </mask>
        </defs>

        {/* O Torus Ring (interlocked through keyway mask) */}
        <circle
          cx="100"
          cy="112"
          r="48"
          stroke={color}
          strokeWidth="20"
          mask={`url(#${maskId})`}
        />

        {/* A Chevron Arch: Left Leg & Top Apex (passes OVER O ring) */}
        <path
          d="M 44,170 L 94,32 H 106"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* A Chevron Arch: Right Leg (passes UNDER O ring via mask) */}
        <path
          d="M 106,32 L 156,170"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="square"
          mask={`url(#${maskId})`}
        />

        {/* O Torus Ring: Front Arc Loop (passes OVER right leg) */}
        <path
          d="M 130,84 A 48,48 0 0,1 152,128"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* The Keystone Crossbar */}
        <rect
          x="70"
          y="103"
          width="60"
          height="18"
          rx="4"
          fill={resolvedAccent}
        />
      </svg>
    </span>
  );
}
