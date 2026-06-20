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

const bubbleCycleSeconds = 28.8;
const bubbleDurationSeconds = 6.4;
const fishMouth = { x: 590, y: 502 };

export default function Home() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <main className="ocean-stage" aria-label="Cartoon fisherman in a boat">
      <nav className="minimal-nav" aria-label="Primary navigation">
        <a className="nav-brand" href="/" aria-label="mskre home">
          mskre
        </a>
        <button className="nav-login" type="button" aria-disabled="true">
          login
        </button>
      </nav>

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
      </div>
      <span className="sr-only">A fisherman in a boat catches a fish.</span>
    </main>
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
          <motion.g
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1, x: bubble.x, y: bubble.y }
                : {
                    opacity: [0.24, 0.72, 0.96, 0.9, 0],
                    scale: [0.06, 0.22, 0.74, 1, 1.04],
                    x: [
                      fishMouth.x,
                      fishMouth.x + 6,
                      bubble.x - 8,
                      bubble.x,
                      bubble.x + 8,
                    ],
                    y: [
                      fishMouth.y,
                      fishMouth.y - 34,
                      bubble.y + 42,
                      bubble.y,
                      bubble.y - 18,
                    ],
                  }
            }
            className="text-bubble"
            initial={false}
            key={bubble.text}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            transition={
              reduceMotion
                ? undefined
                : {
                    delay: bubble.delay,
                    duration: bubbleDurationSeconds,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: bubbleCycleSeconds - bubbleDurationSeconds,
                    times: [0, 0.2, 0.52, 0.78, 1],
                  }
            }
          >
            <rect x={bubble.width / -2} y="-14" width={bubble.width} height="28" rx="14" />
            <text y="4.5" textAnchor="middle">
              {bubble.text}
            </text>
          </motion.g>
        ))}
        <motion.circle
          animate={
            reduceMotion
              ? undefined
              : {
                  cx: [fishMouth.x, fishMouth.x + 7, fishMouth.x + 14],
                  cy: [fishMouth.y, fishMouth.y - 34, fishMouth.y - 70],
                  opacity: [0, 0.78, 0],
                  r: [1, 4, 5],
                }
          }
          className="tiny-bubble"
          cx={fishMouth.x}
          cy={fishMouth.y}
          initial={false}
          r="1"
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 3.8,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: bubbleCycleSeconds - 3.8,
                }
          }
        />
        <motion.circle
          animate={
            reduceMotion
              ? undefined
              : {
                  cx: [fishMouth.x, fishMouth.x - 8, fishMouth.x - 12],
                  cy: [fishMouth.y, fishMouth.y - 42, fishMouth.y - 82],
                  opacity: [0, 0.64, 0],
                  r: [1, 3, 4],
                }
          }
          className="tiny-bubble"
          cx={fishMouth.x}
          cy={fishMouth.y}
          initial={false}
          r="1"
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: 7.2,
                  duration: 3.8,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: bubbleCycleSeconds - 3.8,
                }
          }
        />
        <motion.circle
          animate={
            reduceMotion
              ? undefined
              : {
                  cx: [fishMouth.x, fishMouth.x + 2, fishMouth.x + 5],
                  cy: [fishMouth.y, fishMouth.y - 50, fishMouth.y - 94],
                  opacity: [0, 0.68, 0],
                  r: [1, 3.5, 4.5],
                }
          }
          className="tiny-bubble"
          cx={fishMouth.x}
          cy={fishMouth.y}
          initial={false}
          r="1"
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: 14.4,
                  duration: 3.8,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: bubbleCycleSeconds - 3.8,
                }
          }
        />
      </g>
    </svg>
  );
}
