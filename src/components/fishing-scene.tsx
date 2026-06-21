"use client";

import { motion, useReducedMotion } from "framer-motion";

const splashRings = [
  "splash-ring splash-ring-1",
  "splash-ring splash-ring-2",
  "splash-ring splash-ring-3",
  "splash-ring splash-ring-4",
  "splash-ring splash-ring-5",
  "splash-ring splash-ring-6",
];

const constructionBubbles = [
  { text: "under construction", width: 138, x: 666, y: 284, delay: 0 },
  { text: "being made", width: 98, x: 626, y: 346, delay: 7.2 },
  { text: "under development", width: 138, x: 676, y: 404, delay: 14.4 },
  { text: "soon", width: 54, x: 626, y: 456, delay: 21.6 },
];

const mouthPuffs = [
  { x: 7, y: -64, size: 5, delay: 0 },
  { x: -10, y: -74, size: 4, delay: 0.45 },
  { x: 6, y: -68, size: 4.5, delay: 7.2 },
  { x: -8, y: -78, size: 3.5, delay: 7.65 },
  { x: 9, y: -70, size: 5, delay: 14.4 },
  { x: -7, y: -82, size: 4, delay: 14.85 },
  { x: 5, y: -62, size: 4, delay: 21.6 },
  { x: -9, y: -72, size: 3.5, delay: 22.05 },
];

const bubbleCycleSeconds = 28.8;
const bubbleMotionKeyTimes = "0;0.24;1";
const bubbleOpacityKeyTimes = "0;0.01;0.12;0.2;0.24;1";
const bubbleScaleKeyTimes = "0;0.14;0.24;1";
const fishMouth = { x: 590, y: 502 };

type ConstructionBubble = (typeof constructionBubbles)[number];

function getBubblePath({ x, y }: ConstructionBubble) {
  return [fishMouth, { x, y }, { x, y }]
    .map((point) => `${point.x} ${point.y}`)
    .join("; ");
}

export function FishingScene() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <div className="scene" aria-hidden="true">
      <div className="splash-field">
        {splashRings.map((className, index) => (
          <motion.span
            className={className}
            key={className}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0, 0.72, 0], scale: [0.45, 1, 1.35] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    delay: index * 0.42,
                    duration: 2.8,
                    ease: "easeOut",
                    repeat: Infinity,
                  }
            }
          />
        ))}
      </div>

      <CartoonFishingBoat reduceMotion={reduceMotion} />
      <span className="sr-only">A fisherman in a boat catches a fish.</span>
    </div>
  );
}

function CartoonFishingBoat({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <svg className="fishing-illustration" viewBox="0 0 760 620">
      <defs>
        <filter id="soft-ink" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence
            baseFrequency="0.012"
            numOctaves="2"
            result="grain"
            seed="11"
            type="fractalNoise"
          />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="1.4" />
        </filter>
      </defs>

      <g className="distant-reeds">
        <path d="M97 353 L97 318" />
        <path d="M111 357 L116 331" />
        <path d="M651 358 L651 326" />
        <path d="M666 357 L673 336" />
      </g>

      <g className="boat-reflection" filter="url(#soft-ink)">
        <path d="M222 354 C297 371 450 373 534 350" />
        <path d="M246 370 C315 388 442 390 501 368" />
        <path d="M283 388 C329 399 419 400 463 386" />
        <path d="M304 347 C306 389 303 424 298 456" />
        <path d="M322 351 C323 391 322 428 317 464" />
      </g>

      <g className="water-lines">
        <path d="M171 355 C231 347 271 363 333 354 C404 342 462 365 581 352" />
        <path d="M203 375 C270 368 315 383 383 374 C439 366 487 381 563 371" />
        <path d="M257 397 C307 391 354 403 413 396 C472 388 510 398 556 392" />
      </g>

      <g className="boat-silhouette" filter="url(#soft-ink)">
        <path d="M214 309 C278 331 457 333 548 300 C536 329 500 350 442 359 C350 374 254 352 224 325 C218 319 215 313 214 309Z" />
        <path d="M225 306 C303 320 462 321 556 295 C548 311 538 324 526 334 C438 346 312 345 233 326Z" />
      </g>

      <g className="lonely-fisherman" filter="url(#soft-ink)">
        <path className="hidden-arm" d="M345 246 L412 205" />
        <path className="body" d="M306 214 C321 196 352 197 367 218 C370 249 363 281 350 304 C329 308 306 300 294 284 C293 254 296 231 306 214Z" />
        <path className="lap" d="M294 283 C316 298 349 300 371 285 C367 305 352 318 327 318 C306 318 295 305 294 283Z" />
        <path className="face-shadow" d="M309 187 C317 171 346 167 360 181 C364 194 356 205 339 209 C322 209 311 201 309 187Z" />
        <path className="rain-hat-brim" d="M278 180 C307 154 361 150 397 175 C368 197 314 201 278 180Z" />
        <path className="rain-hat-crown" d="M310 161 C322 132 370 132 383 163 C364 177 331 178 310 161Z" />
        <path className="hat-crease" d="M313 162 C335 171 361 171 381 162" />
        <path className="hand" d="M407 199 C418 192 428 205 418 215 C407 223 397 207 407 199Z" />
      </g>

      <g className="rod-rig" filter="url(#soft-ink)">
        <path className="rod" d="M414 207 L577 124" />
        <path className="fishing-line" d="M577 124 L577 485" />
        <path className="hook" d="M577 485 C590 498 574 513 560 499" />
      </g>

      <g className="fish-catch" filter="url(#soft-ink)">
        <path className="fish-tail" d="M516 497 L488 477 L498 501 L486 524Z" />
        <path className="fish-body" d="M510 500 C525 474 569 478 588 503 C567 529 526 529 510 500Z" />
        <path className="fish-mark" d="M526 513 C543 526 570 521 584 504" />
        <circle className="fish-eye" cx="571" cy="495" r="4" />
      </g>

      <g className="construction-bubbles" filter="url(#soft-ink)">
        {constructionBubbles.map((bubble) => (
          <g
            className="text-bubble"
            key={bubble.text}
            opacity={reduceMotion ? 1 : 0}
            transform={`translate(${reduceMotion ? bubble.x : fishMouth.x} ${
              reduceMotion ? bubble.y : fishMouth.y
            })`}
          >
            {!reduceMotion && (
              <>
                <animate
                  attributeName="opacity"
                  begin={`${bubble.delay}s`}
                  calcMode="linear"
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes={bubbleOpacityKeyTimes}
                  repeatCount="indefinite"
                  values="0;0.78;0.94;0.64;0;0"
                />
                <animateTransform
                  attributeName="transform"
                  begin={`${bubble.delay}s`}
                  calcMode="linear"
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes={bubbleMotionKeyTimes}
                  repeatCount="indefinite"
                  type="translate"
                  values={getBubblePath(bubble)}
                />
              </>
            )}
            <g transform={reduceMotion ? undefined : "scale(0.32)"}>
              {!reduceMotion && (
                <animateTransform
                  attributeName="transform"
                  begin={`${bubble.delay}s`}
                  calcMode="linear"
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes={bubbleScaleKeyTimes}
                  repeatCount="indefinite"
                  type="scale"
                  values="0.42;0.9;1;1"
                />
              )}
              <rect x={bubble.width / -2} y="-14" width={bubble.width} height="28" rx="14" />
              <text y="4.5" textAnchor="middle">
                {bubble.text}
              </text>
            </g>
          </g>
        ))}
        {mouthPuffs.map((puff) => (
          <circle
            className="tiny-bubble"
            cx={fishMouth.x}
            cy={fishMouth.y}
            key={`${puff.delay}-${puff.x}`}
            opacity="0"
            r="1"
          >
            {!reduceMotion && (
              <>
                <animate
                  attributeName="opacity"
                  begin={`${puff.delay}s`}
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes="0;0.05;0.14;0.18;1"
                  repeatCount="indefinite"
                  values="0;0.72;0.58;0;0"
                />
                <animate
                  attributeName="cx"
                  begin={`${puff.delay}s`}
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes="0;0.05;0.14;0.18;1"
                  repeatCount="indefinite"
                  values={`${fishMouth.x};${fishMouth.x + puff.x / 2};${
                    fishMouth.x + puff.x
                  };${fishMouth.x + puff.x};${fishMouth.x + puff.x}`}
                />
                <animate
                  attributeName="cy"
                  begin={`${puff.delay}s`}
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes="0;0.05;0.14;0.18;1"
                  repeatCount="indefinite"
                  values={`${fishMouth.y};${fishMouth.y + puff.y / 2};${
                    fishMouth.y + puff.y
                  };${fishMouth.y + puff.y};${fishMouth.y + puff.y}`}
                />
                <animate
                  attributeName="r"
                  begin={`${puff.delay}s`}
                  dur={`${bubbleCycleSeconds}s`}
                  keyTimes="0;0.05;0.14;0.18;1"
                  repeatCount="indefinite"
                  values={`1;${Math.max(2, puff.size - 1)};${puff.size};${puff.size};${puff.size}`}
                />
              </>
            )}
          </circle>
        ))}
      </g>
    </svg>
  );
}
