import { useEffect, useRef } from "react";

const LOCATIONS = [
  { name: "Toronto",      lat: 43.65,  lng: -79.38 },
  { name: "New York",     lat: 40.71,  lng: -74.01 },
  { name: "Cancun",       lat: 21.16,  lng: -86.85 },
  { name: "Bogota",       lat:  4.71,  lng: -74.07 },
  { name: "Dublin",       lat: 53.33,  lng:  -6.25 },
  { name: "London",       lat: 51.51,  lng:  -0.13 },
  { name: "Paris",        lat: 48.86,  lng:   2.35 },
  { name: "Barcelona",    lat: 41.39,  lng:   2.16 },
  { name: "Budapest",     lat: 47.50,  lng:  19.04 },
  { name: "Rome",         lat: 41.90,  lng:  12.50 },
  { name: "Athens",       lat: 37.98,  lng:  23.73 },
  { name: "Istanbul",     lat: 41.01,  lng:  28.98 },
  { name: "Casablanca",   lat: 33.59,  lng:  -7.62 },
  { name: "Marrakech",    lat: 31.63,  lng:  -8.01 },
  { name: "Cairo",        lat: 30.04,  lng:  31.24 },
  { name: "Riyadh",       lat: 24.69,  lng:  46.72 },
  { name: "Doha",         lat: 25.29,  lng:  51.53 },
  { name: "Dubai",        lat: 25.20,  lng:  55.27 },
  { name: "Chennai",      lat: 13.08,  lng:  80.27 },
  { name: "Kuala Lumpur", lat:  3.14,  lng: 101.69 },
  { name: "Singapore",    lat:  1.35,  lng: 103.82 },
];

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });

let worldCache = null;
let scriptsLoaded = false;

export default function TravelMap() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const drawMap = (W, H) => {
    const svg = svgRef.current;
    if (!svg || !window.d3 || !window.topojson || !worldCache) return;

    const d3 = window.d3;
    const topojson = window.topojson;
    const ns = "http://www.w3.org/2000/svg";

    // Clear previous render
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const projection = d3.geoNaturalEarth1()
      .scale(W / 6.5)
      .translate([W / 2, H / 2]);

    const path = d3.geoPath().projection(projection);

    // Defs
    const defs = document.createElementNS(ns, "defs");
    defs.innerHTML = `
      <filter id="tglow">
        <feGaussianBlur stdDeviation="2.5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <style>
        @keyframes tring { 0% { r:4; opacity:.6; } 100% { r:14; opacity:0; } }
        @keyframes tpulse { 0%,100% { opacity:.85; } 50% { opacity:1; } }
        @keyframes tdotIn { from { opacity:0; transform:scale(0); } to { opacity:1; transform:scale(1); } }
        .tdot { animation: tdotIn .5s ease-out both; transform-box:fill-box; transform-origin:center; }
        .tring { animation: tring 2.8s ease-out infinite; }
        .tcore { animation: tpulse 3s ease-in-out infinite; }
      </style>
    `;
    svg.appendChild(defs);

    // Sphere
    const sphere = document.createElementNS(ns, "path");
    sphere.setAttribute("d", path({ type: "Sphere" }));
    sphere.setAttribute("fill", "#030e1f");
    svg.appendChild(sphere);

    // Graticule
    const grat = document.createElementNS(ns, "path");
    grat.setAttribute("d", path(d3.geoGraticule().step([30, 30])()));
    grat.setAttribute("fill", "none");
    grat.setAttribute("stroke", "#0d1f35");
    grat.setAttribute("stroke-width", "0.5");
    svg.appendChild(grat);

    // Countries
    const countries = topojson.feature(worldCache, worldCache.objects.countries);
    countries.features.forEach((feature) => {
      const p = document.createElementNS(ns, "path");
      p.setAttribute("d", path(feature));
      p.setAttribute("fill", "#0f1f35");
      p.setAttribute("stroke", "#1a3355");
      p.setAttribute("stroke-width", "0.6");
      svg.appendChild(p);
    });

    // Borders
    const borders = document.createElementNS(ns, "path");
    borders.setAttribute("d", path(topojson.mesh(worldCache, worldCache.objects.countries, (a, b) => a !== b)));
    borders.setAttribute("fill", "none");
    borders.setAttribute("stroke", "#1e3a5f");
    borders.setAttribute("stroke-width", "0.4");
    svg.appendChild(borders);

    // Dots
    LOCATIONS.forEach((loc, i) => {
      const coords = projection([loc.lng, loc.lat]);
      if (!coords) return;
      const [px, py] = coords;

      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "tdot");
      g.setAttribute("filter", "url(#tglow)");
      g.style.animationDelay = `${i * 0.08}s`;

      const title = document.createElementNS(ns, "title");
      title.textContent = loc.name;
      g.appendChild(title);

      const ring = document.createElementNS(ns, "circle");
      ring.setAttribute("class", "tring");
      ring.setAttribute("cx", px);
      ring.setAttribute("cy", py);
      ring.setAttribute("r", "4");
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "#60a5fa");
      ring.setAttribute("stroke-width", "0.9");
      ring.style.animationDelay = `${i * 0.2 + 0.5}s`;
      g.appendChild(ring);

      const core = document.createElementNS(ns, "circle");
      core.setAttribute("class", "tcore");
      core.setAttribute("cx", px);
      core.setAttribute("cy", py);
      core.setAttribute("r", "3");
      core.setAttribute("fill", "#93c5fd");
      g.appendChild(core);

      const center = document.createElementNS(ns, "circle");
      center.setAttribute("cx", px);
      center.setAttribute("cy", py);
      center.setAttribute("r", "1.3");
      center.setAttribute("fill", "white");
      center.setAttribute("opacity", "0.95");
      g.appendChild(center);

      svg.appendChild(g);
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = async () => {
      try {
        if (!scriptsLoaded) {
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js");
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js");
          scriptsLoaded = true;
        }
        if (!worldCache) {
          worldCache = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(r => r.json());
        }
        drawMap(container.offsetWidth, container.offsetHeight);
      } catch (err) {
        console.warn("TravelMap error:", err);
      }
    };

    init();

    // Redraw on resize with debounce
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawMap(container.offsetWidth, container.offsetHeight);
      });
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ background: "#030712" }}
    >
      <svg
        ref={svgRef}
        style={{ position: "absolute", inset: 0, opacity: 0.55 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 30% 50%, transparent 25%, rgba(3,7,18,0.7) 100%)",
        }}
      />
    </div>
  );
}
