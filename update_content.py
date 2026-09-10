import json
import html
import os
import time

def spanify(text):
    out = []
    idx = 0
    for ch in text:
        if ch == ' ':
            out.append('<span style="width:0.3em"></span>')
        else:
            escaped = html.escape(ch)
            out.append(f'<span style="--index:{idx}">{escaped}</span>')
            idx += 1
    return "".join(out), idx

def make_button(href, label, color="works", target="_blank"):
    spans, last_idx = spanify(label)
    arrow_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>'
    
    return f'''<div class="_link_nnyah_90 custom-btn-wrapper" style="margin-top: 1.25rem; margin-bottom: 0.5rem;">
  <a href="{href}" class="_link_kb769_1 custom-btn" data-color="{color}" target="{target}" rel="noreferrer" aria-label="{label}">
    <div class="_body_kb769_13 custom-btn-body">
      <div class="_inner_kb769_46 custom-btn-inner">
        <span class="_text_kb769_16 custom-btn-text" aria-hidden="true">
          {spans}
          <span class="_icon_kb769_63 custom-btn-icon" style="--index:{last_idx}; margin-left: 6px;">{arrow_svg}</span>
        </span>
      </div>
    </div>
  </a>
</div>'''

def generate_html_from_config(config_path="portfolio.config.json", output_path="index.html"):
    with open(config_path, "r", encoding="utf-8") as f:
        cfg = json.load(f)

    p = cfg["personal"]
    greeting_spans, _ = spanify(p["greeting"])
    title_ja_spans, _ = spanify(p["name"])
    desc_ja_spans, _ = spanify(p["subtitle"])
    title_en_1, _ = spanify("portfolio")

    hero_about, _ = spanify("about me")
    hero_works, _ = spanify("projects")
    hero_contact, _ = spanify("contact")
    hero_finally, _ = spanify("finally")

    # Projects
    proj1 = cfg["projects"][0]
    proj1_bullets = "".join([f'<div class="project-bullet">{b}</div>' for b in proj1["bullets"]])
    proj1_tags = "".join([f'<span class="tag">{t}</span>' for t in proj1["tags"]])
    proj1_btn = make_button(proj1["action_url"], proj1["action_label"], color="works")

    proj2 = cfg["projects"][1]
    proj2_bullets = "".join([f'<div class="project-bullet">{b}</div>' for b in proj2["bullets"]])
    proj2_tags = "".join([f'<span class="tag">{t}</span>' for t in proj2["tags"]])
    proj2_btn = make_button(proj2["action_url"], proj2["action_label"], color="works")

    # Experiences (Dedicated Section)
    exp_html = []
    for exp in cfg["experience"]:
        bullets = "".join([f'<div class="project-bullet">{b}</div>' for b in exp["bullets"]])
        exp_html.append(f'''
          <div class="exp-item">
            <div class="exp-header">
              <span class="exp-role">{exp["role"]}</span>
              <span class="exp-date">{exp["period"]}</span>
            </div>
            <div class="exp-company">{exp["company"]} | {exp["location"]}</div>
            {bullets}
          </div>''')
    experiences_rendered = "\n".join(exp_html)

    # Categorized Skills Matrix
    skills = cfg.get("skills", {})
    languages_tags = "".join([f'<span class="tag">{s}</span>' for s in skills.get("languages", [])])
    data_bi_tags = "".join([f'<span class="tag">{s}</span>' for s in skills.get("data_and_bi", [])])
    db_tags = "".join([f'<span class="tag">{s}</span>' for s in skills.get("databases", [])])
    tools_tags = "".join([f'<span class="tag">{s}</span>' for s in skills.get("tools", [])])
    soft_tags = "".join([f'<span class="tag">{s}</span>' for s in skills.get("soft_skills", [])])

    # Achievements rendered as aesthetic high-contrast cards
    achievements_html = []
    for ach in cfg.get("achievements", []):
        achievements_html.append(f'''
          <div class="achievement-card">
            <div class="achievement-header">
              <span class="achievement-title">{ach["title"]}</span>
              <span class="achievement-badge">{ach["badge"]}</span>
            </div>
            <div class="achievement-category">{ach["category"]}</div>
            <p class="achievement-desc">{ach["description"]}</p>
          </div>''')
    achievements_rendered = "\n".join(achievements_html)

    # Certifications badges for footer
    cert_badges_html = "".join([f'<div class="cert-badge">{c}</div>' for c in cfg["certifications"]])

    # Contact buttons
    linkedin_url = p.get("linkedin", "https://www.linkedin.com/in/pratik-modi-11ba02283")
    github_url = p.get("github", "https://github.com/PratikModi22")
    btn_linkedin = make_button(linkedin_url, "Connect on LinkedIn", color="works")
    btn_github = make_button(github_url, "Explore GitHub", color="contact")
    btn_email = make_button(f'mailto:{p["email"]}', p["email"], color="works", target="_self")
    btn_call = make_button(f'tel:{p["phone"].replace(" ", "")}', p["phone"], color="contact", target="_self")

    cache_bust = int(time.time())

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preload" href="./_assets/models/room.glb" as="fetch" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Pinterest Aesthetic Typography: Readable Cursive (Satisfy & Alex Brush) + Modern Pinterest Body (Plus Jakarta Sans) -->
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Satisfy&display=swap" rel="stylesheet">
  
  <link rel="icon" href="./favicon.ico?v={cache_bust}" sizes="32x32">
  <title>{p["name"]} — {p["title"]} Portfolio</title>
  <meta name="description" content="Portfolio of {p["name"]} - {p["title"]}. {p["summary"]}">
  <meta name="author" content="{p["name"]}">
  <meta property="og:title" content="{p["name"]} — {p["title"]} Portfolio">
  <meta property="og:description" content="{p["summary"]}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="./og-image.png?v={cache_bust}">
  <link rel="stylesheet" href="./_resources/index.70Gwt324.css?v={cache_bust}">
  <style>
    /* ==========================================================================
       FIGMA COLOR COMBINATIONS:
       - LIGHT MODE: Combo 8 ("Ink Wash") & Combo 85 ("Frozen Lake")
       - DARK MODE: Combo 53 ("Cobalt Sky") & Combo 3 ("Blue Eclipse")
       ========================================================================== */
    body, html, main, section, div, span, p, a, button, input, textarea {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }}

    /* Ultra-Readable Pinterest Cursive for Headings & Hero Elements */
    h1, h2, h3, h4,
    ._heading2_nnyah_41,
    ._titleJa_1vzy9_8,
    ._greeting_1vzy9_7,
    ._text_18wwn_40,
    ._titleEn_1vzy9_9,
    ._main_18wwn_28,
    .section-cursive-title,
    .skill-category-title,
    .achievement-title,
    .exp-role,
    .loading-title {{
      font-family: 'Satisfy', 'Alex Brush', cursive !important;
      font-weight: 500 !important;
      letter-spacing: 0.02em !important;
    }}

    /* Loading Screen (Cobalt Navy & Ice White) */
    .loading-container {{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;
      z-index: 100000;
    }}
    .loading-title {{
      font-size: 3.8rem !important;
      color: #0f172a !important;
      letter-spacing: 0.04em !important;
      margin: 0 !important;
      text-align: center;
      font-weight: 500 !important;
      animation: pulseText 2s ease-in-out infinite alternate;
    }}
    :root[data-theme="dark"] .loading-title {{
      color: #38bdf8 !important;
      text-shadow: 0 0 35px rgba(56, 189, 248, 0.6);
    }}
    @keyframes pulseText {{
      0% {{ opacity: 0.88; transform: scale(0.98); }}
      100% {{ opacity: 1; transform: scale(1.02); }}
    }}

    ._greeting_1vzy9_7 {{
      font-size: clamp(2rem, 3.5vw, 2.8rem) !important;
      font-weight: 500;
      letter-spacing: 0.03em;
      color: #1e3a5f !important;
    }}
    :root[data-theme="dark"] ._greeting_1vzy9_7 {{
      color: #7dd3fc !important;
      text-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
    }}

    ._titleJa_1vzy9_8 {{
      font-size: clamp(3.6rem, 8.5vw, 6.2rem) !important;
      letter-spacing: 0.02em !important;
      font-weight: 600 !important;
      line-height: 1.15;
      color: #0f172a !important;
    }}
    :root[data-theme="dark"] ._titleJa_1vzy9_8 {{
      color: #f8fafc !important;
      text-shadow: 0 0 35px rgba(56, 189, 248, 0.4);
    }}

    ._text_18wwn_40 span,
    ._titleJa_1vzy9_8 span,
    ._greeting_1vzy9_7 span,
    ._titleEnLine_1vzy9_9 span {{
      font-family: 'Satisfy', 'Alex Brush', cursive !important;
    }}

    /* Subtitle: Data and Full Stack Engineer */
    ._desc_1vzy9_10 {{
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 1.15rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.12em !important;
      text-transform: uppercase !important;
      color: #2563eb !important;
      margin-top: 0.5rem !important;
      opacity: 0.95;
    }}
    :root[data-theme="dark"] ._desc_1vzy9_10 {{
      color: #38bdf8 !important;
      text-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
    }}

    /* High-contrast Section Headings (Cobalt & Slate) */
    ._heading2_nnyah_41 {{
      font-size: 2.8rem !important;
      font-weight: 500 !important;
      line-height: 1.35 !important;
      margin-top: 2.4rem;
      margin-bottom: 0.85rem;
      color: #0f2b48 !important;
      letter-spacing: 0.02em !important;
    }}
    :root[data-theme="dark"] ._heading2_nnyah_41 {{
      color: #38bdf8 !important;
      text-shadow: 0 0 25px rgba(56, 189, 248, 0.35);
    }}

    /* Clean, Modern Pinterest Sans-Serif Content */
    p,
    ._text_nnyah_60,
    .project-bullet,
    .achievement-desc,
    .achievement-category,
    .exp-company,
    .exp-date,
    .tag,
    .achievement-badge,
    .cert-badge {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    }}

    ._text_nnyah_60 {{
      font-size: 1.05rem !important;
      line-height: 1.85 !important;
      letter-spacing: 0.01em;
      color: var(--color-text) !important;
      opacity: 0.94;
    }}

    /* ========================================================
       BUTTONS: SINGLE-LAYER TEXT ONLY + AESTHETIC HOVER
       ======================================================== */
    ._hoverClone_kb769_19 {{
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }}

    ._link_kb769_1,
    .custom-btn {{
      width: auto !important;
      min-width: 210px !important;
      max-width: 100% !important;
      height: 52px !important;
      display: inline-block !important;
      vertical-align: middle !important;
    }}

    ._body_kb769_13,
    .custom-btn-body {{
      width: auto !important;
      padding: 0 1.9rem !important;
      height: 100% !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      white-space: nowrap !important;
      box-sizing: border-box !important;
      border-radius: 9999px !important;
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%) !important;
      color: #ffffff !important;
      box-shadow: 0 4px 18px rgba(37, 99, 235, 0.35) !important;
      transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease !important;
    }}

    /* Slate Charcoal button accent for Contact */
    [data-color="contact"] .custom-btn-body {{
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
      box-shadow: 0 4px 18px rgba(15, 23, 42, 0.3) !important;
      color: #ffffff !important;
    }}

    :root[data-theme="dark"] ._body_kb769_13,
    :root[data-theme="dark"] .custom-btn-body {{
      background: linear-gradient(135deg, #38bdf8 0%, #2563eb 100%) !important;
      color: #0b0f19 !important;
      box-shadow: 0 4px 22px rgba(56, 189, 248, 0.45) !important;
    }}

    :root[data-theme="dark"] [data-color="contact"] .custom-btn-body {{
      background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%) !important;
      color: #0b0f19 !important;
      box-shadow: 0 4px 22px rgba(96, 165, 250, 0.45) !important;
    }}

    ._inner_kb769_46,
    .custom-btn-inner {{
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      white-space: nowrap !important;
      position: relative !important;
      overflow: visible !important;
    }}

    ._text_kb769_16,
    .custom-btn-text {{
      display: inline-flex !important;
      align-items: center !important;
      font-size: 0.95rem !important;
      font-weight: 600 !important;
      letter-spacing: 0.03em !important;
      transform: none !important;
    }}

    .custom-btn-text span {{
      transform: none !important;
      font-family: 'Plus Jakarta Sans', sans-serif !important;
    }}

    .custom-btn:hover ._body_kb769_13 {{
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 0 8px 28px rgba(37, 99, 235, 0.5) !important;
    }}

    [data-color="contact"].custom-btn:hover ._body_kb769_13 {{
      box-shadow: 0 8px 28px rgba(15, 23, 42, 0.5) !important;
    }}

    :root[data-theme="dark"] .custom-btn:hover ._body_kb769_13 {{
      box-shadow: 0 8px 32px rgba(56, 189, 248, 0.65) !important;
    }}

    :root[data-theme="dark"] [data-color="contact"].custom-btn:hover ._body_kb769_13 {{
      box-shadow: 0 8px 32px rgba(96, 165, 250, 0.65) !important;
    }}

    .custom-btn:hover .custom-btn-icon svg {{
      transform: rotate(45deg) translate(2px, -2px);
      transition: transform 0.25s ease;
    }}

    /* Tech Tags & Skill Badges */
    .tag-container {{
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0 1.25rem 0;
    }}
    .tag {{
      display: inline-block;
      padding: 0.38rem 0.95rem;
      font-size: 0.82rem !important;
      font-weight: 600 !important;
      letter-spacing: 0.03em;
      border-radius: 9999px;
      background: rgba(15, 23, 42, 0.04);
      border: 1px solid rgba(15, 23, 42, 0.12);
      color: #0f172a;
      backdrop-filter: blur(6px);
      transition: all 0.25s ease;
    }}
    :root[data-theme="dark"] .tag {{
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: #f8fafc;
    }}
    .tag:hover {{
      transform: translateY(-2px);
      background: rgba(37, 99, 235, 0.08);
      border-color: #2563eb;
      color: #2563eb;
    }}
    :root[data-theme="dark"] .tag:hover {{
      background: rgba(56, 189, 248, 0.2);
      border-color: #38bdf8;
      color: #38bdf8;
    }}

    /* Categorized Skill Showcase Cards */
    .skill-category {{
      margin-bottom: 1.4rem;
      padding: 1.35rem 1.6rem;
      background: #ffffff;
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 18px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }}
    :root[data-theme="dark"] .skill-category {{
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(12px);
    }}
    .skill-category:hover {{
      transform: translateY(-3px);
      border-color: #2563eb;
      box-shadow: 0 10px 28px rgba(37, 99, 235, 0.14);
    }}
    :root[data-theme="dark"] .skill-category:hover {{
      border-color: #38bdf8;
      box-shadow: 0 10px 30px rgba(56, 189, 248, 0.25);
    }}
    .skill-category-title {{
      font-size: 2.2rem !important;
      font-weight: 500 !important;
      margin-bottom: 0.65rem;
      color: #0f2b48;
      letter-spacing: 0.02em;
    }}
    :root[data-theme="dark"] .skill-category-title {{
      color: #38bdf8;
      text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
    }}

    /* ========================================================
       ACHIEVEMENTS CARDS: HIGH CONTRAST & FULLY VISIBLE HEADINGS
       ======================================================== */
    .achievement-card {{
      margin-bottom: 1.4rem;
      padding: 1.4rem 1.7rem;
      background: #ffffff !important;
      border: 1px solid rgba(15, 23, 42, 0.08) !important;
      border-radius: 18px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04) !important;
      transition: all 0.3s ease;
    }}
    .achievement-card:hover {{
      transform: translateY(-3px);
      border-color: #2563eb !important;
      box-shadow: 0 10px 28px rgba(37, 99, 235, 0.16) !important;
    }}
    :root[data-theme="dark"] .achievement-card {{
      background: rgba(15, 23, 42, 0.75) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35) !important;
      backdrop-filter: blur(12px);
    }}
    :root[data-theme="dark"] .achievement-card:hover {{
      border-color: #38bdf8 !important;
      box-shadow: 0 12px 32px rgba(56, 189, 248, 0.28) !important;
    }}

    .achievement-header {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.35rem;
    }}
    
    .achievement-title {{
      font-size: 2.2rem !important;
      font-weight: 500 !important;
      color: #0f172a !important;
      letter-spacing: 0.02em !important;
      line-height: 1.3 !important;
    }}
    :root[data-theme="dark"] .achievement-title {{
      color: #f8fafc !important;
    }}

    .achievement-badge {{
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.32rem 0.9rem;
      border-radius: 9999px;
      background: rgba(37, 99, 235, 0.08) !important;
      border: 1px solid rgba(37, 99, 235, 0.25) !important;
      color: #1d4ed8 !important;
    }}
    :root[data-theme="dark"] .achievement-badge {{
      background: rgba(56, 189, 248, 0.15) !important;
      border: 1px solid rgba(56, 189, 248, 0.4) !important;
      color: #7dd3fc !important;
    }}

    .achievement-category {{
      font-size: 0.88rem;
      color: #2563eb !important;
      margin-bottom: 0.55rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}
    :root[data-theme="dark"] .achievement-category {{
      color: #38bdf8 !important;
    }}

    .achievement-desc {{
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--color-text) !important;
      opacity: 0.92;
      margin-bottom: 0;
    }}

    /* Experience Items */
    .exp-item {{
      margin-bottom: 1.6rem;
      padding: 1.35rem 1.65rem;
      background: #ffffff;
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 18px;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
      transition: all 0.3s ease;
    }}
    .exp-item:hover {{
      transform: translateY(-3px);
      border-color: #2563eb;
      box-shadow: 0 10px 28px rgba(37, 99, 235, 0.14);
    }}
    :root[data-theme="dark"] .exp-item {{
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(12px);
    }}
    :root[data-theme="dark"] .exp-item:hover {{
      border-color: #38bdf8;
      box-shadow: 0 10px 30px rgba(56, 189, 248, 0.25);
    }}
    .exp-header {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.35rem;
    }}
    .exp-role {{
      font-weight: 500;
      font-size: 2.3rem !important;
      color: #0f172a !important;
      letter-spacing: 0.02em !important;
    }}
    :root[data-theme="dark"] .exp-role {{
      color: #f8fafc !important;
    }}
    .exp-date {{
      font-size: 0.85rem;
      opacity: 0.88;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text);
    }}
    .exp-company {{
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 0.65rem;
      color: #2563eb !important;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}
    :root[data-theme="dark"] .exp-company {{
      color: #38bdf8 !important;
    }}
    .project-bullet {{
      position: relative;
      padding-left: 1.25rem;
      margin-bottom: 0.55rem;
      font-size: 0.96rem;
      line-height: 1.7;
      color: var(--color-text);
    }}
    .project-bullet::before {{
      content: "—";
      position: absolute;
      left: 0;
      top: 0;
      color: #2563eb;
      font-weight: 800;
    }}
    :root[data-theme="dark"] .project-bullet::before {{
      color: #38bdf8;
    }}
    .cert-badge {{
      display: inline-flex;
      align-items: center;
      padding: 0.42rem 0.95rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      background: rgba(37, 99, 235, 0.08);
      border: 1px solid rgba(37, 99, 235, 0.25);
      color: #1d4ed8;
    }}
    :root[data-theme="dark"] .cert-badge {{
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.35);
      color: #f8fafc;
    }}

    /* Contact Links */
    .contact-link {{
      color: #2563eb !important;
      text-decoration: underline !important;
      font-weight: 700 !important;
      transition: color 0.2s ease;
    }}
    .contact-link:hover {{
      color: #1d4ed8 !important;
    }}
    :root[data-theme="dark"] .contact-link {{
      color: #38bdf8 !important;
    }}
    :root[data-theme="dark"] .contact-link:hover {{
      color: #7dd3fc !important;
    }}
  </style>
</head>
<body>
  <!-- Loading Screen with Custom Text -->
  <div class="_loading_1dbn7_1" data-visible="true" data-js="loading">
    <div class="loading-container">
      <p class="loading-title">hi i am pratik</p>
      <div class="_progress_1dbn7_20">
        <div class="_bar_1dbn7_32" data-js="loading-bar"></div>
      </div>
    </div>
  </div>

  <main class="_main_hbhq6_1">
    <!-- Day / Night Theme Toggle -->
    <div class="_theme_gutf9_1" data-visible="false" data-js="theme-toggle">
      <div class="_iconLight_gutf9_29">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </div>
      <button class="_body_gutf9_20" data-js="theme-toggle-button" aria-label="Toggle Theme">
        <div class="_bodyHandle_gutf9_20">
          <div class="_bodyHandleInner_gutf9_73"></div>
        </div>
      </button>
      <div class="_iconDark_gutf9_30">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </div>
    </div>

    <!-- 3D WebGL Canvas Wrapper -->
    <div class="_glWrapper_a8uhw_1" data-js="gl-wrapper">
      <canvas></canvas>
    </div>

    <!-- Section Background Overlays -->
    <div class="_bg_13ykn_1" data-name="about" data-side="left" data-origin-top="false" data-visible="false" data-js="section-background">
      <div class="_scrollbarWrapper_13ykn_48">
        <div class="_scrollbar_13ykn_48" data-js="section-background-scrollbar"></div>
      </div>
    </div>
    <div class="_bg_13ykn_1" data-name="works" data-side="right" data-origin-top="false" data-visible="false" data-js="section-background">
      <div class="_scrollbarWrapper_13ykn_48">
        <div class="_scrollbar_13ykn_48" data-js="section-background-scrollbar"></div>
      </div>
    </div>
    <div class="_bg_13ykn_1" data-name="works" data-side="left" data-origin-top="false" data-visible="false" data-js="section-background">
      <div class="_scrollbarWrapper_13ykn_48">
        <div class="_scrollbar_13ykn_48" data-js="section-background-scrollbar"></div>
      </div>
    </div>
    <div class="_bg_13ykn_1" data-name="contact" data-side="left" data-origin-top="false" data-visible="false" data-js="section-background">
      <div class="_scrollbarWrapper_13ykn_48">
        <div class="_scrollbar_13ykn_48" data-js="section-background-scrollbar"></div>
      </div>
    </div>
    <div class="_bg_13ykn_1" data-name="finally" data-side="right" data-origin-top="false" data-visible="false" data-js="section-background">
      <div class="_scrollbarWrapper_13ykn_48">
        <div class="_scrollbar_13ykn_48" data-js="section-background-scrollbar"></div>
      </div>
    </div>

    <!-- Scroll Content Container -->
    <main>
      <!-- Hero / Welcome -->
      <div class="_root_1vzy9_1">
        <p class="_greeting_1vzy9_7" data-js="greeting">
          {greeting_spans}
        </p>
        <div class="_inner_1vzy9_48">
          <div class="_main_1vzy9_68">
            <h1 class="_titleJa_1vzy9_8" data-js="title-ja">
              {title_ja_spans}
            </h1>
            <p class="_desc_1vzy9_10" data-js="desc-ja">
              {desc_ja_spans}
            </p>
          </div>
          <div class="_sub_1vzy9_69">
            <p class="_titleEn_1vzy9_9">
              <span class="_titleEnLine_1vzy9_9" data-js="title-en">
                {title_en_1}
              </span>
              <span class="_titleEnLine_1vzy9_9" data-js="title-en" style="display: none;">
                <span style="--index:0"></span>
              </span>
            </p>
          </div>
        </div>
        <div class="_scrollDownWrapper_1vzy9_142">
          <div class="_scrollDown_1vzy9_142" data-active="false" data-js="scroll-down">
            <div class="_scrollDownBody_1vzy9_179">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="_margin_hlgyv_1" data-js="margin"></div>

      <!-- Section 01: About Me & Skills Matrix -->
      <section class="_section_nnyah_1" data-color="about" data-side="left" data-js="section">
        <div class="_hero_18wwn_1" data-color="about" data-active="false" data-js="hero">
          <h1 class="_main_18wwn_28">
            <span class="_text_18wwn_40">
              {hero_about}
            </span>
            <span class="_deco1_18wwn_85"></span>
            <span class="_deco2_18wwn_86"></span>
            <span class="_deco3_18wwn_87"></span>
          </h1>
          <span class="_number_18wwn_70">01</span>
        </div>
        <div class="_content_nnyah_28">
          <h2 class="_heading2_nnyah_41">Introduction & Engineering Profile</h2>
          <p class="_text_nnyah_60">
            Hi, I am {p["name"]}, based in {p["location"]}. I specialize in SQL, Python, data analytics, and database engineering, translating complex business requirements into robust, high-performance technical solutions and actionable stakeholder reporting.
          </p>

          <h2 class="_heading2_nnyah_41">Technical Solutions & Enterprise Impact</h2>
          <p class="_text_nnyah_60">
            {p["summary"]}
          </p>

          <h2 class="_heading2_nnyah_41">Education & Foundation</h2>
          <p class="_text_nnyah_60">
            {cfg["education"]["degree"]} — {cfg["education"]["institution"]} (CGPA: {cfg["education"]["cgpa"]} | {cfg["education"]["period"]}). Active technical leader, TEDx organizer, and 2× state-level hackathon winner passionate about scalable systems and data intelligence.
          </p>

          <h2 class="_heading2_nnyah_41">Skills & Technical Matrix</h2>
          
          <div class="skill-category">
            <div class="skill-category-title">Programming & Scripting Languages</div>
            <div class="tag-container" style="margin-bottom: 0;">
              {languages_tags}
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">Data Analytics & Business Intelligence</div>
            <div class="tag-container" style="margin-bottom: 0;">
              {data_bi_tags}
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">Databases & RDBMS Architecture</div>
            <div class="tag-container" style="margin-bottom: 0;">
              {db_tags}
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">Developer Tools, AI & Platforms</div>
            <div class="tag-container" style="margin-bottom: 0;">
              {tools_tags}
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-category-title">Professional & Collaborative Skills</div>
            <div class="tag-container" style="margin-bottom: 0;">
              {soft_tags}
            </div>
          </div>
        </div>
      </section>

      <div class="_margin_hlgyv_1" data-js="margin"></div>

      <!-- Section 02: Featured Projects -->
      <section class="_section_nnyah_1" data-color="works" data-side="right" data-js="section">
        <div class="_hero_18wwn_1" data-color="works" data-active="false" data-js="hero">
          <h1 class="_main_18wwn_28">
            <span class="_text_18wwn_40">
              {hero_works}
            </span>
            <span class="_deco1_18wwn_85"></span>
            <span class="_deco2_18wwn_86"></span>
            <span class="_deco3_18wwn_87"></span>
          </h1>
          <span class="_number_18wwn_70">02</span>
        </div>
        <div class="_content_nnyah_28">
          <h2 class="_heading2_nnyah_41">{proj1["title"]}</h2>
          <p class="_text_nnyah_60" style="color: #2563eb; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            {proj1["category"]}
          </p>
          {proj1_bullets}
          <div class="tag-container">
            {proj1_tags}
          </div>
          {proj1_btn}

          <h2 class="_heading2_nnyah_41" style="margin-top: 2.4rem;">{proj2["title"]}</h2>
          <p class="_text_nnyah_60" style="color: #2563eb; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            {proj2["category"]}
          </p>
          {proj2_bullets}
          <div class="tag-container">
            {proj2_tags}
          </div>
          {proj2_btn}
        </div>
      </section>

      <div class="_margin_hlgyv_1" data-js="margin"></div>

      <!-- Section 03: Professional Experience & Honors -->
      <section class="_section_nnyah_1" data-color="works" data-side="left" data-js="section">
        <div class="_content_nnyah_28">
          <h2 class="_heading2_nnyah_41" style="font-size: 3rem !important; margin-bottom: 1.2rem;">
            Professional Experience
          </h2>
          {experiences_rendered}

          <h2 class="_heading2_nnyah_41" style="font-size: 3rem !important; margin-top: 2.8rem; margin-bottom: 1.2rem;">
            Honors & Key Achievements
          </h2>
          {achievements_rendered}

          {btn_linkedin}
        </div>
      </section>

      <div class="_margin_hlgyv_1" data-js="margin"></div>

      <!-- Section 04: Contact -->
      <section class="_section_nnyah_1" data-color="contact" data-side="left" data-js="section">
        <div class="_hero_18wwn_1" data-color="contact" data-active="false" data-js="hero">
          <h1 class="_main_18wwn_28">
            <span class="_text_18wwn_40">
              {hero_contact}
            </span>
            <span class="_deco1_18wwn_85"></span>
            <span class="_deco2_18wwn_86"></span>
            <span class="_deco3_18wwn_87"></span>
          </h1>
          <span class="_number_18wwn_70">03</span>
        </div>
        <div class="_content_nnyah_28">
          <h2 class="_heading2_nnyah_41">Let's Connect & Collaborate</h2>
          <p class="_text_nnyah_60">
            I am always eager to discuss software engineering, SQL and data analytics opportunities, scalable database architectures, innovative projects, or technical collaborations. Feel free to connect directly:
          </p>
          <div style="margin: 1.5rem 0; line-height: 2.2; font-size: 1rem;">
            <p><strong>Location:</strong> {p["location"]}</p>
            <p><strong>Email:</strong> <a href="mailto:{p['email']}" class="contact-link">{p["email"]}</a></p>
            <p><strong>Phone:</strong> {p["phone"]}</p>
            <p><strong>LinkedIn:</strong> <a href="{linkedin_url}" target="_blank" rel="noreferrer" class="contact-link">{linkedin_url}</a></p>
            <p><strong>GitHub:</strong> <a href="{github_url}" target="_blank" rel="noreferrer" class="contact-link">{github_url}</a></p>
          </div>
          {btn_linkedin}
          {btn_github}
          {btn_email}
          {btn_call}
        </div>
      </section>

      <div class="_margin_hlgyv_1" data-js="margin"></div>

      <!-- Section 05: Finally / Footer -->
      <section class="_section_akfz3_1" data-js="section">
        <div class="_hero_18wwn_1" data-color="finally" data-active="false" data-js="hero">
          <h1 class="_main_18wwn_28">
            <span class="_text_18wwn_40">
              {hero_finally}
            </span>
            <span class="_deco1_18wwn_85"></span>
            <span class="_deco2_18wwn_86"></span>
            <span class="_deco3_18wwn_87"></span>
          </h1>
          <span class="_number_18wwn_70">04</span>
        </div>
        <div class="_content_akfz3_15">
          <p class="_text_akfz3_38" style="font-size: 1.15rem !important; line-height: 1.8;">
            Thank you for exploring my 3D isometric portfolio room.
            <br>
            I hope this interactive experience was engaging and demonstrated my technical capabilities!
          </p>
          <div style="margin: 1.5rem 0;">
            {cert_badges_html}
          </div>
          <p class="_copyright_akfz3_24" style="font-size: 0.95rem;">&copy; 2026 {p["name"]}. All Rights Reserved.</p>
        </div>
      </section>
    </main>
  </main>

  <!-- Custom Scrollbar -->
  <div class="_container_11oj8_1" data-scrollbar="container" data-visible="false">
    <div class="_thumb_11oj8_18" data-scrollbar="thumb"></div>
  </div>

  <!-- Three.js Interactive Room Script with cache-buster -->
  <script type="module" src="./_resources/Wrapper.astro_astro_type_script_index_0_lang.CWKz2Y_a.js?v={cache_bust}"></script>
</body>
</html>
'''

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"Successfully compiled {config_path} into {output_path} with Figma Ink Wash & Cobalt Sky palette!")

if __name__ == "__main__":
    generate_html_from_config()
