import { useEffect, useRef } from "react";

const LOCATIONS = [
  { name: "Toronto", lat: 43.65, lng: -79.38 },
  { name: "New York", lat: 40.71, lng: -74.01 },
  { name: "Cancun", lat: 21.16, lng: -86.85 },
  { name: "Bogota", lat: 4.71, lng: -74.07 },
  { name: "Dublin", lat: 53.33, lng: -6.25 },
  { name: "London", lat: 51.51, lng: -0.13 },
  { name: "Paris", lat: 48.86, lng: 2.35 },
  { name: "Barcelona", lat: 41.39, lng: 2.16 },
  { name: "Budapest", lat: 47.50, lng: 19.04 },
  { name: "Rome", lat: 41.90, lng: 12.50 },
  { name: "Athens", lat: 37.98, lng: 23.73 },
  { name: "Istanbul", lat: 41.01, lng: 28.98 },
  { name: "Casablanca", lat: 33.59, lng: -7.62 },
  { name: "Cairo", lat: 30.04, lng: 31.24 },
  { name: "Riyadh", lat: 24.69, lng: 46.72 },
  { name: "Doha", lat: 25.29, lng: 51.53 },
  { name: "Dubai", lat: 25.20, lng: 55.27 },
  { name: "Chennai", lat: 13.08, lng: 80.27 },
  { name: "Kuala Lumpur", lat: 3.14, lng: 101.69 },
  { name: "Singapore", lat: 1.35, lng: 103.82 },
  { name: "Marrakech", lat: 31.63, lng: -8.01 },
];

function project(lat, lng, W, H) {
  const x = (lng + 180) / 360 * W;
  const latRad = lat * Math.PI / 180;
  const y = H / 2 - (W / (2 * Math.PI)) * Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * 0.6;
  return { x, y };
}

export default function TravelMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth || 1200;
    const H = container.offsetHeight || 600;

    // Load D3 and TopoJSON from CDN, then draw
    const loadScripts = async () => {
      if (window._travelMapDrawn) return;

      const loadScript = (src) => new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        document.head.appendChild(s);
      });

      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js");

      const world = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(r => r.json());

      const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .style("position", "absolute")
        .style("inset", "0");

      const projection = d3.geoNaturalEarth1()
        .scale(W / 6.3)
        .translate([W / 2, H / 2]);

      const path = d3.geoPath().projection(projection);

      // Grid lines
      const graticule = d3.geoGraticule().step([30, 30]);
      svg.append("path")
        .datum(graticule())
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#0f172a")
        .attr("stroke-width", "0.5");

      // Countries
      svg.append("g")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .join("path")
        .attr("d", path)
        .attr("fill", "#0f172a")
        .attr("stroke", "#1e293b")
        .attr("stroke-width", "0.6");

      // Borders
      svg.append("path")
        .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
        .attr("d", path)
        .attr("fill", "none")
        .attr("stroke", "#1e293b")
        .attr("stroke-width", "0.4");

      // Travel dots
      LOCATIONS.forEach((loc, i) => {
        const [px, py] = projection([loc.lng, loc.lat]);
        if (!px || !py) return;

        const g = svg.append("g").style("opacity", 0);

        // Pulse ring
        g.append("circle")
          .attr("cx", px).attr("cy", py).attr("r", 3)
          .attr("fill", "none")
          .attr("stroke", "#60a5fa")
          .attr("stroke-width", "0.8")
          .style("animation", `ringPulse 2.5s ease-out ${i * 0.3 + 1}s infinite`);

        // Core
        g.append("circle")
          .attr("cx", px).attr("cy", py).attr("r", 3)
          .attr("fill", "#93c5fd")
          .style("filter", "url(#dotGlow)");

        // Center
        g.append("circle")
          .attr("cx", px).attr("cy", py).attr("r", 1.2)
          .attr("fill", "white");

        // Tooltip
        g.append("title").text(loc.name);

        g.transition().delay(i * 120 + 300).duration(400)
          .style("opacity", 1);
      });

      // Defs for glow + animations
      const defs = svg.append("defs");
      defs.append("filter").attr("id", "dotGlow").html(`
        <feGaussianBlur stdDeviation="2" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      `);

      const style = document.createElement("style");
      style.textContent = `
        @keyframes ringPulse { 0% { r: 4; opacity: 0.6; } 100% { r: 13; opacity: 0; } }
      `;
      document.head.appendChild(style);

      window._travelMapDrawn = true;
    };

    loadScripts();

    return () => { window._travelMapDrawn = false; };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ background: "#030712" }}
      aria-hidden="true"
    />
  );
}
