import React, { useState, useEffect, useMemo } from "react";
import {
  Plus, Pencil, Trash2, X, Search, Gauge, Layers, Users, AlertTriangle,
  Calendar, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Settings, Maximize2, RotateCcw,
  ChevronsUp, ChevronsDown, MessageSquare, Megaphone, Network,
  Target, Briefcase, Clock, FileText
} from "lucide-react";

/* ============================ Design tokens ============================ */
const C_BLUE = "#4a9fe0", C_GREEN = "#46c785", C_PURPLE = "#8b7ff0", C_RED = "#e5557a", C_AMBER = "#e0a23c";
const CAT = { Manager: "#b45309", Expert: "#7c3aed", Coordinator: "#1d4ed8", Staf: "#0d9488" };
const DISC = { CIVIL: "#92400e", MECHANICAL: "#1e40af", PIPING: "#047857", ELECTRICAL: "#b45309", INSTRUMENT: "#6d28d9" };
const JC_COLOR = { Pemerintah: "#1d4ed8", BUMN: "#0d9488", Swasta: "#b45309", Lainnya: "#6b7280" };
const JOBDESK_COLOR = { Estimator: "#1d4ed8", Compiler: "#7c3aed", SCM: "#0d9488", Risk: "#c2143b", Scheduler: "#b45309", Construction: "#475569" };
const ROLE_CATS = ["Expert", "Compiler", "Estimator", "SCM"];
const ROLE_COLOR = { Expert: "#7c3aed", Compiler: "#b45309", Estimator: "#1d4ed8", SCM: "#0d9488" };
const HASIL = { proses: { label: "Proses", color: "#2563eb" }, menang: { label: "Menang", color: "#16a34a" }, kalah: { label: "Kalah", color: "#c2143b" }, pasif: { label: "Pasif", color: "#6b7280" } };
const PRIO_RANK = { high: 0, normal: 1, low: 2 };

const JENIS_CLIENT = ["Pemerintah", "BUMN", "Swasta", "Lainnya"];
const STATUS = ["KSO", "JO", "Mandiri"];
const FORMAT = ["1 Sampul", "2 Sampul"];
const STRUKTURAL = ["Manager", "Expert", "Coordinator", "Staf"];
const JOBDESK = ["Compiler", "Estimator", "SCM", "Risk", "Scheduler", "Construction"];
const DISIPLIN = ["CIVIL", "MECHANICAL", "PIPING", "ELECTRICAL", "INSTRUMENT"];

/* ============================ Stylesheet ============================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
:root{
  --ink:#131826; --ink-2:#272f42; --ink-3:#4b5468;
  --paper:#eef0f4; --surface:#ffffff; --surface-2:#f7f8fa;
  --line:#e1e4ec; --line-2:#cfd3de; --muted:#6b7280; --muted-2:#8a90a0;
  --crit:#c2143b;--crit-bg:#fde7ec; --soon:#d9560b;--soon-bg:#fdecdf;
  --warn:#b07d00;--warn-bg:#fbf3da; --ok:#157a4a;--ok-bg:#e3f3ea; --none:#737b8c;--none-bg:#eef0f4;
}
*{box-sizing:border-box}
.tm{font-family:-apple-system,"Segoe UI",Roboto,system-ui,sans-serif;color:var(--ink);background:var(--paper);
  min-height:100vh;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.45}
.tm-dark{background:#0b1120}.tm-dark .wrap{background:#0b1120}
.num{font-family:'Sora',-apple-system,"Segoe UI",system-ui,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:0}

/* rail */
.rail{background:var(--ink);color:#fff;padding:13px 22px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;border-bottom:1px solid #000}
.brand{display:flex;align-items:center;gap:11px}
.brand .mark{width:34px;height:34px;border-radius:8px;background:#fff;color:var(--ink);display:grid;place-items:center;font-weight:800;font-size:13px}
.brand h1{font-size:16px;font-weight:700;letter-spacing:.01em;margin:0;line-height:1.1}
.brand p{margin:1px 0 0;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#9aa2b6;font-weight:600}

/* kpi band (boxed, light + colored) */
.kpi-band{background:#fff;border-bottom:1px solid var(--line);padding:14px 22px;display:grid;grid-template-columns:repeat(6,1fr);gap:11px}
@media(max-width:1080px){.kpi-band{grid-template-columns:repeat(3,1fr)}}
@media(max-width:600px){.kpi-band{grid-template-columns:repeat(2,1fr)}}
.kbox{border:1px solid var(--line);border-left:4px solid var(--ink);border-radius:9px;padding:10px 13px}
.kbox .l{font-size:9px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;display:flex;align-items:center;gap:5px}
.kbox .v{font-size:18px;font-weight:700;color:var(--ink);margin-top:5px;line-height:1.15}
.kbox .x{font-size:10.5px;color:var(--muted);margin-top:2px}
.kbox.warn .v{color:#b45309}.kbox.crit .v{color:#c2143b}.kbox.ok .v{color:#157a4a}

/* tabs */
.tabs{display:flex;gap:2px;background:var(--ink);padding:0 18px}
.tab{appearance:none;background:none;border:0;color:#aab1c4;font:inherit;font-weight:600;font-size:13px;padding:11px 16px 13px;
  cursor:pointer;display:flex;align-items:center;gap:7px;border-bottom:2px solid transparent;transition:.12s}
.tab:hover{color:#fff}.tab.active{color:#fff;border-bottom-color:#fff}
.tab .cnt{font-size:11px;background:#2c3346;border-radius:20px;padding:1px 7px;min-width:18px;text-align:center}
.tab.active .cnt{background:#fff;color:var(--ink)}

.wrap{max-width:1280px;margin:0 auto;padding:20px 22px}

/* light panel */
.panel{background:var(--surface);border:1px solid var(--line);border-radius:12px;overflow:hidden}
.panel-head{display:flex;align-items:center;gap:10px;padding:13px 16px;border-bottom:1px solid var(--line)}
.panel-head h2{font-size:14px;font-weight:700;margin:0;display:flex;align-items:center;gap:8px}
.panel-head .sub{font-size:12px;color:var(--muted);margin-left:auto}

.btn{appearance:none;border:1px solid var(--line-2);background:var(--surface);color:var(--ink);font:inherit;font-weight:600;font-size:13px;
  border-radius:8px;padding:8px 13px;cursor:pointer;display:inline-flex;align-items:center;gap:7px;transition:.12s;white-space:nowrap}
.btn:hover{border-color:var(--ink-3);background:var(--surface-2)}
.btn-primary{background:var(--ink);border-color:var(--ink);color:#fff}.btn-primary:hover{background:var(--ink-2)}
.btn-sm{padding:6px 10px;font-size:12px;border-radius:7px}
.icon-btn{appearance:none;border:1px solid transparent;background:none;border-radius:7px;padding:6px;cursor:pointer;color:var(--muted);display:grid;place-items:center;transition:.12s}
.icon-btn:hover{background:var(--surface-2);color:var(--ink);border-color:var(--line)}
.icon-btn.danger:hover{color:var(--crit);background:var(--crit-bg);border-color:transparent}

/* table */
.t-scroll{overflow-x:auto}
table.t{width:100%;border-collapse:collapse;min-width:1180px}
.t th{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);font-weight:700;text-align:left;padding:9px 11px;border-bottom:1px solid var(--line);background:var(--surface-2)}
.t td{padding:11px 11px;border-bottom:1px solid var(--line);vertical-align:top}
.t tr:last-child td{border-bottom:0}.t tr:hover td{background:var(--surface-2)}
.t .nama{font-weight:600;max-width:240px}
.t .ket{color:var(--muted);font-size:12px;max-width:180px}
.grp-bar{display:flex;align-items:center;gap:9px;padding:10px 14px;background:var(--surface-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.grp-bar .ic{width:22px;height:22px;border-radius:6px;display:grid;place-items:center;background:var(--ink);color:#fff}
.grp-bar h3{font-size:12.5px;font-weight:700;margin:0;text-transform:uppercase;letter-spacing:.05em}
.grp-bar .meta{margin-left:auto;font-size:12px;color:var(--muted)}

.chip{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:700;padding:3px 8px;border-radius:20px;white-space:nowrap}
.chip--crit{background:var(--crit-bg);color:var(--crit)}.chip--soon{background:var(--soon-bg);color:var(--soon)}
.chip--warn{background:var(--warn-bg);color:var(--warn)}.chip--ok{background:var(--ok-bg);color:var(--ok)}.chip--none{background:var(--none-bg);color:var(--none)}
.badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.03em;padding:2px 7px;border-radius:5px;border:1px solid var(--line-2);color:var(--ink-3);background:var(--surface-2)}
.fmt{font-size:12px;color:var(--ink-3);font-weight:600;white-space:nowrap}
/* samakan semua teks numerik/label di tabel tender dengan RKAP (Sora) */
.t .num,.t .chip,.t .fmt,.t .badge,.t .jc,.t .prio{font-family:'Sora',-apple-system,"Segoe UI",system-ui,sans-serif}
.nm-line{display:flex;align-items:center;gap:7px}
.prio{display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:800;letter-spacing:.03em;padding:2px 7px;border-radius:5px;flex:0 0 auto}
.prio-high{color:#c2143b;background:#fde7ec}
.prio-low{color:#0d7a6e;background:#dcf3ef}
.lnk{appearance:none;border:0;background:none;color:#1d4ed8;font:inherit;font-size:11.5px;font-weight:600;cursor:pointer;padding:0;display:inline-flex;align-items:center;gap:4px;margin-top:4px}
.lnk:hover{text-decoration:underline}
.act-info{position:relative}
.act-info .cnt{position:absolute;top:-3px;right:-3px;background:#1d4ed8;color:#fff;font-size:8px;font-weight:700;min-width:13px;height:13px;border-radius:7px;display:grid;place-items:center;padding:0 2px}
/* update list (modal + ringkasan) */
.upd{display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)}
.upd:last-child{border-bottom:0}
.upd .when{font-size:10.5px;font-weight:700;color:#1d4ed8;white-space:nowrap;flex:0 0 auto;width:74px}
.upd .body{flex:1;font-size:13px;color:var(--ink-2);line-height:1.45}
.upd-r{display:flex;align-items:flex-start;gap:9px;padding:9px 0;border-bottom:1px solid var(--line);cursor:pointer}
.upd-r:last-child{border-bottom:0}.upd-r:hover .ut{color:#000}
.upd-r .dotw{width:8px;height:8px;border-radius:50%;background:#1d4ed8;margin-top:5px;flex:0 0 auto}
.upd-r .ut{font-size:12.5px;color:var(--ink-2);line-height:1.4}
.upd-r .um{font-size:11px;color:var(--muted);margin-top:2px}
.ket-cell{cursor:pointer}.ket-cell:hover{color:var(--ink)}
.hasil-sel{font-family:'Sora',-apple-system,"Segoe UI",system-ui,sans-serif;font-size:11px;font-weight:700;border:1px solid;border-radius:6px;padding:4px 6px;cursor:pointer;outline:none}
.sub-line{color:var(--muted);font-weight:400;font-size:11.5px;margin-top:2px}

.av-stack{display:flex}.av-stack .av{margin-left:-7px;border:2px solid var(--surface)}.av-stack .av:first-child{margin-left:0}
.av{width:26px;height:26px;border-radius:50%;background:var(--ink);color:#fff;font-size:10px;font-weight:700;display:grid;place-items:center;flex:0 0 auto}

/* tender tab layout */
.tender-layout{display:flex;gap:18px;align-items:flex-start}
@media(max-width:980px){.tender-layout{flex-direction:column}}
.rkap-col{width:340px;flex:0 0 auto}@media(max-width:980px){.rkap-col{width:100%}}
.tender-col{flex:1;min-width:0}
.rkap-prog{padding:14px 16px;border-bottom:1px solid var(--line);background:var(--surface-2)}
.rkap-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;margin-bottom:16px}
@media(max-width:760px){.rkap-summary{grid-template-columns:1fr 1fr}}
.rkap-sumbox{background:#fff;border:1px solid var(--line);border-left:4px solid var(--ink);border-radius:10px;padding:11px 14px}
.rkap-sumbox .l{font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.rkap-sumbox .v{font-size:17px;font-weight:700;color:var(--ink);margin-top:5px}
.tn-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:13px}
.tn-cell{background:var(--surface-2);border:1px solid var(--line);border-left:3px solid var(--ink);border-radius:9px;padding:9px 12px}
.tn-l{font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.tn-v{font-size:15px;font-weight:700;color:var(--ink);margin-top:3px}
.tn-s{font-size:11px;color:var(--muted);margin-top:1px}
.tn-status{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.tn-chip{font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px;color:#fff}.tn-chip b{font-weight:800}
.rk-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}
@media(max-width:760px){.rk-grid{grid-template-columns:1fr 1fr}}
.rk-box{background:var(--surface-2);border:1px solid var(--line);border-left:3px solid var(--ink);border-radius:9px;padding:9px 12px}
.rk-box .rk-l{font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.rk-box .rk-v{font-size:16px;font-weight:700;color:var(--ink);margin-top:3px}
.rk-box .rk-x{font-size:10.5px;color:var(--muted);margin-top:1px}
.rk-prog{margin-top:14px}
.rk-prog-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}
.rk-track{height:14px;border-radius:8px;background:#eef1f5;overflow:hidden;display:flex}
.rk-track .rk-real{background:#157a4a;height:100%}
.rk-track .rk-pot{background:#a3d9bd;height:100%}
.rk-legend{display:flex;gap:16px;margin-top:7px;font-size:11px;color:var(--muted)}
.rk-legend span{display:inline-flex;align-items:center;gap:5px}.rk-legend i{width:10px;height:10px;border-radius:3px;display:inline-block}
.rk-split{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:16px}
@media(max-width:760px){.rk-split{grid-template-columns:1fr}}
.rk-hh{font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-bottom:9px}
.rk-li{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--line);cursor:pointer}
.rk-li:hover .rk-li-n{color:var(--ink)}
.rk-li .dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto}
.rk-li-n{flex:1;min-width:0;font-size:12.5px;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rk-li-v{font-size:12px;font-weight:700;color:#157a4a}
.rk-stat{display:flex;align-items:center;gap:9px;margin-bottom:11px}
.rk-stat-l{font-size:11.5px;color:var(--ink-2);width:120px;flex:0 0 auto}
.rk-mini{flex:1;height:8px;border-radius:5px;background:#eef1f5;overflow:hidden}.rk-mini i{display:block;height:100%}
.rk-stat-v{font-size:11.5px;font-weight:700;color:var(--muted);width:40px;text-align:right;flex:0 0 auto}
.rkap-prog .lab{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.rkap-prog .big{font-size:19px;font-weight:700;margin-top:3px}
.rkap-bar{height:11px;border-radius:6px;background:#fff;border:1px solid var(--line-2);overflow:hidden;margin-top:9px}
.rkap-bar i{display:block;height:100%;background:var(--ink)}
.rkap-item{display:flex;align-items:flex-start;gap:10px;padding:10px 16px;border-bottom:1px solid var(--line)}
.rkap-item:last-child{border-bottom:0}.rkap-item:hover{background:var(--surface-2)}
.rkap-item .nm{font-size:13px;font-weight:600;flex:1;min-width:0}
.rkap-itop{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.rkap-itop .nm{font-size:13px;font-weight:600;flex:1;min-width:0}
.rkap-val{font-size:12.5px;font-weight:700;color:var(--ink);white-space:nowrap;flex:0 0 auto}
.rkap-item .nl{font-size:12px;color:var(--ink-3);margin-top:2px}

/* personel (light) */
.psec{margin-bottom:16px;border-radius:11px;overflow:hidden;border:1px solid var(--line)}
.psec-h{display:flex;align-items:center;gap:9px;padding:10px 15px;color:#fff;font-weight:700;font-size:13.5px}
.psec-h .pc{margin-left:auto;font-size:12px;font-weight:700;background:rgba(255,255,255,.22);padding:1px 9px;border-radius:20px}
.psub{display:flex;align-items:center;gap:10px;padding:10px 15px;background:var(--surface-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.psub .sq{width:6px;height:18px;border-radius:3px;flex:0 0 auto}
.psub .nm{font-size:12px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-2)}
.psub .cnt{font-size:11px;font-weight:700;color:var(--ink-3);background:#fff;border:1px solid var(--line-2);border-radius:20px;padding:1px 9px}
.disc-grp{border-left:3px solid var(--line-2);margin-left:15px}
.psubsub{display:flex;align-items:center;gap:10px;padding:9px 14px;background:#fff;border-bottom:1px solid var(--line)}
.psubsub .chip2{font-size:10.5px;font-weight:800;letter-spacing:.05em;color:#fff;padding:3px 11px;border-radius:6px}
.psubsub .cnt{font-size:11px;font-weight:600;color:var(--muted)}
.psubsub .ln{flex:1;height:1px;background:var(--line)}
.prow{display:flex;align-items:center;gap:12px;padding:11px 15px;border-bottom:1px solid var(--line);background:var(--surface)}
.prow:last-child{border-bottom:0}.prow:hover{background:var(--surface-2)}
.pav{width:38px;height:38px;border-radius:10px;display:grid;place-items:center;color:#fff;font-weight:700;font-size:12px;flex:0 0 auto}
.pmeta{min-width:0;flex:1}.pname{font-weight:600;font-size:13.5px}
.pname span{color:var(--muted);font-weight:500;font-size:12px}
.psb{font-size:11.5px;color:var(--muted);margin-top:1px}
.ptags{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}
.ptag{font-size:10px;font-weight:700;padding:2px 7px;border-radius:5px;color:#fff;border:0}
.ptag.disc{color:#fff;border:0}
.pwl{font-size:11px;color:var(--muted);white-space:nowrap;text-align:right}.pwl b{color:var(--ink)}

.empty{text-align:center;padding:38px 20px;color:var(--muted)}
/* org chart */
.org-scroll{overflow-x:auto;padding:18px 8px 6px;background:var(--surface-2);border:1px solid var(--line);border-radius:12px}
.tree{display:inline-flex;min-width:100%;justify-content:center}
.tree ul{display:flex;justify-content:center;padding-top:18px;position:relative;margin:0;list-style:none}
.tree li{list-style:none;position:relative;padding:18px 8px 0;display:flex;flex-direction:column;align-items:center}
.tree li::before,.tree li::after{content:"";position:absolute;top:0;right:50%;border-top:2px solid var(--line-2);width:50%;height:18px}
.tree li::after{right:auto;left:50%;border-left:2px solid var(--line-2)}
.tree li:only-child::before,.tree li:only-child::after{display:none}
.tree li:only-child{padding-top:18px}
.tree li:first-child::before,.tree li:last-child::after{border:0}
.tree li:last-child::before{border-right:2px solid var(--line-2);border-radius:0 6px 0 0}
.tree li:first-child::after{border-radius:6px 0 0 0}
.tree ul ul::before{content:"";position:absolute;top:0;left:50%;border-left:2px solid var(--line-2);width:0;height:18px}
.tree>li:only-child::before,.tree>li::before,.tree>li::after{display:none}
.node-wrap{display:flex;align-items:flex-start;gap:8px}
.node{background:#fff;border:1px solid var(--line);border-top:3px solid var(--ink);border-radius:10px;padding:9px 12px;min-width:150px;max-width:180px;text-align:center;box-shadow:0 1px 2px rgba(20,30,50,.05)}
.node-av{width:34px;height:34px;border-radius:9px;color:#fff;font-weight:700;font-size:12px;display:grid;place-items:center;margin:0 auto 6px}
.node-nm{font-size:12.5px;font-weight:700;color:var(--ink);line-height:1.2}
.node-jb{font-size:10.5px;color:var(--muted);margin-top:2px}
.node-tag{font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#fff;border-radius:4px;padding:1px 6px;display:inline-block;margin-top:5px}
.node-staf{display:flex;flex-direction:column;gap:6px;padding-top:6px}
.staf-box{background:#fff;border:1px dashed var(--line-2);border-left:3px solid var(--ink-3);border-radius:8px;padding:5px 9px;font-size:11px;font-weight:600;color:var(--ink-2);white-space:nowrap;position:relative}
.staf-box::before{content:"staf";position:absolute;top:-7px;left:8px;background:#fff;font-size:8px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--muted-2);padding:0 3px}
.org-edit{margin-top:16px}
.org-edit table{width:100%;border-collapse:collapse}
.org-edit th{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);font-weight:700;text-align:left;padding:8px 10px;border-bottom:1px solid var(--line);background:var(--surface-2)}
.org-edit td{padding:8px 10px;border-bottom:1px solid var(--line);vertical-align:middle}
.org-edit select{border:1px solid var(--line-2);border-radius:7px;padding:6px 9px;font:inherit;font-size:12.5px;background:#fff;color:var(--ink);outline:none;width:100%}
.org-edit select:focus{border-color:var(--ink)}
.empty .ic{width:46px;height:46px;border-radius:12px;background:var(--surface-2);display:grid;place-items:center;margin:0 auto 12px;color:var(--muted-2)}

/* light dashboard with colored cards */
.dash{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:980px){.dash{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.dash{grid-template-columns:1fr}}
.span2{grid-column:span 2}.span3{grid-column:span 3}
@media(max-width:980px){.span3{grid-column:span 2}.span2{grid-column:span 2}}
@media(max-width:640px){.span2,.span3{grid-column:span 1}}
.gc{background:#fff;border:1px solid var(--line);border-radius:11px;display:flex;flex-direction:column;min-height:148px;position:relative;overflow:hidden;box-shadow:0 1px 2px rgba(20,30,50,.04)}
.gc-h{display:flex;align-items:center;gap:7px;padding:11px 14px}
.gc-h .tt{font-size:12.5px;font-weight:700;color:#fff;display:flex;align-items:center;gap:7px}
.gc-h .tri{color:rgba(255,255,255,.65);font-size:8px;transform:translateY(1px)}
.gc-h .ic{margin-left:auto;display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.85)}
.gc-min{appearance:none;border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:6px;width:24px;height:24px;display:grid;place-items:center;cursor:pointer}
.gc-min:hover{background:rgba(255,255,255,.32)}
.jc{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.02em;padding:2px 7px;border-radius:5px;border:1px solid}
.gc-b{padding:14px;flex:1;display:flex;flex-direction:column;min-width:0}
.gc-wm{position:absolute;right:12px;bottom:9px;font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:#c6ccd8;font-weight:700;pointer-events:none}

.kpis{display:flex;gap:30px;flex-wrap:wrap}
.kpi-b .val{font-size:24px;font-weight:700;color:var(--ink);line-height:1.08;display:flex;align-items:baseline;gap:7px}
.kpi-b .val .dl{font-size:11px;font-weight:700}.dl.up{color:#157a4a}.dl.down{color:#c2143b}.dl.mut{color:var(--muted-2);font-weight:600}
.kpi-b .lb{font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-top:7px;display:flex;align-items:center;gap:5px}
.kpi-b .lb .dot{width:6px;height:6px;border-radius:50%;flex:0 0 auto}
.chart-wrap{margin-top:auto;padding-top:10px}
.chart-x{display:flex;justify-content:space-between;margin-top:6px;font-size:9.5px;color:var(--muted-2)}
.chart-flat{height:56px;display:flex;align-items:center;justify-content:center;color:var(--muted-2);font-size:11px}

.rk{display:flex;flex-direction:column;gap:11px;margin-top:2px}
.rk-top{display:flex;align-items:center;gap:9px}
.rk-i{color:var(--muted-2);font-size:11px;width:15px;flex:0 0 auto;font-weight:600}
.rk-n{font-size:12.5px;color:var(--ink-2);flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rk-v{font-size:12.5px;color:var(--ink);font-weight:600;flex:0 0 auto}
.rk-d{font-size:10px;font-weight:700;flex:0 0 auto}
.rk-bar{height:7px;border-radius:4px;background:var(--surface-2);border:1px solid var(--line);overflow:hidden;margin-top:5px;margin-left:24px}
.rk-bar i{display:block;height:100%;border-radius:4px}

.dl-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line);cursor:pointer}
.dl-row:last-child{border-bottom:0}.dl-row:hover .dl-nm{color:#000}
.dl-info{min-width:0;flex:1}.dl-nm{font-size:12.5px;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dl-cl{font-size:11px;color:var(--muted);margin-top:1px}
.dchip{font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;white-space:nowrap;display:inline-flex;align-items:center;gap:4px}
.dchip.crit{background:var(--crit-bg);color:var(--crit)}.dchip.soon{background:var(--soon-bg);color:var(--soon)}
.dchip.warn{background:var(--warn-bg);color:var(--warn)}.dchip.ok{background:var(--ok-bg);color:var(--ok)}.dchip.none{background:var(--none-bg);color:var(--none)}

.rkdark{margin-top:4px}
.rkdark .big{font-size:24px;font-weight:700;color:var(--ink)}
.rkdark .bar{height:11px;border-radius:6px;background:var(--surface-2);border:1px solid var(--line);overflow:hidden;margin-top:12px}
.rkdark .bar i{display:block;height:100%;background:#157a4a}
.rkdark .lg{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-top:8px}.rkdark .lg b{color:var(--ink)}

.split{display:flex;height:9px;border-radius:5px;overflow:hidden;background:var(--surface-2);border:1px solid var(--line);margin-top:4px}.split i{height:100%}
.split-lg{display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-top:7px}.split-lg b{color:var(--ink)}
.mini-stat .v{font-size:21px;font-weight:700;color:var(--ink);line-height:1.1}
.mini-stat .l{font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);font-weight:700;margin-top:4px}

/* personel kategori widget */
.pk-row{display:flex;align-items:center;gap:9px;margin-bottom:10px}
.pk-dot{width:9px;height:9px;border-radius:3px;flex:0 0 auto}
.pk-n{font-size:12.5px;color:var(--ink-2);flex:1}.pk-v{font-size:12.5px;color:var(--ink);font-weight:700}
.pk-bar{height:6px;border-radius:4px;background:var(--surface-2);border:1px solid var(--line);overflow:hidden;width:90px;flex:0 0 auto}.pk-bar i{display:block;height:100%;border-radius:4px}
.disc-line{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;padding-top:10px;border-top:1px solid var(--line)}
.disc-tag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:5px;color:#fff;display:flex;gap:5px;align-items:center}
.disc-tag b{font-variant-numeric:tabular-nums}

/* calendar (light) */
.cal-head{display:flex;align-items:center;gap:10px;margin-bottom:11px}
.cal-range{font-size:12px;color:var(--ink-3);font-weight:600}
.cal-nav{display:flex;gap:6px;margin-left:auto}
.cal-nav button{appearance:none;border:1px solid var(--line-2);background:#fff;color:var(--ink-3);border-radius:7px;padding:5px 9px;font:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px}
.cal-nav button:hover{border-color:var(--ink);color:var(--ink)}
.cal-scroll{overflow-x:auto}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;min-width:720px}
.cal-day{background:var(--surface-2);border:1px solid var(--line);border-radius:8px;min-height:96px;padding:7px;display:flex;flex-direction:column;gap:4px}
.cal-day.today{border-color:#2563eb;background:#eff5ff;box-shadow:inset 0 0 0 1px #bcd4fb}
.cal-day.wknd{background:#fafbfc}
.cal-dh{display:flex;justify-content:space-between;align-items:baseline}
.cal-dn{font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.cal-dd{font-size:14px;font-weight:700;color:var(--ink-2)}.cal-day.today .cal-dd{color:#2563eb}
.cal-ev{font-size:9.5px;font-weight:600;border-radius:5px;padding:3px 6px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-left:3px solid}
.cal-empty{font-size:9.5px;color:#c2c8d4;margin-top:auto}
.cal-today{margin-top:12px;padding-top:11px;border-top:1px solid var(--line)}
.cal-today h4{margin:0 0 8px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted-2);font-weight:700}
.cal-ag{display:flex;align-items:center;gap:9px;padding:5px 0;font-size:12px;color:var(--ink-2);cursor:pointer}
.cal-ag:hover{color:#000}.cal-ag .tag{font-size:9.5px;font-weight:700;padding:1px 7px;border-radius:5px;color:#fff;flex:0 0 auto}
.cal-ag .dt{margin-left:auto;font-size:11px;color:var(--muted-2);flex:0 0 auto}
.mcal-dows{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;min-width:680px;margin-bottom:6px}
.mcal-dow{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted-2);text-align:center}
.mcal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;min-width:680px}
.mcal-cell{background:var(--surface-2);border:1px solid var(--line);border-radius:8px;min-height:62px;padding:5px 7px;cursor:pointer;display:flex;flex-direction:column;transition:.1s}
.mcal-cell:hover{border-color:var(--ink-3);background:#fff}
.mcal-cell.out{background:#fbfcfd;opacity:.5}
.mcal-cell.today{border-color:#2563eb;background:#eff5ff}
.mcal-cell.sel{box-shadow:0 0 0 2px #2563eb;border-color:#2563eb}
.mcal-dd{font-size:12.5px;font-weight:700;color:var(--ink-2)}
.mcal-cell.today .mcal-dd{color:#2563eb}
.mcal-dots{display:flex;gap:4px;align-items:center;flex-wrap:wrap;margin-top:auto}
.mcal-dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto}
.mcal-more{font-size:9px;font-weight:700;color:var(--muted)}


/* modal */
.backdrop{position:fixed;inset:0;background:rgba(12,16,26,.55);display:grid;place-items:center;padding:18px;z-index:50;backdrop-filter:blur(2px)}
.modal{background:var(--surface);border-radius:14px;width:100%;max-width:580px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 24px 60px rgba(0,0,0,.3)}
.modal-head{display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid var(--line)}
.modal-head h3{font-size:15px;font-weight:700;margin:0}
.modal-body{padding:18px 20px;overflow-y:auto}
.modal-foot{display:flex;gap:10px;justify-content:flex-end;padding:14px 20px;border-top:1px solid var(--line)}
.field{margin-bottom:14px}
.field>label{display:block;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-3);margin-bottom:6px}
.opt{font-size:10px;color:var(--muted);text-transform:none;letter-spacing:0;font-weight:500}
.input,.select,.textarea{width:100%;border:1px solid var(--line-2);border-radius:8px;padding:9px 11px;font:inherit;font-size:13.5px;color:var(--ink);background:var(--surface);outline:none;transition:.12s}
.input:focus,.select:focus,.textarea:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(19,24,38,.08)}
.textarea{resize:vertical;min-height:60px}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}@media(max-width:520px){.row2{grid-template-columns:1fr}}
.seg{display:flex;gap:6px;flex-wrap:wrap}
.seg button{flex:1;min-width:80px;border:1px solid var(--line-2);background:var(--surface);font:inherit;font-weight:600;font-size:12.5px;padding:8px;border-radius:8px;cursor:pointer;transition:.12s;color:var(--ink-3)}
.seg button:hover{border-color:var(--ink-3)}.seg button.on{background:var(--ink);border-color:var(--ink);color:#fff}
.chk-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}@media(max-width:520px){.chk-grid{grid-template-columns:1fr}}
.chk{display:flex;align-items:center;gap:9px;border:1px solid var(--line-2);border-radius:8px;padding:8px 10px;cursor:pointer;transition:.12s;font-size:13px}
.chk:hover{border-color:var(--ink-3)}.chk.on{border-color:var(--ink);background:var(--surface-2)}.chk input{margin:0}
.hint{font-size:11.5px;color:var(--muted);margin-top:5px}
.toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.searchbox{display:flex;align-items:center;gap:8px;border:1px solid var(--line-2);border-radius:8px;padding:7px 11px;background:var(--surface);min-width:210px}
.searchbox input{border:0;outline:0;font:inherit;font-size:13px;width:100%;background:none}
`;

/* ============================ Helpers ============================ */
const TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
const uid = () => Math.random().toString(36).slice(2, 9);
const tint = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`; };
const idr = (n) => "Rp " + (Number(n) || 0).toLocaleString("id-ID");
const idrShort = (n) => {
  const v = Number(n) || 0;
  if (v >= 1e12) return "Rp " + (v / 1e12).toFixed(2).replace(".", ",") + " T";
  if (v >= 1e9) return "Rp " + (v / 1e9).toFixed(2).replace(".", ",") + " M";
  if (v >= 1e6) return "Rp " + (v / 1e6).toFixed(1).replace(".", ",") + " Jt";
  return idr(v);
};
const compactM = (n) => {
  const v = Number(n) || 0;
  if (v >= 1e12) return (v / 1e12).toFixed(2).replace(".", ",") + " T";
  return Math.round(v / 1e9) + " M";
};
const remainingDays = (s) => {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  const t = new Date(y, m - 1, d); t.setHours(0, 0, 0, 0);
  return Math.round((t - TODAY) / 86400000);
};
const urgency = (rd) => {
  if (rd === null) return { lvl: "none", label: "Belum dijadwal" };
  if (rd < 0) return { lvl: "crit", label: `Lewat ${Math.abs(rd)}h` };
  if (rd === 0) return { lvl: "crit", label: "Hari ini" };
  if (rd <= 3) return { lvl: "crit", label: `${rd} hari` };
  if (rd <= 7) return { lvl: "soon", label: `${rd} hari` };
  if (rd <= 14) return { lvl: "warn", label: `${rd} hari` };
  return { lvl: "ok", label: `${rd} hari` };
};
const isActive = (t) => { const rd = remainingDays(t.tgl); return rd === null || rd >= 0; };
const loadWeight = (t) => { const rd = remainingDays(t.tgl); if (rd === null) return 1; if (rd <= 3) return 3; if (rd <= 7) return 2; return 1; };
const initials = (name) => (name || "?").split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const MON = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
const fmtDate = (s) => { if (!s) return "—"; const [y, m, d] = s.split("-"); return `${d} ${MON[+m - 1]} ${y}`; };
const fmtMonth = (s) => { if (!s) return "—"; const [y, m] = s.split("-"); return `${MON[+m - 1]} ${y}`; };
const mForward = (n) => { const d = new Date(TODAY.getFullYear(), TODAY.getMonth() + n, 1); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`; };
const shortD = (date) => `${date.getDate()} ${MON[date.getMonth()]}`;
const dForward = (days) => { const d = new Date(TODAY); d.setDate(d.getDate() + days); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const dkey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const personCategory = (p) => (["Manager", "Expert", "Coordinator", "Staf"].includes(p.struktural) ? p.struktural : "Staf");
const timIds = (t) => [...new Set(ROLE_CATS.flatMap((r) => (t.tim && t.tim[r]) || []))];

function smoothPath(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6}, ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}
function weeklyCumulative(list) {
  const dated = list.filter((t) => t.tgl);
  if (dated.length === 0) return { values: [], labels: [] };
  const maxRd = Math.max(...dated.map((t) => remainingDays(t.tgl)), 7);
  const weeks = Math.min(16, Math.max(6, Math.ceil(maxRd / 7) + 1));
  const values = [], labels = [];
  for (let i = 0; i < weeks; i++) {
    const end = new Date(TODAY); end.setDate(end.getDate() + (i + 1) * 7);
    const sum = dated.filter((t) => {
      const [y, m, d] = t.tgl.split("-").map(Number);
      const dt = new Date(y, m - 1, d); dt.setHours(0, 0, 0, 0);
      return dt <= end;
    }).reduce((s, t) => s + (+t.nilai || 0), 0);
    values.push(sum); labels.push(end);
  }
  return { values, labels };
}

/* ============================ Seed ============================ */
const seed = () => {
  const personnel = [
    { id: "p1", nip: "19751012", nama: "Budi Santoso", alias: "Pak Budi", struktural: "Manager", fungsional: "Ahli Madya", jobdesk: [], disiplin: [], atasanId: "", relasi: "lini" },
    { id: "p2", nip: "19850304", nama: "Agus Wijaya", alias: "Pak Agus", struktural: "Expert", fungsional: "Ahli Utama", jobdesk: [], disiplin: [], atasanId: "p1", relasi: "staf" },
    { id: "p3", nip: "19820711", nama: "Siti Rahmawati", alias: "Bu Siti", struktural: "Coordinator", fungsional: "Ahli Muda 1", jobdesk: ["Estimator", "Compiler"], disiplin: ["CIVIL"], atasanId: "p1", relasi: "lini" },
    { id: "p4", nip: "19900215", nama: "Andi Pratama", alias: "Andi", struktural: "Staf", fungsional: "", jobdesk: ["Estimator"], disiplin: ["MECHANICAL", "PIPING"], atasanId: "p3", relasi: "lini" },
    { id: "p5", nip: "19880920", nama: "Rudi Hartono", alias: "Rudi", struktural: "Staf", fungsional: "Ahli Muda 2", jobdesk: ["Estimator"], disiplin: ["ELECTRICAL", "INSTRUMENT"], atasanId: "p3", relasi: "lini" },
    { id: "p6", nip: "19920506", nama: "Dewi Lestari", alias: "Dewi", struktural: "Staf", fungsional: "", jobdesk: ["SCM"], disiplin: [], atasanId: "p3", relasi: "lini" },
    { id: "p7", nip: "19950818", nama: "Putri Maharani", alias: "Putri", struktural: "Staf", fungsional: "", jobdesk: ["Risk", "Scheduler"], disiplin: [], atasanId: "p3", relasi: "lini" },
    { id: "p8", nip: "19960123", nama: "Hendra Saputra", alias: "Hendra", struktural: "Staf", fungsional: "", jobdesk: ["Construction", "Estimator"], disiplin: ["CIVIL"], atasanId: "p3", relasi: "lini" },
  ];
  const rkap = [
    { id: uid(), nama: "Infrastruktur Jalan & Jembatan", client: "Kementerian PUPR", jenisClient: "Pemerintah", bulan: mForward(1), nilai: 250000000000, praku: "Lolos", nr1: "ACC", ket: "Fokus proyek konektivitas" },
    { id: uid(), nama: "EPC Fasilitas Migas", client: "PT Pertamina (Persero)", jenisClient: "BUMN", bulan: mForward(2), nilai: 180000000000, praku: "Belum", nr1: "Belum", ket: "Segmen energi, menunggu pengumuman" },
    { id: uid(), nama: "Bangunan Gedung Negara", client: "Pemprov Jawa Barat", jenisClient: "Pemerintah", bulan: mForward(3), nilai: 120000000000, praku: "Lolos", nr1: "Belum", ket: "Proyek pemerintah, dokumen disiapkan" },
    { id: uid(), nama: "Kelistrikan & Instrumentasi", client: "PT PLN (Persero)", jenisClient: "BUMN", bulan: mForward(1), nilai: 90000000000, praku: "Belum", nr1: "ACC", ket: "Segmen ketenagalistrikan" },
  ];
  const tenders = [
    { id: uid(), grup: "sasaran", nama: "Pembangunan Gedung Kantor Gubernur", client: "Pemprov Jawa Barat", jenisClient: "Pemerintah", nilai: 125000000000, status: "KSO", partner: "PT Wijaya Karya", tgl: dForward(7), nr1: "Sudah", nr2tgl: dForward(14), format: "2 Sampul", prioritas: "high", hasil: "proses", ket: "Menunggu addendum dokumen", tim: { Expert: ["p2"], Compiler: ["p3"], Estimator: ["p8"], SCM: ["p6"] }, updates: [{ tgl: dForward(-2), teks: "Rapat koordinasi: dokumen addendum sudah diterima, tim mulai hitung volume struktur." }, { tgl: dForward(-7), teks: "Konfirmasi keikutsertaan KSO dengan PT Wijaya Karya." }] },
    { id: uid(), grup: "sasaran", nama: "Revitalisasi Jaringan Irigasi DI Cibaliung", client: "Kementerian PUPR", jenisClient: "Pemerintah", nilai: 78500000000, status: "JO", partner: "PT Adhi Karya", tgl: dForward(3), nr1: "Belum", nr2tgl: dForward(6), format: "2 Sampul", prioritas: "high", hasil: "proses", ket: "Finalisasi metode pelaksanaan", tim: { Expert: ["p2"], Compiler: ["p3"], Estimator: ["p4"], SCM: ["p6"] }, updates: [{ tgl: dForward(-1), teks: "Metode pelaksanaan difinalisasi, menunggu review koordinator." }] },
    { id: uid(), grup: "sasaran", nama: "EPC Fasilitas Pengolahan Gas", client: "PT Pertamina Gas", jenisClient: "BUMN", nilai: 210000000000, status: "Mandiri", partner: "", tgl: dForward(20), nr1: "Belum", nr2tgl: dForward(25), format: "1 Sampul", prioritas: "normal", hasil: "menang", ket: "Dinyatakan menang, masuk realisasi", tim: { Expert: ["p2"], Compiler: ["p3"], Estimator: ["p4", "p5"], SCM: ["p6"] }, updates: [{ tgl: dForward(-3), teks: "Pengumuman pemenang: tim kita ditetapkan sebagai pemenang." }] },
    { id: uid(), grup: "sasaran", nama: "EPCC Gardu Induk 150kV", client: "PT PLN (Persero)", jenisClient: "BUMN", nilai: 95000000000, status: "JO", partner: "PT PP", tgl: dForward(2), nr1: "Sudah", nr2tgl: dForward(10), format: "2 Sampul", prioritas: "high", hasil: "proses", ket: "Prakualifikasi lolos", tim: { Expert: ["p2"], Compiler: ["p3"], Estimator: ["p5"], SCM: [] }, updates: [{ tgl: dForward(-1), teks: "Lolos prakualifikasi, segera siapkan dokumen penawaran." }] },
    { id: uid(), grup: "cadangan", nama: "Pembangunan SPAM Kawasan Industri", client: "PDAM Kota Bekasi", jenisClient: "BUMN", nilai: 45000000000, status: "Mandiri", partner: "", tgl: dForward(15), nr1: "Sudah", nr2tgl: dForward(18), format: "1 Sampul", prioritas: "low", hasil: "pasif", ket: "Cek kelengkapan administrasi", tim: { Expert: [], Compiler: [], Estimator: ["p8"], SCM: ["p6"] }, updates: [] },
    { id: uid(), grup: "cadangan", nama: "Rehabilitasi Bendung Daerah", client: "Dinas SDA Provinsi", jenisClient: "Pemerintah", nilai: 32000000000, status: "KSO", partner: "PT Brantas Abipraya", tgl: dForward(1), nr1: "Belum", nr2tgl: dForward(4), format: "2 Sampul", prioritas: "low", hasil: "kalah", ket: "Tidak lolos, dijadikan arsip", tim: { Expert: [], Compiler: [], Estimator: ["p8"], SCM: ["p6"] }, updates: [{ tgl: dForward(-4), teks: "Hasil: kalah. Evaluasi penyebab untuk tender berikutnya." }] },
  ];
  return { tenders, personnel, rkap };
};

/* ============================ Persistence ============================ */
const KEY = "qs-epcc-dashboard-v6";
// Penyimpanan lokal di browser (per-perangkat). Untuk data terpusat antar-pengguna, ganti ke Supabase.
function loadStore() { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch { return null; } }
function saveStore(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} }

/* ============================ App ============================ */
export default function App() {
  const [tab, setTab] = useState("ringkasan");
  const [tenders, setTenders] = useState([]);
  const [personnel, setPersonnel] = useState([]);
  const [rkap, setRkap] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [tenderModal, setTenderModal] = useState(null);
  const [personModal, setPersonModal] = useState(null);
  const [rkapModal, setRkapModal] = useState(null);
  const [infoModal, setInfoModal] = useState(null);

  useEffect(() => { (async () => {
    const s = await loadStore();
    if (s && s.tenders) { setTenders(s.tenders); setPersonnel(s.personnel || []); setRkap(s.rkap || []); }
    else { const sd = seed(); setTenders(sd.tenders); setPersonnel(sd.personnel); setRkap(sd.rkap); }
    setLoaded(true);
  })(); }, []);
  useEffect(() => { if (loaded) saveStore({ tenders, personnel, rkap }); }, [tenders, personnel, rkap, loaded]);

  const pById = useMemo(() => Object.fromEntries(personnel.map((p) => [p.id, p])), [personnel]);
  const sasaran = tenders.filter((t) => t.grup === "sasaran");
  const cadangan = tenders.filter((t) => t.grup === "cadangan");
  const isCounted = (t) => ["proses", "menang"].includes(t.hasil || "proses");
  const totalNilai = tenders.filter(isCounted).reduce((s, t) => s + (+t.nilai || 0), 0);
  const rkapTarget = rkap.reduce((s, r) => s + (+r.nilai || 0), 0);
  const rkapReal = tenders.filter((t) => t.hasil === "menang").reduce((s, t) => s + (+t.nilai || 0), 0);
  const rkapPct = rkapTarget ? Math.round((rkapReal / rkapTarget) * 100) : 0;
  const berjalan = tenders.filter((t) => (t.hasil || "proses") === "proses");
  const menangCount = tenders.filter((t) => t.hasil === "menang").length;
  const urgent7 = tenders.filter((t) => { const rd = remainingDays(t.tgl); return rd !== null && rd >= 0 && rd <= 7; }).length;
  const nr2List = tenders.filter((t) => t.nr2tgl && remainingDays(t.nr2tgl) >= 0).sort((a, b) => remainingDays(a.nr2tgl) - remainingDays(b.nr2tgl));
  const nr2Next = nr2List[0];

  const workload = useMemo(() => {
    const CAP = 6;
    return personnel.map((p) => {
      const mine = tenders.filter((t) => isActive(t) && timIds(t).includes(p.id));
      const score = mine.reduce((s, t) => s + loadWeight(t), 0);
      const pct = Math.min(100, Math.round((score / CAP) * 100));
      const lvl = pct >= 85 ? "crit" : pct >= 55 ? "warn" : "ok";
      return { ...p, count: mine.length, score, pct, lvl, tenders: mine };
    }).sort((a, b) => b.score - a.score);
  }, [personnel, tenders]);

  // beban kerja dikelompokkan per kategori peran (Expert/Compiler/Estimator/SCM)
  const roleWorkload = useMemo(() => {
    return ROLE_CATS.map((role) => {
      const map = {};
      tenders.filter(isActive).forEach((t) => ((t.tim && t.tim[role]) || []).forEach((id) => { map[id] = (map[id] || 0) + 1; }));
      const people = Object.entries(map).map(([id, count]) => ({ p: pById[id], count })).filter((x) => x.p).sort((a, b) => b.count - a.count);
      const max = Math.max(...people.map((x) => x.count), 1);
      return { role, people, max };
    });
  }, [tenders, pById]);

  const saveTender = (d) => { setTenders((p) => d.id ? p.map((t) => t.id === d.id ? d : t) : [...p, { ...d, id: uid() }]); setTenderModal(null); };
  const delTender = (id) => { if (window.confirm("Hapus tender ini?")) setTenders((p) => p.filter((t) => t.id !== id)); };
  const savePerson = (d) => { setPersonnel((p) => d.id ? p.map((x) => x.id === d.id ? d : x) : [...p, { ...d, id: uid() }]); setPersonModal(null); };
  const delPerson = (id) => { if (!window.confirm("Hapus personel ini? Ia akan dilepas dari semua tender.")) return; setPersonnel((p) => p.filter((x) => x.id !== id)); setTenders((ts) => ts.map((t) => { const tim = { ...(t.tim || {}) }; ROLE_CATS.forEach((r) => { tim[r] = (tim[r] || []).filter((x) => x !== id); }); return { ...t, tim }; })); };
  const saveRkap = (d) => { setRkap((p) => d.id ? p.map((x) => x.id === d.id ? d : x) : [...p, { ...d, id: uid() }]); setRkapModal(null); };
  const delRkap = (id) => { if (window.confirm("Hapus item RKAP ini?")) setRkap((p) => p.filter((x) => x.id !== id)); };
  const resetAll = () => { if (window.confirm("Kembalikan ke data contoh? Semua perubahan akan hilang.")) { const sd = seed(); setTenders(sd.tenders); setPersonnel(sd.personnel); setRkap(sd.rkap); } };
  const addUpdate = (id, u) => setTenders((p) => p.map((t) => t.id === id ? { ...t, updates: [u, ...(t.updates || [])] } : t));
  const delUpdate = (id, idx) => setTenders((p) => p.map((t) => t.id === id ? { ...t, updates: (t.updates || []).filter((_, i) => i !== idx) } : t));
  const patchPerson = (id, patch) => setPersonnel((p) => p.map((x) => x.id === id ? { ...x, ...patch } : x));
  const setHasil = (id, h) => setTenders((p) => p.map((t) => t.id === id ? { ...t, hasil: h } : t));

  const q = search.trim().toLowerCase();
  const match = (t) => !q || t.nama.toLowerCase().includes(q) || (t.client || "").toLowerCase().includes(q) || (t.ket || "").toLowerCase().includes(q) || (t.partner || "").toLowerCase().includes(q);

  return (
    <div className="tm">
      <style>{CSS}</style>

      <div className="rail">
        <div className="brand">
          <div className="mark">QS</div>
          <div>
            <h1>Dashboard Quantity Survey</h1>
            <p>Divisi EPCC</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={"tab" + (tab === "ringkasan" ? " active" : "")} onClick={() => setTab("ringkasan")}><Gauge size={15} /> Ringkasan</button>
        <button className={"tab" + (tab === "rkap" ? " active" : "")} onClick={() => setTab("rkap")}><Target size={15} /> RKAP <span className="cnt">{rkap.length}</span></button>
        <button className={"tab" + (tab === "tender" ? " active" : "")} onClick={() => setTab("tender")}><Layers size={15} /> List Tender <span className="cnt">{tenders.length}</span></button>
        <button className={"tab" + (tab === "personel" ? " active" : "")} onClick={() => setTab("personel")}><Users size={15} /> Personel <span className="cnt">{personnel.length}</span></button>
        <button className={"tab" + (tab === "struktur" ? " active" : "")} onClick={() => setTab("struktur")}><Network size={15} /> Struktur Organisasi</button>
      </div>

      {/* boxed KPI band (light + colored) */}
      <div className="kpi-band">
        <div className="kbox" style={{ borderLeftColor: "#4338ca", background: tint("#4338ca", 0.05) }}>
          <div className="l" style={{ color: "#4338ca" }}><Target size={11} /> RKAP Target / Realisasi</div>
          <div className="v num">{compactM(rkapTarget)} / {compactM(rkapReal)}</div>
          <div className="x num">{rkapPct}% terealisasi</div>
        </div>
        <div className="kbox" style={{ borderLeftColor: "#0d9488", background: tint("#0d9488", 0.05) }}>
          <div className="l" style={{ color: "#0d9488" }}><Layers size={11} /> Tender Berjalan</div>
          <div className="v num">{berjalan.length}</div>
          <div className="x num">{menangCount} menang · {tenders.length} total</div>
        </div>
        <div className="kbox" style={{ borderLeftColor: "#157a4a", background: tint("#157a4a", 0.05) }}>
          <div className="l" style={{ color: "#157a4a" }}><Briefcase size={11} /> Total Estimasi Nilai</div>
          <div className="v num">{compactM(totalNilai)}</div>
          <div className="x">tender proses + menang</div>
        </div>
        <div className={"kbox" + (nr2Next && remainingDays(nr2Next.nr2tgl) <= 3 ? " crit" : "")} style={{ borderLeftColor: "#d9560b", background: tint("#d9560b", 0.05) }}>
          <div className="l" style={{ color: "#d9560b" }}><Clock size={11} /> NR-2 Deadline</div>
          <div className="v num">{nr2Next ? urgency(remainingDays(nr2Next.nr2tgl)).label : "—"}</div>
          <div className="x">{nr2Next ? nr2Next.nama.slice(0, 26) : "tidak ada jadwal"}</div>
        </div>
        <div className="kbox" style={{ borderLeftColor: "#7c3aed", background: tint("#7c3aed", 0.05) }}>
          <div className="l" style={{ color: "#7c3aed" }}><Users size={11} /> Jumlah Personel</div>
          <div className="v num">{personnel.length}</div>
          <div className="x">aktif di divisi</div>
        </div>
        <div className={"kbox" + (urgent7 > 0 ? " warn" : "")} style={{ borderLeftColor: "#c2143b", background: tint("#c2143b", 0.05) }}>
          <div className="l" style={{ color: "#c2143b" }}><AlertTriangle size={11} /> Deadline Pemasukan &lt;7 Hari</div>
          <div className="v num">{urgent7}</div>
          <div className="x">perlu prioritas</div>
        </div>
      </div>


      <div className="wrap">
        {tab === "ringkasan" && (
          <Ringkasan workload={workload} roleWorkload={roleWorkload} tenders={tenders} sasaran={sasaran} cadangan={cadangan}
            personnel={personnel} rkap={rkap} rkapTarget={rkapTarget} rkapReal={rkapReal} rkapPct={rkapPct}
            onEdit={(t) => setTenderModal({ tender: t })} onInfo={(t) => setInfoModal(t.id)} />
        )}

        {tab === "rkap" && (
          <RkapTab rkap={rkap} target={rkapTarget} real={rkapReal} pct={rkapPct}
            onAdd={() => setRkapModal({ item: null })} onEdit={(r) => setRkapModal({ item: r })} onDel={delRkap} />
        )}

        {tab === "tender" && (
          <>
            <div className="toolbar">
              <div className="searchbox"><Search size={15} color="var(--muted)" />
                <input placeholder="Cari tender, client, partner…" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
              <button className="btn btn-sm" onClick={resetAll}><RotateCcw size={14} /> Reset</button>
              <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={() => setTenderModal({ tender: null })}><Plus size={16} /> Tambah Tender</button>
            </div>
            <TenderGroup title="Sasaran" icon={<Target size={13} />} rows={sasaran.filter(match)} pById={pById} tone="#16a34a"
              onEdit={(t) => setTenderModal({ tender: t })} onDel={delTender} onInfo={(t) => setInfoModal(t.id)} onHasil={setHasil} />
            <div style={{ height: 18 }} />
            <TenderGroup title="Cadangan" icon={<Layers size={13} />} rows={cadangan.filter(match)} pById={pById} tone="#ca8a04"
              onEdit={(t) => setTenderModal({ tender: t })} onDel={delTender} onInfo={(t) => setInfoModal(t.id)} onHasil={setHasil} />
          </>
        )}

        {tab === "personel" && (
          <Personel personnel={personnel} workload={workload}
            onAdd={() => setPersonModal({ person: null })} onEdit={(p) => setPersonModal({ person: p })} onDel={delPerson} />
        )}

        {tab === "struktur" && (
          <StrukturOrg personnel={personnel} onPatch={patchPerson} />
        )}
      </div>

      {tenderModal && <TenderModal init={tenderModal.tender} personnel={personnel} onSave={saveTender} onClose={() => setTenderModal(null)} />}
      {personModal && <PersonModal init={personModal.person} onSave={savePerson} onClose={() => setPersonModal(null)} />}
      {rkapModal && <RkapModal init={rkapModal.item} onSave={saveRkap} onClose={() => setRkapModal(null)} />}
      {infoModal && (() => { const t = tenders.find((x) => x.id === infoModal); return t ? <InfoModal tender={t} onAdd={addUpdate} onDel={delUpdate} onClose={() => setInfoModal(null)} /> : null; })()}
    </div>
  );
}

/* ============================ Chart bits ============================ */
function AreaChart({ values, color, gid, h = 62 }) {
  if (!values || values.length < 2 || Math.max(...values) === 0) return <div className="chart-flat">Belum ada tender berjadwal</div>;
  const W = 100, pad = 4, n = values.length, max = Math.max(...values);
  const pts = values.map((v, i) => [i / (n - 1) * W, h - pad - (v / max) * (h - 2 * pad)]);
  const line = smoothPath(pts);
  return (
    <svg viewBox={`0 0 ${W} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: h, display: "block" }}>
      <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.38" /><stop offset="100%" stopColor={color} stopOpacity="0.02" />
      </linearGradient></defs>
      <path d={`${line} L ${W} ${h} L 0 ${h} Z`} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}
function ChartX({ labels }) {
  if (!labels || labels.length < 2) return null;
  const last = labels.length - 1;
  const idx = [...new Set([0, Math.floor(last / 3), Math.floor((last * 2) / 3), last])];
  return <div className="chart-x num">{idx.map((i) => <span key={i}>{shortD(labels[i])}</span>)}</div>;
}
function Donut({ pct, centerTop, centerBottom, color = "#2563eb", size = 132 }) {
  const sw = 14, r = (size - sw) / 2, c = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(100, pct));
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#eceef3" strokeWidth={sw} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round"
        strokeDasharray={`${c * p / 100} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle" fontSize="30" fontWeight="700" fontFamily="Sora, sans-serif" fill="#131826">{centerTop}</text>
      <text x="50%" y="63%" textAnchor="middle" dominantBaseline="middle" fontSize="10.5" fontWeight="700" fill="#8a90a0" letterSpacing="0.5">{centerBottom}</text>
    </svg>
  );
}
function GCard({ title, span, wide, tone = "#131826", children }) {
  return (
    <div className={"gc" + (wide ? " span3" : span ? " span2" : "")}>
      <div className="gc-h" style={{ background: tone }}><span className="tt"><span className="tri">▾</span>{title}</span></div>
      <div className="gc-b">{children}</div>
    </div>
  );
}

/* ============================ Calendar ============================ */
function CalendarWidget({ tenders, onEdit }) {
  const [mOff, setMOff] = useState(0);
  const [sel, setSel] = useState(dkey(TODAY));
  const [min, setMin] = useState(true);

  const evMap = {};
  const add = (ds, ev) => { (evMap[ds] = evMap[ds] || []).push(ev); };
  tenders.forEach((t) => {
    if (t.tgl) add(t.tgl, { type: "Pemasukan", color: "#2563eb", t });
    if (t.nr2tgl) add(t.nr2tgl, { type: "NR-2", color: "#d9560b", t });
  });
  const todayKey = dkey(TODAY);

  const view = new Date(TODAY.getFullYear(), TODAY.getMonth() + mOff, 1);
  const y = view.getFullYear(), m = view.getMonth();
  const firstDow = (new Date(y, m, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const rows = Math.ceil((firstDow + daysInMonth) / 7);
  const gridStart = new Date(y, m, 1 - firstDow);
  const cells = [...Array(rows * 7)].map((_, i) => { const d = new Date(gridStart); d.setDate(gridStart.getDate() + i); return d; });
  const dnames = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const dow = (TODAY.getDay() + 6) % 7;
  const monday = new Date(TODAY); monday.setDate(TODAY.getDate() - dow);
  const weekDays = [...Array(7)].map((_, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return d; });
  const agenda = [];
  weekDays.map(dkey).forEach((k) => (evMap[k] || []).forEach((e) => agenda.push({ k, ...e })));
  agenda.sort((a, b) => a.k.localeCompare(b.k));
  const selEv = evMap[sel] || [];

  return (
    <div className="gc span3">
      <div className="gc-h" style={{ background: "#2563eb" }}>
        <span className="tt"><Calendar size={13} /> Kalender Tender</span>
        <span className="ic">
          <button className="gc-min" onClick={() => setMin(!min)} title={min ? "Perbesar kalender" : "Perkecil kalender"}>
            {min ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </button>
        </span>
      </div>
      <div className="gc-b">
        {!min && (
          <>
            <div className="cal-head">
              <span className="cal-range">{monthNames[m]} {y}</span>
              <span style={{ display: "flex", gap: 12, fontSize: 11, color: "var(--muted)", marginLeft: 14 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#2563eb" }} /> Pemasukan</span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#d9560b" }} /> NR-2</span>
              </span>
              <div className="cal-nav">
                <button onClick={() => setMOff(mOff - 1)}><ChevronLeft size={14} /></button>
                <button onClick={() => { setMOff(0); setSel(todayKey); }}>Bulan ini</button>
                <button onClick={() => setMOff(mOff + 1)}><ChevronRight size={14} /></button>
              </div>
            </div>
            <div className="cal-scroll">
              <div className="mcal-dows">{dnames.map((d) => <div className="mcal-dow" key={d}>{d}</div>)}</div>
              <div className="mcal-grid">
                {cells.map((d) => {
                  const k = dkey(d), ev = evMap[k] || [], inMonth = d.getMonth() === m;
                  const isToday = k === todayKey, isSel = k === sel;
                  return (
                    <div key={k} className={"mcal-cell" + (inMonth ? "" : " out") + (isToday ? " today" : "") + (isSel ? " sel" : "")}
                      onClick={() => setSel(k)} title={ev.length ? ev.map((e) => `${e.type}: ${e.t.nama}`).join("\n") : ""}>
                      <div className="mcal-dd num">{d.getDate()}</div>
                      {ev.length > 0 && <div className="mcal-dots">{ev.slice(0, 4).map((e, j) => <span key={j} className="mcal-dot" style={{ background: e.color }} />)}{ev.length > 4 && <span className="mcal-more num">+{ev.length - 4}</span>}</div>}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cal-today">
              <h4>Detail · {fmtDate(sel)}{sel === todayKey ? " (hari ini)" : ""}</h4>
              {selEv.length === 0 ? <div className="cal-empty" style={{ marginTop: 0 }}>Tidak ada agenda pada tanggal ini.</div> :
                selEv.map((e, i) => (
                  <div key={i} className="cal-ag" onClick={() => onEdit(e.t)}>
                    <span className="tag" style={{ background: e.color }}>{e.type}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.t.nama}</span>
                    <span className="dt num">{e.t.client}</span>
                  </div>
                ))}
            </div>
          </>
        )}

        <div className="cal-today" style={min ? { borderTop: 0, marginTop: 0, paddingTop: 0 } : undefined}>
          <h4>Agenda Minggu Ini{min ? " · kalender disembunyikan" : ""}</h4>
          {agenda.length === 0 ? <div className="cal-empty" style={{ marginTop: 0 }}>Tidak ada agenda minggu ini.</div> :
            agenda.slice(0, 4).map((e, i) => (
              <div key={i} className="cal-ag" onClick={() => onEdit(e.t)}>
                <span className="tag" style={{ background: e.color }}>{e.type}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.t.nama}{e.k === todayKey ? "  (hari ini)" : ""}</span>
                <span className="dt num">{fmtDate(e.k)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ Ringkasan ============================ */
function Ringkasan({ workload, roleWorkload, tenders, sasaran, cadangan, personnel, rkap = [], rkapTarget, rkapReal, rkapPct, onEdit, onInfo }) {
  const count = tenders.length;
  const isCounted = (t) => ["proses", "menang"].includes(t.hasil || "proses");
  const counted = tenders.filter(isCounted);
  const totalNilai = counted.reduce((s, t) => s + (+t.nilai || 0), 0);
  const nilaiSasaran = sasaran.filter(isCounted).reduce((s, t) => s + (+t.nilai || 0), 0);
  const nilaiCadangan = cadangan.filter(isCounted).reduce((s, t) => s + (+t.nilai || 0), 0);
  const hasilCounts = Object.keys(HASIL).map((k) => ({ k, n: tenders.filter((t) => (t.hasil || "proses") === k).length })).filter((x) => x.n > 0);
  const urgent = tenders.filter((t) => { const rd = remainingDays(t.tgl); return rd !== null && rd >= 0 && rd <= 7; }).length;
  const overdue = tenders.filter((t) => { const rd = remainingDays(t.tgl); return rd !== null && rd < 0; }).length;
  const sAll = weeklyCumulative(counted);

  const top = [...tenders].sort((a, b) => (+b.nilai || 0) - (+a.nilai || 0)).slice(0, 6);
  const maxTop = Math.max(...top.map((t) => +t.nilai || 0), 1);
  const statusList = STATUS.map((k) => ({ k, n: tenders.filter((t) => t.status === k).length })).filter((x) => x.n > 0).sort((a, b) => b.n - a.n);
  const maxStat = Math.max(...statusList.map((s) => s.n), 1);
  const upcoming = [...tenders].filter((t) => t.tgl).sort((a, b) => remainingDays(a.tgl) - remainingDays(b.tgl)).slice(0, 5);
  const f1 = tenders.filter((t) => t.format === "1 Sampul").length;
  const f2 = tenders.filter((t) => t.format === "2 Sampul").length;
  const ftot = f1 + f2 || 1;
  const maxScore = Math.max(...workload.map((w) => w.score), 1);

  const catCounts = ["Manager", "Expert", "Coordinator", "Staf"].map((c) => ({ c, n: personnel.filter((p) => personCategory(p) === c).length }));
  const maxCat = Math.max(...catCounts.map((c) => c.n), 1);
  const discCounts = DISIPLIN.map((d) => ({ d, n: personnel.filter((p) => (p.jobdesk || []).includes("Estimator") && (p.disiplin || []).includes(d)).length }));

  // metrik RKAP
  const menangList = tenders.filter((t) => t.hasil === "menang").sort((a, b) => (+b.nilai || 0) - (+a.nilai || 0));
  const prosesList = tenders.filter((t) => (t.hasil || "proses") === "proses");
  const potensiProses = prosesList.reduce((s, t) => s + (+t.nilai || 0), 0);
  const sisaTarget = Math.max(0, rkapTarget - rkapReal);
  const prakuLolos = rkap.filter((r) => r.praku === "Lolos").length;
  const nr1Acc = rkap.filter((r) => r.nr1 === "ACC").length;

  return (
    <div className="dash">
      <GCard title="Ringkasan Nilai Tender" span tone="#2563eb">
        <div className="kpis">
          <div className="kpi-b"><div className="val num">{idrShort(totalNilai)}</div><div className="lb"><span className="dot" style={{ background: C_BLUE }} />Nilai Aktif (proses + menang)</div></div>
          <div className="kpi-b"><div className="val num">{count} <span className="dl mut">{sasaran.length}S · {cadangan.length}C</span></div><div className="lb"><span className="dot" style={{ background: C_GREEN }} />Jumlah Tender</div></div>
          <div className="kpi-b"><div className="val num">{urgent}{overdue > 0 && <span className="dl down">▼ {overdue} lewat</span>}</div><div className="lb"><span className="dot" style={{ background: C_RED }} />Pemasukan ≤7 Hari</div></div>
        </div>

        <div className="tn-grid">
          <div className="tn-cell" style={{ borderLeftColor: "#16a34a" }}>
            <div className="tn-l">Sasaran</div>
            <div className="tn-v num">{idrShort(nilaiSasaran)}</div>
            <div className="tn-s num">{sasaran.length} tender · nilai aktif</div>
          </div>
          <div className="tn-cell" style={{ borderLeftColor: "#ca8a04" }}>
            <div className="tn-l">Cadangan</div>
            <div className="tn-v num">{idrShort(nilaiCadangan)}</div>
            <div className="tn-s num">{cadangan.length} tender · nilai aktif</div>
          </div>
        </div>
        <div className="tn-status">
          {hasilCounts.map((h) => <span key={h.k} className="tn-chip" style={{ background: HASIL[h.k].color }}>{HASIL[h.k].label} <b>{h.n}</b></span>)}
        </div>

        <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto", textAlign: "center" }}>
            <Donut pct={rkapPct} centerTop={count} centerBottom="TENDER" color="#2563eb" />
            <div style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 6 }}><b className="num" style={{ color: "var(--ink)" }}>{rkapPct}%</b> dari nilai RKAP</div>
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <div className="lb" style={{ fontSize: 9.5, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 700, marginBottom: 6 }}>Akumulasi nilai aktif menuju tenggat</div>
            <AreaChart values={sAll.values} color={C_BLUE} gid="grad-all" h={88} />
            <ChartX labels={sAll.labels} />
          </div>
        </div>
      </GCard>

      <GCard title="RKAP Target vs Realisasi" tone="#157a4a">
        <div className="rk-grid">
          <div className="rk-box" style={{ borderLeftColor: "#157a4a" }}><div className="rk-l">Realisasi (Menang)</div><div className="rk-v num">{idrShort(rkapReal)}</div><div className="rk-x num">{menangList.length} tender menang</div></div>
          <div className="rk-box" style={{ borderLeftColor: "#1d4ed8" }}><div className="rk-l">Target RKAP</div><div className="rk-v num">{idrShort(rkapTarget)}</div><div className="rk-x num">{rkap.length} item rencana</div></div>
          <div className="rk-box" style={{ borderLeftColor: "#d9560b" }}><div className="rk-l">Sisa Target</div><div className="rk-v num">{idrShort(sisaTarget)}</div><div className="rk-x num">{rkapPct}% tercapai</div></div>
          <div className="rk-box" style={{ borderLeftColor: "#7c3aed" }}><div className="rk-l">Potensi (Proses)</div><div className="rk-v num">{idrShort(potensiProses)}</div><div className="rk-x num">{prosesList.length} tender berjalan</div></div>
        </div>
      </GCard>

      <CalendarWidget tenders={tenders} onEdit={onEdit} />

      <GCard title="Update Rapat Koordinasi" wide tone="#1d4ed8">
        {(() => {
          const all = tenders.flatMap((t) => (t.updates || []).map((u) => ({ ...u, t }))).sort((a, b) => b.tgl.localeCompare(a.tgl)).slice(0, 6);
          return all.length === 0 ? <div className="chart-flat">Belum ada update — tambahkan dari kolom Update di List Tender.</div> :
            all.map((u, i) => (
              <div className="upd-r" key={i} onClick={() => onInfo(u.t)}>
                <span className="dotw" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="ut">{u.teks}</div>
                  <div className="um num">{u.t.nama} · {fmtDate(u.tgl)}</div>
                </div>
              </div>
            ));
        })()}
      </GCard>

      <GCard title="Komposisi Personel" tone="#7c3aed">
        {personnel.length === 0 ? <div className="chart-flat">Belum ada personel</div> : <>
          {catCounts.map((c) => (
            <div className="pk-row" key={c.c}>
              <span className="pk-dot" style={{ background: CAT[c.c] }} />
              <span className="pk-n">{c.c}</span>
              <div className="pk-bar"><i style={{ width: Math.max(4, c.n / maxCat * 100) + "%", background: CAT[c.c] }} /></div>
              <span className="pk-v num">{c.n}</span>
            </div>
          ))}
          <div className="disc-line">
            {discCounts.map((d) => <span key={d.d} className="disc-tag" style={{ background: DISC[d.d] }}>{d.d.slice(0, 4)} <b>{d.n}</b></span>)}
          </div>
        </>}
      </GCard>

      <GCard title="Beban Kerja Personel" tone="#0d9488">
        {roleWorkload.every((r) => r.people.length === 0) ? <div className="chart-flat">Belum ada penugasan tim</div> :
          roleWorkload.map((rw) => (
            <div key={rw.role} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                <span style={{ width: 9, height: 9, borderRadius: 3, background: ROLE_COLOR[rw.role] }} />
                <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: ".03em", textTransform: "uppercase", color: ROLE_COLOR[rw.role] }}>{rw.role}</span>
                <span style={{ fontSize: 11, color: "var(--muted)" }}>{rw.people.length} orang</span>
              </div>
              {rw.people.length === 0 ? <div style={{ fontSize: 11.5, color: "var(--muted-2)", paddingLeft: 16 }}>— belum ada —</div> :
                <div className="rk">{rw.people.map((x) => (
                  <div key={x.p.id}><div className="rk-top"><span className="rk-n">{x.p.alias || x.p.nama}</span><span className="rk-v num">{x.count} tender</span></div><div className="rk-bar" style={{ marginLeft: 0 }}><i style={{ width: Math.max(6, x.count / rw.max * 100) + "%", background: ROLE_COLOR[rw.role] }} /></div></div>
                ))}</div>}
            </div>
          ))}
      </GCard>

      <GCard title="Tenggat Pemasukan Terdekat" tone="#d9560b">
        <div className="rk" style={{ gap: 0 }}>{upcoming.length === 0 ? <div className="chart-flat">Belum ada tender berjadwal</div> :
          upcoming.map((t) => { const u = urgency(remainingDays(t.tgl)); return (
            <div className="dl-row" key={t.id} onClick={() => onEdit(t)}>
              <div className="dl-info"><div className="dl-nm">{t.nama}</div><div className="dl-cl num">{fmtDate(t.tgl)} · {t.client}</div></div>
              <span className={"dchip " + u.lvl}>{u.lvl === "crit" && <AlertTriangle size={11} />}{u.label}</span>
            </div>); })}</div>
      </GCard>

      <GCard title="Tender Terbesar" tone="#b45309">
        <div className="rk">{top.length === 0 ? <div className="chart-flat">Belum ada data</div> :
          top.map((t, i) => (
            <div key={t.id}><div className="rk-top"><span className="rk-i num">{i + 1}</span><span className="rk-n">{t.nama}</span><span className="rk-v num">{idrShort(t.nilai)}</span><span className="rk-d" style={{ color: t.grup === "sasaran" ? C_GREEN : "#8b97ad" }}>{t.grup === "sasaran" ? "SAS" : "CAD"}</span></div><div className="rk-bar"><i style={{ width: Math.max(4, (+t.nilai || 0) / maxTop * 100) + "%", background: C_GREEN }} /></div></div>
          ))}</div>
      </GCard>

      <GCard title="Komposisi Status" tone="#6d28d9">
        <div className="rk">{statusList.length === 0 ? <div className="chart-flat">Belum ada data</div> :
          statusList.map((s, i) => (
            <div key={s.k}><div className="rk-top"><span className="rk-i num">{i + 1}</span><span className="rk-n">{s.k}</span><span className="rk-v num">{s.n}</span><span className="rk-d num" style={{ color: "#5f6f8a" }}>{Math.round(s.n / count * 100)}%</span></div><div className="rk-bar"><i style={{ width: Math.max(4, s.n / maxStat * 100) + "%", background: C_PURPLE }} /></div></div>
          ))}</div>
      </GCard>
    </div>
  );
}

/* ============================ RKAP tab ============================ */
function RkapTab({ rkap, target, real, pct, onAdd, onEdit, onDel }) {
  const sisa = Math.max(0, target - real);
  return (
    <>
      <div className="toolbar">
        <div style={{ fontSize: 13, color: "var(--muted)" }}>Sasaran tender awal (rencana perolehan). Realisasi hanya dari tender yang berstatus <b style={{ color: "#16a34a" }}>Menang</b>.</div>
        <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={onAdd}><Plus size={16} /> Tambah RKAP</button>
      </div>

      <div className="rkap-summary">
        <div className="rkap-sumbox" style={{ borderLeftColor: "#1d4ed8" }}><div className="l">Target RKAP</div><div className="v num">{idr(target)}</div></div>
        <div className="rkap-sumbox" style={{ borderLeftColor: "#16a34a" }}><div className="l">Realisasi (Menang)</div><div className="v num">{idr(real)}</div></div>
        <div className="rkap-sumbox" style={{ borderLeftColor: "#d9560b" }}><div className="l">Sisa Target</div><div className="v num">{idr(sisa)}</div></div>
        <div className="rkap-sumbox" style={{ borderLeftColor: "#7c3aed" }}><div className="l">Capaian</div><div className="v num">{pct}%</div><div className="rkap-bar" style={{ marginTop: 6 }}><i style={{ width: Math.min(100, pct) + "%" }} /></div></div>
      </div>

      <div className="panel">
        <div className="grp-bar" style={{ background: "#1d4ed8", borderTop: 0 }}>
          <span className="ic" style={{ background: "rgba(255,255,255,.22)" }}><Target size={13} /></span>
          <h3 style={{ color: "#fff" }}>Data RKAP</h3>
          <span className="meta" style={{ color: "rgba(255,255,255,.9)" }}><b className="num">{rkap.length}</b> item</span>
        </div>
        {rkap.length === 0 ? <Empty icon={<Target size={22} />} text="Belum ada item RKAP." /> :
          <div className="t-scroll">
            <table className="t">
              <thead><tr><th>Nama / Client</th><th>Bulan Rencana</th><th>Nilai Target</th><th>Prakualifikasi</th><th>NR-1</th><th>Keterangan</th><th></th></tr></thead>
              <tbody>{rkap.map((r) => (
                <tr key={r.id}>
                  <td className="nama">{r.nama}<div className="sub-line"><JcBadge jenis={r.jenisClient} /> {r.client || "—"}</div></td>
                  <td className="num" style={{ whiteSpace: "nowrap" }}>{fmtMonth(r.bulan)}</td>
                  <td className="num">{idr(r.nilai)}</td>
                  <td><span className={"chip chip--" + (r.praku === "Lolos" ? "ok" : "soon")}>{r.praku || "Belum"}</span></td>
                  <td><span className={"chip chip--" + (r.nr1 === "ACC" ? "ok" : "soon")}>{r.nr1 || "Belum"}</span></td>
                  <td className="ket">{r.ket || "—"}</td>
                  <td><div style={{ display: "flex", gap: 2 }}><button className="icon-btn" onClick={() => onEdit(r)}><Pencil size={15} /></button><button className="icon-btn danger" onClick={() => onDel(r.id)}><Trash2 size={15} /></button></div></td>
                </tr>
              ))}</tbody>
            </table>
          </div>}
      </div>
    </>
  );
}

/* ============================ Tender group/table ============================ */
function TenderGroup({ title, icon, rows, pById, tone, onEdit, onDel, onInfo, onHasil }) {
  const total = rows.reduce((s, t) => s + (+t.nilai || 0), 0);
  const sorted = [...rows].sort((a, b) => {
    const pr = (PRIO_RANK[a.prioritas] ?? 1) - (PRIO_RANK[b.prioritas] ?? 1);
    if (pr !== 0) return pr;
    const ra = remainingDays(a.tgl), rb = remainingDays(b.tgl);
    return (ra === null ? 9999 : ra) - (rb === null ? 9999 : rb);
  });
  return (
    <div className="panel">
      <div className="grp-bar" style={{ background: tone, borderTop: 0 }}>
        <span className="ic" style={{ background: "rgba(255,255,255,.22)" }}>{icon}</span>
        <h3 style={{ color: "#fff" }}>{title}</h3>
        <span className="meta" style={{ color: "rgba(255,255,255,.9)" }}><b className="num">{rows.length}</b> tender · <span className="num">{idrShort(total)}</span></span></div>
      {rows.length === 0 ? <Empty icon={<FileText size={22} />} text={`Belum ada tender pada grup ${title.toLowerCase()}.`} /> :
        <div className="t-scroll">
          <table className="t">
            <thead><tr>
              <th>Nama / Client</th><th>Nilai</th><th>Hasil</th><th>Status</th><th>Pemasukan</th><th>Sisa</th>
              <th>NR-1</th><th>NR-2</th><th>Format</th><th>Tim</th><th>Update Terakhir</th><th></th>
            </tr></thead>
            <tbody>{sorted.map((t) => {
              const u = urgency(remainingDays(t.tgl));
              const u2 = urgency(remainingDays(t.nr2tgl));
              const tim = t.tim || {};
              const members = ROLE_CATS.flatMap((r) => (tim[r] || []).map((id) => ({ role: r, p: pById[id] }))).filter((x) => x.p);
              const hasil = t.hasil || "proses";
              const ups = t.updates || [];
              const latest = ups[0];
              return (
                <tr key={t.id}>
                  <td className="nama"><div className="nm-line"><PrioBadge p={t.prioritas} />{t.nama}</div><div className="sub-line"><JcBadge jenis={t.jenisClient} /> {t.client}</div></td>
                  <td className="num">{idrShort(t.nilai)}</td>
                  <td><select className="hasil-sel" value={hasil} onChange={(e) => onHasil(t.id, e.target.value)} style={{ color: HASIL[hasil].color, borderColor: tint(HASIL[hasil].color, 0.5), background: tint(HASIL[hasil].color, 0.1) }}>
                    {Object.entries(HASIL).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                  </select></td>
                  <td><span className="badge">{t.status}</span>{(t.status === "KSO" || t.status === "JO") && t.partner ? <div className="sub-line">+ {t.partner}</div> : null}</td>
                  <td className="num" style={{ whiteSpace: "nowrap" }}>{fmtDate(t.tgl)}</td>
                  <td><span className={"chip chip--" + u.lvl}>{u.label}</span></td>
                  <td><span className={"chip chip--" + (t.nr1 === "Sudah" ? "ok" : "soon")}>{t.nr1 || "Belum"}</span></td>
                  <td className="num" style={{ whiteSpace: "nowrap" }}>{t.nr2tgl ? <>{fmtDate(t.nr2tgl)}<div className="sub-line"><span className={"chip chip--" + u2.lvl}>{u2.label}</span></div></> : "—"}</td>
                  <td className="fmt">{t.format}</td>
                  <td>{members.length ? <div className="av-stack" title={members.map((m) => `${m.role}: ${m.p.nama}`).join("\n")}>{members.slice(0, 5).map((m, i) => <div className="av" key={i} style={{ background: ROLE_COLOR[m.role] }}>{initials(m.p.nama)}</div>)}</div> : <span style={{ color: "var(--muted-2)" }}>—</span>}</td>
                  <td className="ket"><div className="ket-cell" onClick={() => onInfo(t)}>{latest ? latest.teks : (t.ket || "—")}</div><button className="lnk" onClick={() => onInfo(t)}><MessageSquare size={12} /> {ups.length ? `${ups.length} update` : "Tambah update"}</button></td>
                  <td><div style={{ display: "flex", gap: 2 }}>
                    <button className="icon-btn act-info" onClick={() => onInfo(t)} title="Info & update rapat"><MessageSquare size={15} />{ups.length > 0 && <span className="cnt">{ups.length}</span>}</button>
                    <button className="icon-btn" onClick={() => onEdit(t)} title="Ubah"><Pencil size={15} /></button>
                    <button className="icon-btn danger" onClick={() => onDel(t.id)} title="Hapus"><Trash2 size={15} /></button>
                  </div></td>
                </tr>
              );
            })}</tbody>
          </table>
        </div>}
    </div>
  );
}

/* ============================ Personel ============================ */
function PersonRow({ p, color, wl, onEdit, onDel }) {
  return (
    <div className="prow">
      <div className="pav" style={{ background: color }}>{initials(p.nama)}</div>
      <div className="pmeta">
        <div className="pname">{p.nama}{p.alias ? <span> · {p.alias}</span> : ""}</div>
        <div className="psb num">{p.nip ? `NIP ${p.nip} · ` : ""}<span style={{ fontFamily: "inherit" }}>{p.struktural}{p.fungsional ? ` · ${p.fungsional}` : ""}</span></div>
        <div className="ptags">
          {(p.jobdesk || []).map((j) => <span className="ptag" key={j} style={{ background: JOBDESK_COLOR[j] || "#64748b" }}>{j}</span>)}
          {(p.disiplin || []).map((d) => <span className="ptag disc" key={d} style={{ background: DISC[d] }}>{d}</span>)}
        </div>
      </div>
      <div className="pwl num"><b>{wl ? wl.count : 0}</b> aktif</div>
      <div style={{ display: "flex", gap: 2 }}><button className="icon-btn" onClick={() => onEdit(p)}><Pencil size={15} /></button><button className="icon-btn danger" onClick={() => onDel(p.id)}><Trash2 size={15} /></button></div>
    </div>
  );
}

function SimpleSec({ label, color, people, wlMap, onEdit, onDel }) {
  return (
    <div className="psec">
      <div className="psec-h" style={{ background: color }}>{label}<span className="pc num">{people.length}</span></div>
      {people.length === 0 ? <div style={{ padding: "14px 15px", color: "var(--muted)", fontSize: 13 }}>Belum ada personel.</div> :
        people.map((p) => <PersonRow key={p.id} p={p} color={color} wl={wlMap[p.id]} onEdit={onEdit} onDel={onDel} />)}
    </div>
  );
}

function Personel({ personnel, workload, onAdd, onEdit, onDel }) {
  const wlMap = Object.fromEntries(workload.map((w) => [w.id, w]));
  const cat = (key) => personnel.filter((p) => personCategory(p) === key);

  return (
    <>
      <div className="toolbar"><div style={{ fontSize: 13, color: "var(--muted)" }}>Dikelompokkan per jabatan struktural. Jobdesk ditampilkan sebagai kotak berwarna di bawah nama.</div>
        <button className="btn btn-primary" style={{ marginLeft: "auto" }} onClick={onAdd}><Plus size={16} /> Tambah Personel</button></div>

      <SimpleSec label="Manager" color={CAT.Manager} people={cat("Manager")} wlMap={wlMap} onEdit={onEdit} onDel={onDel} />
      <SimpleSec label="Expert" color={CAT.Expert} people={cat("Expert")} wlMap={wlMap} onEdit={onEdit} onDel={onDel} />
      <SimpleSec label="Coordinator" color={CAT.Coordinator} people={cat("Coordinator")} wlMap={wlMap} onEdit={onEdit} onDel={onDel} />
      <SimpleSec label="Staf" color={CAT.Staf} people={cat("Staf")} wlMap={wlMap} onEdit={onEdit} onDel={onDel} />
    </>
  );
}

/* ============================ Empty ============================ */
function Empty({ icon, text }) { return <div className="empty"><div className="ic">{icon}</div>{text}</div>; }
function JcBadge({ jenis }) {
  const c = JC_COLOR[jenis] || "#6b7280";
  return <span className="jc" style={{ color: c, background: tint(c, 0.12), borderColor: tint(c, 0.35) }}>{jenis || "—"}</span>;
}
function PrioBadge({ p }) {
  if (p === "high") return <span className="prio prio-high"><ChevronsUp size={12} /> High</span>;
  if (p === "low") return <span className="prio prio-low"><ChevronsDown size={12} /> Low</span>;
  return null;
}

/* ============================ Tender modal ============================ */
function TenderModal({ init, personnel, onSave, onClose }) {
  const [f, setF] = useState(() => init ? { hasil: "proses", ...init, tim: { Expert: [], Compiler: [], Estimator: [], SCM: [], ...(init.tim || {}) } } : { grup: "sasaran", nama: "", client: "", jenisClient: "Pemerintah", nilai: "", status: "Mandiri", partner: "", tgl: "", nr1: "Belum", nr2tgl: "", format: "1 Sampul", prioritas: "normal", hasil: "proses", ket: "", tim: { Expert: [], Compiler: [], Estimator: [], SCM: [] }, updates: [] });
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const toggleRole = (role, id) => setF((p) => { const cur = p.tim[role] || []; return { ...p, tim: { ...p.tim, [role]: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id] } }; });
  const submit = () => { if (!f.nama.trim()) { window.alert("Nama tender wajib diisi."); return; } onSave({ ...f, nilai: Number(f.nilai) || 0 }); };
  const rd = remainingDays(f.tgl);

  return (
    <div className="backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-head"><h3>{init ? "Ubah Tender" : "Tambah Tender"}</h3><button className="icon-btn" style={{ marginLeft: "auto" }} onClick={onClose}><X size={18} /></button></div>
        <div className="modal-body">
          <div className="row2">
            <div className="field"><label>Grup</label><div className="seg">{["sasaran", "cadangan"].map((g) => <button key={g} className={f.grup === g ? "on" : ""} onClick={() => set("grup", g)}>{g === "sasaran" ? "🎯 Sasaran" : "📋 Cadangan"}</button>)}</div></div>
            <div className="field"><label>Prioritas</label><div className="seg">{[["high", "Tinggi"], ["normal", "Normal"], ["low", "Rendah"]].map(([v, l]) => <button key={v} className={f.prioritas === v ? "on" : ""} onClick={() => set("prioritas", v)}>{l}</button>)}</div></div>
          </div>
          <div className="field"><label>Nama Tender</label><input className="input" value={f.nama} onChange={(e) => set("nama", e.target.value)} placeholder="cth. Pembangunan Gedung…" /></div>
          <div className="row2">
            <div className="field"><label>Client / Pemberi Kerja</label><input className="input" value={f.client} onChange={(e) => set("client", e.target.value)} placeholder="cth. Kementerian PUPR" /></div>
            <div className="field"><label>Jenis Client</label><select className="select" value={f.jenisClient} onChange={(e) => set("jenisClient", e.target.value)}>{JENIS_CLIENT.map((j) => <option key={j}>{j}</option>)}</select></div>
          </div>
          <div className="row2">
            <div className="field"><label>Nilai Tender (Rp)</label><input className="input num" type="number" value={f.nilai} onChange={(e) => set("nilai", e.target.value)} placeholder="0" />{f.nilai > 0 && <div className="hint num">{idr(f.nilai)}</div>}</div>
            <div className="field"><label>Status Hasil</label><div className="seg">{Object.entries(HASIL).map(([k, v]) => <button key={k} className={f.hasil === k ? "on" : ""} onClick={() => set("hasil", k)}>{v.label}</button>)}</div><div className="hint">Hanya "Menang" yang masuk realisasi RKAP.</div></div>
          </div>
          <div className="field"><label>Status Keikutsertaan</label><div className="seg">{STATUS.map((s) => <button key={s} className={f.status === s ? "on" : ""} onClick={() => set("status", s)}>{s}</button>)}</div>
            {(f.status === "KSO" || f.status === "JO") && <input className="input" style={{ marginTop: 8 }} value={f.partner} onChange={(e) => set("partner", e.target.value)} placeholder={`Nama partner ${f.status}, cth. PT Wijaya Karya`} />}</div>
          <div className="row2">
            <div className="field"><label>Tanggal Pemasukan</label><input className="input num" type="date" value={f.tgl} onChange={(e) => set("tgl", e.target.value)} />{rd !== null && <div className="hint">Sisa: <b className="num">{urgency(rd).label}</b> (otomatis)</div>}</div>
            <div className="field"><label>Format Pemasukan</label><div className="seg">{FORMAT.map((s) => <button key={s} className={f.format === s ? "on" : ""} onClick={() => set("format", s)}>{s}</button>)}</div></div>
          </div>
          <div className="row2">
            <div className="field"><label>Status NR-1</label><div className="seg">{["Sudah", "Belum"].map((s) => <button key={s} className={f.nr1 === s ? "on" : ""} onClick={() => set("nr1", s)}>{s}</button>)}</div></div>
            <div className="field"><label>Tanggal NR-2</label><input className="input num" type="date" value={f.nr2tgl} onChange={(e) => set("nr2tgl", e.target.value)} /></div>
          </div>
          <div className="field"><label>Penanggung Jawab per Peran</label>
            {personnel.length === 0 ? <div className="hint">Belum ada personel.</div> :
              ROLE_CATS.map((role) => (
                <div key={role} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, margin: "8px 0 6px" }}>
                    <span style={{ width: 9, height: 9, borderRadius: 3, background: ROLE_COLOR[role] }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: ROLE_COLOR[role] }}>{role}</span>
                  </div>
                  <div className="chk-grid">{personnel.map((p) => { const on = (f.tim[role] || []).includes(p.id); return <label key={p.id} className={"chk" + (on ? " on" : "")}><input type="checkbox" checked={on} onChange={() => toggleRole(role, p.id)} /><span>{p.alias || p.nama} <span style={{ color: "var(--muted)", fontSize: 11 }}>· {p.struktural}</span></span></label>; })}</div>
                </div>
              ))}
          </div>
          <div className="field"><label>Keterangan Tender</label><textarea className="textarea" value={f.ket} onChange={(e) => set("ket", e.target.value)} placeholder="cth. Menunggu addendum, finalisasi metode…" /></div>
        </div>
        <div className="modal-foot"><button className="btn" onClick={onClose}>Batal</button><button className="btn btn-primary" onClick={submit}>{init ? "Simpan Perubahan" : "Tambah Tender"}</button></div>
      </div>
    </div>
  );
}

/* ============================ Person modal ============================ */
function PersonModal({ init, onSave, onClose }) {
  const [f, setF] = useState(() => init || { nip: "", nama: "", alias: "", struktural: "Staf", fungsional: "", jobdesk: [], disiplin: [] });
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const toggle = (key, val) => setF((p) => ({ ...p, [key]: p[key].includes(val) ? p[key].filter((x) => x !== val) : [...p[key], val] }));
  const submit = () => { if (!f.nama.trim()) { window.alert("Nama wajib diisi."); return; } onSave(f); };
  const showDisiplin = f.jobdesk.includes("Estimator") || f.struktural === "Coordinator";

  return (
    <div className="backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-head"><h3>{init ? "Ubah Personel" : "Tambah Personel"}</h3><button className="icon-btn" style={{ marginLeft: "auto" }} onClick={onClose}><X size={18} /></button></div>
        <div className="modal-body">
          <div className="row2">
            <div className="field"><label>NIP</label><input className="input num" value={f.nip} onChange={(e) => set("nip", e.target.value)} placeholder="cth. 19850304" /></div>
            <div className="field"><label>Alias <span className="opt">(opsional)</span></label><input className="input" value={f.alias} onChange={(e) => set("alias", e.target.value)} placeholder="cth. Pak Budi" /></div>
          </div>
          <div className="field"><label>Nama</label><input className="input" value={f.nama} onChange={(e) => set("nama", e.target.value)} placeholder="cth. Galang Nur Aji Pamungkas" autoFocus /></div>
          <div className="row2">
            <div className="field"><label>Jabatan Struktural</label><div className="seg">{STRUKTURAL.map((s) => <button key={s} className={f.struktural === s ? "on" : ""} onClick={() => set("struktural", s)}>{s}</button>)}</div></div>
            <div className="field"><label>Jabatan Fungsional <span className="opt">(opsional)</span></label><input className="input" value={f.fungsional} onChange={(e) => set("fungsional", e.target.value)} placeholder="cth. Ahli Muda 1" /></div>
          </div>
          <div className="field"><label>Jobdesk <span className="opt">(boleh lebih dari satu)</span></label>
            <div className="chk-grid">{JOBDESK.map((j) => <label key={j} className={"chk" + (f.jobdesk.includes(j) ? " on" : "")}><input type="checkbox" checked={f.jobdesk.includes(j)} onChange={() => toggle("jobdesk", j)} /><span>{j}</span></label>)}</div>
            <div className="hint">Kategori personel mengikuti Jabatan Struktural (Manager / Expert / Coordinator / Staf). Jobdesk hanya menandai peran teknis.</div>
          </div>
          {showDisiplin && <div className="field"><label>Disiplin <span className="opt">(untuk Estimator / Coordinator)</span></label>
            <div className="chk-grid">{DISIPLIN.map((d) => <label key={d} className={"chk" + (f.disiplin.includes(d) ? " on" : "")}><input type="checkbox" checked={f.disiplin.includes(d)} onChange={() => toggle("disiplin", d)} /><span>{d}</span></label>)}</div></div>}
        </div>
        <div className="modal-foot"><button className="btn" onClick={onClose}>Batal</button><button className="btn btn-primary" onClick={submit}>{init ? "Simpan" : "Tambah"}</button></div>
      </div>
    </div>
  );
}

/* ============================ RKAP modal ============================ */
function RkapModal({ init, onSave, onClose }) {
  const [f, setF] = useState(() => init || { nama: "", client: "", jenisClient: "Pemerintah", bulan: "", nilai: "", praku: "Belum", nr1: "Belum", ket: "" });
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const submit = () => { if (!f.nama.trim()) { window.alert("Nama RKAP wajib diisi."); return; } onSave({ ...f, nilai: Number(f.nilai) || 0 }); };
  return (
    <div className="backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 480 }}>
        <div className="modal-head"><h3>{init ? "Ubah RKAP" : "Tambah RKAP"}</h3><button className="icon-btn" style={{ marginLeft: "auto" }} onClick={onClose}><X size={18} /></button></div>
        <div className="modal-body">
          <div className="field"><label>Nama / Sasaran Awal</label><input className="input" value={f.nama} onChange={(e) => set("nama", e.target.value)} placeholder="cth. Infrastruktur Jalan & Jembatan" autoFocus /></div>
          <div className="row2">
            <div className="field"><label>Client / Pemberi Kerja</label><input className="input" value={f.client} onChange={(e) => set("client", e.target.value)} placeholder="cth. Kementerian PUPR" /></div>
            <div className="field"><label>Jenis Client</label><select className="select" value={f.jenisClient} onChange={(e) => set("jenisClient", e.target.value)}>{JENIS_CLIENT.map((j) => <option key={j}>{j}</option>)}</select></div>
          </div>
          <div className="row2">
            <div className="field"><label>Bulan Rencana Perolehan</label><input className="input num" type="month" value={f.bulan} onChange={(e) => set("bulan", e.target.value)} /></div>
            <div className="field"><label>Nilai Target (Rp)</label><input className="input num" type="number" value={f.nilai} onChange={(e) => set("nilai", e.target.value)} placeholder="0" /></div>
          </div>
          {f.nilai > 0 && <div className="hint num" style={{ marginTop: -6, marginBottom: 12 }}>{idr(f.nilai)}</div>}
          <div className="row2">
            <div className="field"><label>Status Prakualifikasi</label><div className="seg">{["Lolos", "Belum"].map((s) => <button key={s} className={f.praku === s ? "on" : ""} onClick={() => set("praku", s)}>{s}</button>)}</div></div>
            <div className="field"><label>Status NR-1</label><div className="seg">{["ACC", "Belum"].map((s) => <button key={s} className={f.nr1 === s ? "on" : ""} onClick={() => set("nr1", s)}>{s}</button>)}</div></div>
          </div>
          <div className="field"><label>Keterangan <span className="opt">(opsional)</span></label><input className="input" value={f.ket} onChange={(e) => set("ket", e.target.value)} placeholder="cth. Segmen energi" /></div>
        </div>
        <div className="modal-foot"><button className="btn" onClick={onClose}>Batal</button><button className="btn btn-primary" onClick={submit}>{init ? "Simpan" : "Tambah"}</button></div>
      </div>
    </div>
  );
}

/* ============================ Info / Update rapat modal ============================ */
function InfoModal({ tender, onAdd, onDel, onClose }) {
  const [teks, setTeks] = useState("");
  const [tgl, setTgl] = useState(dkey(TODAY));
  const ups = [...(tender.updates || [])].sort((a, b) => b.tgl.localeCompare(a.tgl));
  const submit = () => { if (!teks.trim()) return; onAdd(tender.id, { tgl, teks: teks.trim() }); setTeks(""); };
  return (
    <div className="backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" style={{ maxWidth: 560 }}>
        <div className="modal-head" style={{ background: "#1d4ed8", borderBottom: 0 }}>
          <Megaphone size={17} color="#fff" />
          <h3 style={{ color: "#fff", marginLeft: 8 }}>Update Rapat Koordinasi</h3>
          <button className="icon-btn" style={{ marginLeft: "auto", color: "#fff" }} onClick={onClose}><X size={18} /></button>
        </div>
        <div className="modal-body">
          <div style={{ fontWeight: 700, fontSize: 14 }}>{tender.nama}</div>
          <div className="sub-line" style={{ marginBottom: 10 }}><JcBadge jenis={tender.jenisClient} /> {tender.client}</div>
          {tender.ket && <div style={{ fontSize: 12.5, color: "var(--muted)", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 8, padding: "8px 11px", marginBottom: 14 }}>Keterangan umum: {tender.ket}</div>}

          <div className="field" style={{ marginBottom: 8 }}>
            <label>Tambah Update (mis. hasil rapat koordinasi)</label>
            <textarea className="textarea" value={teks} onChange={(e) => setTeks(e.target.value)} placeholder="cth. Tim estimasi sipil selesai 60%, menunggu data MEP dari partner…" />
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
            <input className="input num" type="date" value={tgl} onChange={(e) => setTgl(e.target.value)} style={{ maxWidth: 170 }} />
            <button className="btn btn-primary btn-sm" onClick={submit}><Plus size={15} /> Tambah</button>
          </div>

          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--ink-3)" }}>Riwayat Update</label>
          {ups.length === 0 ? <div style={{ color: "var(--muted)", fontSize: 13, padding: "10px 0" }}>Belum ada update. Tambahkan catatan dari rapat koordinasi mingguan.</div> :
            <div style={{ marginTop: 6 }}>{ups.map((u, i) => (
              <div className="upd" key={i}>
                <span className="when num">{fmtDate(u.tgl)}</span>
                <span className="body">{u.teks}</span>
                <button className="icon-btn danger" onClick={() => onDel(tender.id, (tender.updates || []).indexOf(u))} title="Hapus"><Trash2 size={13} /></button>
              </div>
            ))}</div>}
        </div>
        <div className="modal-foot"><button className="btn btn-primary" onClick={onClose}>Selesai</button></div>
      </div>
    </div>
  );
}

/* ============================ Struktur Organisasi ============================ */
function descendantIds(id, all) {
  const out = new Set();
  const rec = (pid) => all.filter((x) => x.atasanId === pid).forEach((c) => { if (!out.has(c.id)) { out.add(c.id); rec(c.id); } });
  rec(id); return out;
}
function OrgNode({ p, all, seen }) {
  if (seen.has(p.id)) return null;
  const ns = new Set(seen); ns.add(p.id);
  const kids = all.filter((x) => x.atasanId === p.id && x.id !== p.id);
  const lini = kids.filter((k) => (k.relasi || "lini") !== "staf");
  const staf = kids.filter((k) => (k.relasi || "lini") === "staf");
  const color = CAT[personCategory(p)];
  return (
    <li>
      <div className="node-wrap">
        <div className="node" style={{ borderTopColor: color }}>
          <div className="node-av" style={{ background: color }}>{initials(p.nama)}</div>
          <div className="node-nm">{p.alias || p.nama}</div>
          <div className="node-jb">{p.struktural}{p.fungsional ? ` · ${p.fungsional}` : ""}</div>
          <span className="node-tag" style={{ background: color }}>{personCategory(p)}</span>
        </div>
        {staf.length > 0 && <div className="node-staf">{staf.map((s) => <div key={s.id} className="staf-box" style={{ borderLeftColor: CAT[personCategory(s)] }}>{s.alias || s.nama}</div>)}</div>}
      </div>
      {lini.length > 0 && <ul>{lini.map((c) => <OrgNode key={c.id} p={c} all={all} seen={ns} />)}</ul>}
    </li>
  );
}
function StrukturOrg({ personnel, onPatch }) {
  const roots = personnel.filter((p) => !p.atasanId || !personnel.find((x) => x.id === p.atasanId));
  const liniRoots = roots.filter((r) => (r.relasi || "lini") !== "staf");
  const stafRoots = roots.filter((r) => (r.relasi || "lini") === "staf");
  return (
    <>
      <div className="org-scroll">
        {personnel.length === 0 ? <Empty icon={<Network size={22} />} text="Belum ada personel. Tambahkan di tab Personel." /> :
          <div className="tree">
            <ul>{liniRoots.map((r) => <OrgNode key={r.id} p={r} all={personnel} seen={new Set()} />)}</ul>
          </div>}
        {stafRoots.length > 0 && <div style={{ textAlign: "center", marginTop: 10, fontSize: 11.5, color: "var(--muted)" }}>Belum punya atasan (staf): {stafRoots.map((s) => s.alias || s.nama).join(", ")}</div>}
      </div>

      <div className="panel org-edit">
        <div className="panel-head"><h2><Network size={16} /> Atur Hubungan</h2><span className="sub">pilih atasan &amp; jenis relasi tiap personel</span></div>
        <div className="t-scroll">
          <table>
            <thead><tr><th>Personel</th><th>Bertanggung jawab ke (Atasan)</th><th>Relasi / Level</th></tr></thead>
            <tbody>
              {personnel.map((p) => {
                const blocked = descendantIds(p.id, personnel);
                const opts = personnel.filter((x) => x.id !== p.id && !blocked.has(x.id));
                return (
                  <tr key={p.id}>
                    <td><b style={{ fontSize: 13 }}>{p.alias || p.nama}</b><div className="sub-line">{p.struktural}{p.fungsional ? ` · ${p.fungsional}` : ""}</div></td>
                    <td><select value={p.atasanId || ""} onChange={(e) => onPatch(p.id, { atasanId: e.target.value })}>
                      <option value="">— Puncak (tanpa atasan) —</option>
                      {opts.map((o) => <option key={o.id} value={o.id}>{o.alias || o.nama} ({o.struktural})</option>)}
                    </select></td>
                    <td><select value={p.relasi || "lini"} onChange={(e) => onPatch(p.id, { relasi: e.target.value })} style={{ maxWidth: 180 }}>
                      <option value="lini">Bawahan (di bawah)</option>
                      <option value="staf">Staf (di samping)</option>
                    </select></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
