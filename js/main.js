/* Renders every section from js/data.js. You normally do not need to edit this file. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (n) => esc(n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase());
  const statusLabel = { completed: "Completed", upcoming: "Upcoming", pending: "Pending" };
  const badge = (s) => `<span class="badge ${esc(s)}">${statusLabel[s] || esc(s)}</span>`;

  const ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>'
  };

  /* ---------- HOME ---------- */
  const P = S.project;
  document.title = `${P.name} | Research Project`;
  ["brandName", "heroName", "footName"].forEach((id) => ($("#" + id).textContent = P.name));
  ["brandMark", "footMark"].forEach((id) => ($("#" + id).textContent = P.name.charAt(0).toUpperCase()));
  $("#heroTagline").textContent = P.tagline;
  $("#heroAbstract").textContent = P.abstract;
  $("#heroImage").src = P.heroImage;
  $("#heroMeta").innerHTML = [P.projectId && `<span class="tag">Project ID: ${esc(P.projectId)}</span>`, `<span class="tag">${esc(P.faculty)}</span>`].filter(Boolean).join("");
  $("#featureGrid").innerHTML = P.features.map((f, i) => `
    <div class="card reveal"><div class="feature-icon">0${i + 1}</div><h3>${esc(f.title)}</h3><p style="margin:0;color:var(--muted)">${esc(f.text)}</p></div>`).join("");
  if (P.demoVideo) $("#videoSlot").innerHTML = `<div class="video-wrap"><iframe src="${esc(P.demoVideo)}" title="Project demo video" loading="lazy" allowfullscreen></iframe></div>`;
  $("#footTagline").textContent = P.tagline;
  $("#footInst").textContent = `${P.faculty}, ${P.institution}`;
  $("#footBottom").textContent = `© ${new Date().getFullYear()} ${P.name} Research Team · ${P.institution}`;

  /* ---------- DOMAIN ---------- */
  const D = S.domain;
  const refs = (arr) => (arr || []).map((n) => `<a class="ref" href="#ref-${n}">[${n}]</a>`).join(" ");
  $("#tab-lit").innerHTML = `<div class="grid g2">${D.literature.map((l) => `
    <div class="card"><h3>${esc(l.title)}</h3><p style="margin:0">${esc(l.text)} ${refs(l.refs)}</p></div>`).join("")}</div>`;

  const cell = (v) => (v === true ? '<span class="yes" aria-label="Yes">✓</span>' : v === false ? '<span class="no" aria-label="No">✗</span>' : esc(v));
  $("#tab-gap").innerHTML = `<p class="panel-intro">${esc(D.gap.intro)}</p>
    <div class="table-wrap"><table><thead><tr>${D.gap.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
    <tbody>${D.gap.rows.map((r) => `<tr>${r.map((v) => `<td>${cell(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  $("#tab-prob").innerHTML = `<div style="max-width:820px;margin:0 auto">
    <div class="problem-box"><p>${esc(D.problem.statement)}</p></div>
    <div class="card"><ul class="checklist">${D.problem.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div></div>`;

  $("#tab-obj").innerHTML = `<div class="main-obj"><h3>Main Objective</h3><p>${esc(D.objectives.main)}</p></div>
    <div class="grid g4">${D.objectives.sub.map((o) => `
      <div class="card"><span class="tag">${esc(o.owner)}</span><h3 style="margin-top:12px">${esc(o.title)}</h3><p style="margin:0;color:var(--muted)">${esc(o.text)}</p></div>`).join("")}</div>`;

  $("#tab-meth").innerHTML = `<p class="panel-intro">${esc(D.methodology.text)}</p>
    ${D.methodology.diagram ? `<div class="diagram"><img src="${esc(D.methodology.diagram)}" alt="System architecture diagram" loading="lazy" /></div>` : ""}
    <div class="card"><div class="steps">${D.methodology.steps.map((s) => `<div class="step"><div><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div></div>`).join("")}</div></div>`;

  const techGroups = {};
  D.technologies.forEach((t) => (techGroups[t.category] = techGroups[t.category] || []).push(t.name));
  $("#tab-tech").innerHTML = `<div class="grid g3">${Object.entries(techGroups).map(([cat, items]) => `
    <div class="card tech-group"><h4>${esc(cat)}</h4><div class="tech-chips">${items.map((n) => `<span class="tech-chip">${esc(n)}</span>`).join("")}</div></div>`).join("")}</div>`;

  $("#references").innerHTML = `<h3>References</h3><ol>${D.references.map((r, i) => `<li id="ref-${i + 1}">${esc(r)}</li>`).join("")}</ol>`;

  function bindTabs(container, onSwitch) {
    $$(".tab", container).forEach((btn) =>
      btn.addEventListener("click", () => {
        $$(".tab", container).forEach((b) => b.classList.toggle("active", b === btn));
        onSwitch(btn.dataset.tab);
      })
    );
  }
  bindTabs($("#domainTabs"), (key) => $$("#domain .tab-panel").forEach((p) => p.classList.toggle("active", p.id === "tab-" + key)));

  /* ---------- MILESTONES ---------- */
  const M = S.milestones;
  const sel = $("#msSelect");
  sel.innerHTML = M.map((m, i) => `<option value="${i}">${esc(m.title)}</option>`).join("");
  function showMilestone(i) {
    const m = M[i];
    sel.value = i;
    $("#msDetail").innerHTML = `
      <div class="ms-top"><h3 style="margin:0">${esc(m.title)}</h3>${badge(m.status)}</div>
      <p>${esc(m.description)}</p>
      <div class="ms-stats"><div class="stat"><small>Date</small><strong>${esc(m.date)}</strong></div>
      <div class="stat"><small>Marks Allocated</small><strong>${esc(m.marks)}</strong></div></div>
      <h4>Deliverables</h4><ul class="checklist">${m.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>`;
    $$(".tl-item").forEach((t, j) => t.classList.toggle("selected", j === +i));
  }
  $("#msTimeline").innerHTML = M.map((m, i) => `
    <button class="tl-item ${esc(m.status)}" data-i="${i}" aria-label="${esc(m.title)}"><div class="tl-dot">${m.status === "completed" ? "✓" : i + 1}</div><span>${esc(m.title)}</span></button>`).join("");
  $$(".tl-item").forEach((t) => t.addEventListener("click", () => showMilestone(t.dataset.i)));
  sel.addEventListener("change", () => showMilestone(sel.value));
  const firstOpen = M.findIndex((m) => m.status !== "completed");
  showMilestone(firstOpen === -1 ? 0 : firstOpen);

  /* ---------- DOCUMENTS ---------- */
  const DOCS = S.documents;
  const cats = ["All", ...new Set(DOCS.map((d) => d.category))];
  $("#docTabs").innerHTML = cats.map((c, i) => `<button class="tab ${i === 0 ? "active" : ""}" data-tab="${esc(c)}">${esc(c)}</button>`).join("");
  const viewBtn = (link, label) => link
    ? `<a class="btn btn-primary btn-sm" href="${esc(link)}" target="_blank" rel="noopener">${label}</a>`
    : `<span class="btn btn-outline btn-sm disabled">Not available yet</span>`;
  function renderDocs(cat) {
    const list = cat === "All" ? DOCS : DOCS.filter((d) => d.category === cat);
    $("#docGrid").innerHTML = list.map((d) => `
      <div class="card doc-card"><div class="doc-icon">${d.content ? "MD" : "PDF"}</div><h3>${esc(d.title)}</h3><p class="muted">${esc(d.category)}</p>
      <div class="doc-meta">${badge(d.status)}${d.content
        ? `<button type="button" class="btn btn-primary btn-sm" data-read="${esc(d.content)}" data-title="${esc(d.title)}">View</button>`
        : viewBtn(d.link, "View")}</div></div>`).join("");
  }
  bindTabs($("#docTabs"), renderDocs);

  /* Markdown reader popup for documents with "content" */
  const reader = $("#readerOverlay"), readerBody = $("#readerBody");
  async function openReader(src, title) {
    $("#readerTitle").textContent = title;
    readerBody.innerHTML = `<p class="muted">Loading…</p>`;
    reader.classList.add("open");
    document.body.style.overflow = "hidden";
    readerBody.scrollTop = 0;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(res.status);
      readerBody.innerHTML = window.marked ? marked.parse(await res.text()) : `<pre>${esc(await res.text())}</pre>`;
    } catch (e) {
      readerBody.innerHTML = `<p class="muted">This document could not be loaded. If you opened the page directly from a file, run it through a local web server instead.</p>`;
      toast("Could not load document");
    }
  }
  function closeReader() { reader.classList.remove("open"); document.body.style.overflow = ""; }
  $("#docGrid").addEventListener("click", (e) => { const b = e.target.closest("[data-read]"); if (b) openReader(b.dataset.read, b.dataset.title); });
  $("#readerClose").addEventListener("click", closeReader);
  reader.addEventListener("click", (e) => { if (e.target === reader) closeReader(); });
  renderDocs("All");

  /* ---------- PRESENTATIONS ---------- */
  $("#slideGrid").innerHTML = S.presentations.map((p) => `
    <div class="card doc-card"><div class="slide-icon">PPT</div><h3>${esc(p.title)}</h3><p class="muted">${esc(p.date)}</p>
    <div class="doc-meta">${badge(p.status)}${viewBtn(p.link, "View Slides")}</div></div>`).join("");

  /* ---------- TEAM ---------- */
  const avatar = (p) => p.photo
    ? `<img class="avatar" src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy" width="116" height="116" />`
    : `<div class="avatar" aria-hidden="true">${initials(p.name)}</div>`;
  const socials = (p) => `<div class="socials">
      ${p.email ? `<a href="mailto:${esc(p.email)}" aria-label="Email ${esc(p.name)}">${ICON.mail}</a>` : ""}
      ${p.linkedin ? `<a href="${esc(p.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a>` : ""}
      ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICON.github}</a>` : ""}</div>`;
  $("#supGrid").innerHTML = S.supervisors.map((p) => `
    <div class="card person">${avatar(p)}<h3>${esc(p.name)}</h3><div class="role">${esc(p.role)}</div>
    <div class="small">${esc(p.dept)}</div><div class="small">${esc(p.email)}</div>${socials(p)}</div>`).join("");
  $("#teamGrid").innerHTML = S.members.map((p) => `
    <div class="card person">${avatar(p)}<h3>${esc(p.name)}</h3><div class="role">${esc(p.role)}</div>
    <div class="small">${esc(p.studentId)}</div><div class="small">${esc(p.degree)}</div>
    <div class="comp"><span class="tag">${esc(p.component)}</span></div>
    <div class="small">${esc(p.email)}</div>
    ${p.achievements && p.achievements.length ? `<ul>${p.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}
    ${socials(p)}</div>`).join("");

  /* ---------- CONTACT ---------- */
  const C = S.contact;
  $("#contactInfo").innerHTML = `
    <div class="contact-item"><div class="ci-icon">${ICON.mail}</div><div><small>Email</small><strong><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></strong></div></div>
    <div class="contact-item"><div class="ci-icon">${ICON.phone}</div><div><small>Phone</small><strong><a href="tel:${esc(C.phone.replace(/\s/g, ""))}">${esc(C.phone)}</a></strong></div></div>
    <div class="contact-item"><div class="ci-icon">${ICON.pin}</div><div><small>Address</small><strong>${esc(C.address)}</strong></div></div>`;
  const template = C.emailTemplate.replace(/\[Project Name\]/g, P.name);
  $("#emailTemplate").textContent = template;
  $("#copyTemplate").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(template); toast("Template copied"); }
    catch (e) { toast("Select the text and copy manually"); }
  });
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = { n: $("#cfName").value.trim(), e: $("#cfEmail").value.trim(), s: $("#cfSubject").value.trim(), m: $("#cfMsg").value.trim() };
    if (!f.n || !f.e || !f.s || !f.m) return toast("Please fill in all fields");
    if (!/^\S+@\S+\.\S+$/.test(f.e)) return toast("Please enter a valid email");
    const body = `${f.m}\n\n— ${f.n} (${f.e})`;
    // Gmail web compose works even when no desktop email app is set up (mailto: would silently do nothing)
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(C.email)}&su=${encodeURIComponent(f.s)}&body=${encodeURIComponent(body)}`;
    window.open(gmail, "_blank", "noopener");
    toast("Opening Gmail — press Send there");
  });

  /* ---------- UI: nav, scrollspy, back-to-top, reveal ---------- */
  const navLinks = $("#navLinks"), toggle = $("#menuToggle");
  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

  const spySections = ["home", "domain", "milestones", "documents", "presentations", "about", "contact"].map((id) => document.getElementById(id));
  const backTop = $("#backTop");
  function onScroll() {
    const y = window.scrollY + 120;
    let current = "home";
    spySections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) current = "contact";
    $$("#navLinks a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    backTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  } else $$(".reveal").forEach((el) => el.classList.add("in"));

  /* ---------- SEARCH (Ctrl/Cmd + K) ---------- */
  const index = [
    ...["Home", "Domain", "Milestones", "Documents", "Presentations", "About Us", "Contact Us"].map((t, i) => ({ t, sub: "Section", href: "#" + spySections[i].id })),
    ...[["Literature Survey", "lit"], ["Research Gap", "gap"], ["Research Problem", "prob"], ["Research Objectives", "obj"], ["Methodology", "meth"], ["Technologies Used", "tech"]].map(([t, k]) => ({ t, sub: "Domain", href: "#domain", tab: k })),
    ...M.map((m, i) => ({ t: m.title, sub: `Milestone · ${m.date}`, href: "#milestones", ms: i })),
    ...DOCS.map((d) => ({ t: d.title, sub: `Document · ${d.category}`, href: "#documents" })),
    ...S.presentations.map((p) => ({ t: p.title + " (slides)", sub: "Presentation", href: "#presentations" })),
    ...[...S.members, ...S.supervisors].map((p) => ({ t: p.name, sub: `${p.role}${p.component ? " · " + p.component : ""}`, href: "#about" })),
    ...D.technologies.map((t) => ({ t: t.name, sub: "Technology", href: "#domain", tab: "tech" }))
  ];
  const overlay = $("#searchOverlay"), input = $("#searchInput"), results = $("#searchResults");
  let hits = [], hl = 0;
  function openSearch() { overlay.classList.add("open"); input.value = ""; renderHits(); setTimeout(() => input.focus(), 30); }
  function closeSearch() { overlay.classList.remove("open"); }
  function renderHits() {
    const q = input.value.trim().toLowerCase();
    hits = (q ? index.filter((x) => (x.t + " " + x.sub).toLowerCase().includes(q)) : index.slice(0, 7)).slice(0, 12);
    hl = 0;
    results.innerHTML = hits.length
      ? hits.map((h, i) => `<li><a href="${h.href}" data-i="${i}" class="${i === 0 ? "hl" : ""}">${esc(h.t)}<small>${esc(h.sub)}</small></a></li>`).join("")
      : `<li class="search-empty">No results found</li>`;
  }
  function go(h) {
    if (!h) return;
    closeSearch();
    if (h.tab) { const b = $(`#domainTabs .tab[data-tab="${h.tab}"]`); if (b) b.click(); }
    if (h.ms !== undefined) showMilestone(h.ms);
  }
  results.addEventListener("click", (e) => { const a = e.target.closest("a"); if (a) go(hits[a.dataset.i]); });
  input.addEventListener("input", renderHits);
  input.addEventListener("keydown", (e) => {
    const links = $$("a", results);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!links.length) return;
      hl = (hl + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle("hl", i === hl));
      links[hl].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && links[hl]) { e.preventDefault(); links[hl].click(); location.hash = hits[hl].href; }
  });
  $("#searchBtn").addEventListener("click", openSearch);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeSearch(); });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); overlay.classList.contains("open") ? closeSearch() : openSearch(); }
    if (e.key === "Escape") { closeSearch(); closeReader(); }
  });

  /* ---------- toast ---------- */
  let tt;
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2200); }
})();
