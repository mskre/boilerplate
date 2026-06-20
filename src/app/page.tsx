"use client";

import { motion, useReducedMotion } from "framer-motion";

const bubbleMessages = [
  "currently under development",
  "under construction",
  "todo",
  "still tying knots",
  "coming soon",
];

export default function Home() {
  const reduceMotion = useReducedMotion() === true;

  const reelAnimation = reduceMotion
    ? { opacity: 1, y: 0 }
    : {
        opacity: [1, 1, 1, 0, 0, 1],
        y: ["18vh", "8vh", "-118vh", "-118vh", "18vh", "18vh"],
      };

  const reelTransition = reduceMotion
    ? undefined
    : {
        duration: 14,
        ease: "easeInOut" as const,
        repeat: Infinity,
        times: [0, 0.24, 0.7, 0.82, 0.83, 1],
      };

  return (
    <main className="landing-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="mskre home">
          mskre
        </a>
        <button className="login-button" type="button" aria-disabled="true">
          login
        </button>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">boilerplate harbor</p>
          <h1 id="hero-title">A fresh catch is still on the line.</h1>
          <p className="lede">
            This Next.js shell is ready for whatever gets built next. For now,
            the fish is handling construction updates.
          </p>
        </div>

        <div className="scene-window" aria-label="Animated fishing construction placeholder">
          <p className="sr-only">
            Currently under development. Under construction. Todo. Coming soon.
          </p>
          <div className="sun-glow" />
          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="sea-layer sea-back" />
          <div className="wave wave-one" />
          <div className="wave wave-two" />
          <div className="wave wave-three" />

          <div className="reel-anchor" aria-hidden="true">
            <motion.div
              className="reel-track"
              animate={reelAnimation}
              transition={reelTransition}
            >
              <FishingRig reduceMotion={reduceMotion} />
            </motion.div>
          </div>

          <div className="sea-layer sea-front" />
          <div className="foam foam-left" />
          <div className="foam foam-right" />
        </div>
      </section>
    </main>
  );
}

function FishingRig({ reduceMotion }: { reduceMotion: boolean }) {
  const boatAnimation = reduceMotion
    ? undefined
    : { rotate: [-1.5, 1.4, -1.5], y: [0, -8, 0] };

  const boatTransition = reduceMotion
    ? undefined
    : { duration: 4.8, ease: "easeInOut" as const, repeat: Infinity };

  const hookAnimation = reduceMotion
    ? undefined
    : { rotate: [0, -2.2, 1.6, 0], y: [0, -16, 3, 0] };

  const hookTransition = reduceMotion
    ? undefined
    : { duration: 3.6, ease: "easeInOut" as const, repeat: Infinity };

  return (
    <svg className="fishing-rig" viewBox="0 0 760 650">
      <motion.g
        className="boat-rock"
        animate={boatAnimation}
        transition={boatTransition}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path
          className="boat-shadow"
          d="M112 300 C205 344 468 357 628 296 C585 371 196 387 112 300Z"
        />
        <path
          className="boat-hull"
          d="M96 245 C172 301 483 315 650 238 C626 285 585 324 519 341 C389 375 201 341 142 300 C120 285 105 266 96 245Z"
        />
        <path
          className="boat-rim"
          d="M126 239 C246 270 492 270 624 231"
        />
        <path
          className="boat-stripe"
          d="M169 292 C280 321 435 324 555 289"
        />
        <path className="oar" d="M171 249 C91 257 58 290 37 341" />

        <g className="fisherman">
          <path className="leg" d="M326 229 C365 251 405 257 451 242" />
          <path
            className="coat"
            d="M293 180 C316 155 365 158 388 188 L374 235 L308 232Z"
          />
          <circle className="head" cx="337" cy="141" r="25" />
          <path
            className="beard"
            d="M320 151 C328 179 351 181 363 154 C348 168 331 167 320 151Z"
          />
          <path
            className="hat-brim"
            d="M291 122 C317 107 363 106 392 123 C358 136 321 137 291 122Z"
          />
          <path
            className="hat-crown"
            d="M315 114 C326 86 361 87 374 116 C356 123 333 124 315 114Z"
          />
          <path
            className="arm"
            d="M374 184 C410 160 428 143 452 119"
          />
          <circle className="hand" cx="452" cy="119" r="8" />
          <circle className="reel" cx="435" cy="145" r="13" />
          <path className="rod" d="M447 116 C523 70 602 84 672 128" />
        </g>
      </motion.g>

      <path className="line" d="M672 128 C703 218 660 330 608 405" />

      <motion.g
        className="hook-load"
        animate={hookAnimation}
        transition={hookTransition}
        style={{ originX: "78%", originY: "63%" }}
      >
        <path className="hook" d="M608 405 C630 425 611 451 590 437" />
        <g className="fish" transform="translate(600 416)">
          <path className="fish-tail" d="M-54 0 L-94 -28 L-82 0 L-94 28Z" />
          <ellipse className="fish-body" cx="0" cy="0" rx="58" ry="30" />
          <path className="fish-belly" d="M-29 15 C1 32 39 22 54 4" />
          <circle className="fish-eye" cx="32" cy="-9" r="5" />
          <path className="fish-mouth" d="M48 7 C59 10 59 20 48 22" />
          <path className="fish-fin" d="M-12 -5 C8 -24 27 -20 17 -2" />
        </g>

        <g className="bubble-stack">
          {bubbleMessages.map((message, index) => (
            <g
              className={`bubble-message bubble-message-${index + 1}`}
              key={message}
            >
              <rect width="240" height="42" rx="21" />
              <text x="120" y="27" textAnchor="middle">
                {message}
              </text>
            </g>
          ))}
        </g>

        <g className="screen-catch" transform="translate(432 478)">
          <path className="screen-tether" d="M148 -33 L148 -3" />
          <rect className="screen-frame" width="296" height="150" rx="26" />
          <rect className="screen-top" x="17" y="17" width="262" height="28" rx="14" />
          <circle className="screen-dot" cx="42" cy="31" r="5" />
          <circle className="screen-dot" cx="61" cy="31" r="5" />
          <circle className="screen-dot" cx="80" cy="31" r="5" />
          <path className="screen-wave" d="M30 87 C75 59 105 119 151 88 C194 58 223 116 266 82" />
          <text className="screen-title" x="148" y="76" textAnchor="middle">
            site placeholder
          </text>
          <text className="screen-subtitle" x="148" y="122" textAnchor="middle">
            reeling in soon
          </text>
        </g>
      </motion.g>
    </svg>
  );
}
