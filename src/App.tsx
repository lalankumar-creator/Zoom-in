import { useState } from "react";
import "./App.css";

const IMG_TREE = "https://www.figma.com/api/mcp/asset/48d4f52a-be8e-4e12-bc13-5071c5a95a0e";
const IMG_FIELD = "https://www.figma.com/api/mcp/asset/ea5291b4-da3c-40ad-974b-290bb8fc4d18";
const IMG_HEADER_BG = "https://www.figma.com/api/mcp/asset/3da0f69d-16fa-4167-af62-51da83d810ea";
const IMG_PROGRESS_RING = "https://www.figma.com/api/mcp/asset/0dff3539-c812-45fd-9a44-ba42465d0359";
const IMG_PROGRESS_ARC = "https://www.figma.com/api/mcp/asset/d2300ecc-7731-40c6-b9eb-3e5f59d946d4";
const IMG_LOGO_ICON = "https://www.figma.com/api/mcp/asset/3e2d7c99-8b4a-4a8e-b3f8-50a3842e43d6";
const IMG_LOGO_TEXT = "https://www.figma.com/api/mcp/asset/33f8c5dd-5465-4899-a5dd-90a51d0ad8c9";
const IMG_KEYBOARD = "https://www.figma.com/api/mcp/asset/fd73d8fc-d491-44be-a559-09208d847c78";
const IMG_BTN_BG = "https://www.figma.com/api/mcp/asset/47ff3ad6-44c6-4d83-8060-20746dc02883";
const IMG_UP_ARROW = "https://www.figma.com/api/mcp/asset/c3a6b5ca-081d-4cb0-be8d-be18879bca83";
const IMG_DOWN_ARROW = "https://www.figma.com/api/mcp/asset/e6d3db14-bcb7-400c-a7eb-307fa290df99";
const IMG_ZOOM_CURSOR = "https://www.figma.com/api/mcp/asset/5cbb9e4c-d59a-41f8-ac67-9988abb484f6";
const IMG_ZOOM_OVERLAY = "https://www.figma.com/api/mcp/asset/1cb6791f-d5de-4a11-9a01-e1b88380092c";

const OPTIONS = [
  { id: "A", label: "Option A", img: IMG_TREE, hasZoom: false },
  { id: "B", label: "Option B", img: IMG_FIELD, hasZoom: true },
];

export default function App() {
  const [selected, setSelected] = useState<string | null>(null);
  const previewImg = selected === "A" ? IMG_TREE : IMG_FIELD;

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <img src={IMG_HEADER_BG} alt="" className="header-bg" />
        <div className="header-inner">
          <div className="header-left">
            <div className="notif-badge">1</div>
          </div>
          <span className="header-title">Office Food Experience</span>
          <div className="header-right">
            <span className="show-comment">Show Comment</span>
            <div className="toggle">
              <div className="toggle-thumb" />
            </div>
            <button className="icon-btn" aria-label="Refresh">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.65 2.35A8 8 0 1 0 15 8h-2a6 6 0 1 1-1.06-3.39L10 6h5V1l-1.35 1.35z" fill="currentColor"/>
              </svg>
            </button>
            <button className="icon-btn close-btn" aria-label="Close">✕</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        <div className="question-wrap">
          <p className="question-text">
            Looking at both images below, which one feels more calming and better matches the mood you'd want from this experience?
          </p>

          <div className="content-row">
            <div className="options-col">
              <div className="options-row">
                {OPTIONS.map((opt) => {
                  const isSelected = selected === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`option-card${isSelected ? " selected" : ""}`}
                      onClick={() => setSelected(opt.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setSelected(opt.id)}
                    >
                      <div className="option-img-wrap">
                        <img src={opt.img} alt={opt.label} className="option-img" />
                        {opt.hasZoom && (
                          <>
                            <div className="zoom-box">
                              <img src={IMG_ZOOM_CURSOR} alt="" className="zoom-cursor-icon" />
                            </div>
                            <img src={IMG_ZOOM_OVERLAY} alt="" className="zoom-overlay" />
                          </>
                        )}
                      </div>
                      <div className="option-footer">
                        <span className="option-label">{opt.label}</span>
                        <span className="option-badge">{opt.id}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="zoom-preview-panel">
              <img src={previewImg} alt="Preview" className="zoom-preview-img" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="progress-ring">
          <img src={IMG_PROGRESS_RING} alt="" className="ring-base" />
          <img src={IMG_PROGRESS_ARC} alt="" className="ring-arc" />
          <span className="ring-text">20%</span>
        </div>

        <div className="footer-actions">
          <div className="brand-pill">
            <img src={IMG_LOGO_ICON} alt="" className="brand-icon" />
            <div className="brand-copy">
              <span className="made-with">Made with</span>
              <img src={IMG_LOGO_TEXT} alt="SurveySparrow" className="brand-wordmark" />
            </div>
          </div>

          <div className="keyboard-wrap">
            <img src={IMG_KEYBOARD} alt="keyboard shortcut" className="keyboard-icon" />
          </div>

          <div className="nav-btns">
            <button className="nav-btn" aria-label="Previous">
              <img src={IMG_BTN_BG} alt="" className="nav-btn-bg" />
              <img src={IMG_UP_ARROW} alt="" className="nav-arrow" />
            </button>
            <button className="nav-btn" aria-label="Next">
              <img src={IMG_BTN_BG} alt="" className="nav-btn-bg" />
              <img src={IMG_DOWN_ARROW} alt="" className="nav-arrow" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
