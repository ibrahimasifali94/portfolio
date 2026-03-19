import { useEffect, useRef } from "react";

const W = 1200;
const H = 600;

function project(lat, lng) {
  const l = lng * Math.PI / 180;
  const p = lat * Math.PI / 180;
  const ne_x = l * (0.8707 - 0.131979 * p*p - 0.013791 * p*p*p*p);
  const ne_y = p * (1.007226 + 0.015085 * l*l - 0.044475 * p*p + 0.028874 * l*l*p*p);
  const x = (ne_x / Math.PI + 1) / 2 * W;
  const y = (1 - (ne_y / (Math.PI * 0.5) + 1) / 2) * H;
  return { x, y };
}

const LOCATIONS = [
  { name: "Toronto",       lat: 43.65,  lng: -79.38 },
  { name: "New York",      lat: 40.71,  lng: -74.01 },
  { name: "Cancun",        lat: 21.16,  lng: -86.85 },
  { name: "Bogota",        lat:  4.71,  lng: -74.07 },
  { name: "Dublin",        lat: 53.33,  lng:  -6.25 },
  { name: "London",        lat: 51.51,  lng:  -0.13 },
  { name: "Paris",         lat: 48.86,  lng:   2.35 },
  { name: "Barcelona",     lat: 41.39,  lng:   2.16 },
  { name: "Budapest",      lat: 47.50,  lng:  19.04 },
  { name: "Rome",          lat: 41.90,  lng:  12.50 },
  { name: "Athens",        lat: 37.98,  lng:  23.73 },
  { name: "Istanbul",      lat: 41.01,  lng:  28.98 },
  { name: "Casablanca",    lat: 33.59,  lng:  -7.62 },
  { name: "Marrakech",     lat: 31.63,  lng:  -8.01 },
  { name: "Cairo",         lat: 30.04,  lng:  31.24 },
  { name: "Riyadh",        lat: 24.69,  lng:  46.72 },
  { name: "Doha",          lat: 25.29,  lng:  51.53 },
  { name: "Dubai",         lat: 25.20,  lng:  55.27 },
  { name: "Chennai",       lat: 13.08,  lng:  80.27 },
  { name: "Kuala Lumpur",  lat:  3.14,  lng: 101.69 },
  { name: "Singapore",     lat:  1.35,  lng: 103.82 },
];

const LAND_PATHS = [
  "M290,82 L310,72 L338,68 L360,74 L375,85 L380,100 L372,118 L358,130 L345,142 L338,158 L328,170 L318,182 L308,192 L295,198 L282,195 L270,185 L260,172 L255,158 L258,142 L265,128 L272,114 L278,100 L285,88 Z",
  "M355,28 L375,22 L392,28 L398,42 L390,55 L372,58 L358,52 L350,38 Z",
  "M295,198 L302,205 L298,215 L290,218 L285,210 L288,200 Z",
  "M308,192 L318,188 L322,194 L314,198 L307,195 Z",
  "M298,215 L318,208 L335,215 L342,230 L345,250 L342,272 L335,295 L322,318 L308,335 L295,342 L282,335 L272,318 L268,295 L270,268 L275,242 L282,222 Z",
  "M418,52 L430,48 L440,54 L436,62 L422,64 L415,58 Z",
  "M448,82 L458,76 L465,82 L462,92 L452,96 L444,90 Z M440,86 L446,82 L450,88 L445,94 L438,90 Z",
  "M445,115 L460,108 L472,112 L475,125 L468,135 L455,138 L444,130 L442,118 Z",
  "M462,92 L478,88 L488,92 L490,105 L482,112 L470,112 L462,105 Z",
  "M465,55 L480,48 L495,50 L502,62 L495,75 L482,80 L468,75 L462,64 Z",
  "M488,92 L510,86 L525,90 L530,102 L522,112 L508,115 L494,110 L488,100 Z",
  "M488,110 L496,108 L500,118 L495,132 L488,138 L482,132 L482,118 Z",
  "M510,108 L524,105 L530,112 L528,122 L518,128 L508,125 L505,115 Z",
  "M532,105 L555,100 L568,106 L570,118 L558,124 L540,122 L530,115 Z",
  "M448,135 L490,130 L520,132 L535,138 L535,152 L520,158 L488,158 L460,152 L445,145 Z",
  "M535,138 L578,136 L598,140 L600,158 L585,162 L545,162 L535,155 Z",
  "M445,155 L470,150 L490,155 L495,172 L488,190 L472,198 L455,195 L442,180 L440,165 Z",
  "M490,155 L535,152 L560,158 L565,178 L555,200 L535,212 L512,215 L492,208 L485,188 L488,168 Z",
  "M560,155 L585,150 L598,158 L600,175 L590,195 L575,205 L560,198 L552,180 L555,162 Z",
  "M490,208 L535,212 L560,208 L568,228 L562,252 L548,268 L528,275 L508,270 L492,252 L485,228 Z",
  "M578,218 L585,215 L590,225 L585,245 L578,248 L572,238 L572,225 Z",
  "M568,118 L595,115 L608,125 L608,145 L598,158 L580,162 L565,155 L560,140 L562,125 Z",
  "M570,105 L608,100 L625,108 L628,125 L612,135 L590,138 L568,130 L562,118 Z",
  "M570,80 L625,72 L660,78 L665,95 L648,105 L618,108 L590,105 L568,98 Z",
  "M480,50 L540,40 L580,45 L595,62 L580,75 L545,80 L505,78 L475,68 Z",
  "M580,38 L680,28 L750,35 L765,52 L745,65 L700,68 L650,62 L600,55 Z",
  "M618,130 L645,125 L658,135 L658,155 L648,172 L632,182 L618,175 L608,158 L608,140 Z",
  "M665,128 L695,122 L710,130 L712,148 L700,158 L682,160 L665,152 L660,138 Z",
  "M628,72 L720,60 L762,68 L768,88 L748,100 L710,105 L672,102 L638,95 L625,82 Z",
  "M748,88 L762,85 L770,92 L765,102 L755,105 L745,98 Z M772,78 L782,75 L788,82 L782,90 L772,88 Z",
  "M700,158 L708,162 L708,175 L702,180 L695,172 L695,162 Z",
  "M695,170 L720,162 L732,170 L728,182 L710,188 L695,182 Z",
  "M722,162 L748,158 L758,168 L755,185 L738,192 L722,185 L718,172 Z",
  "M718,185 L748,182 L755,188 L748,195 L718,195 Z",
  "M748,145 L758,140 L765,148 L760,162 L750,165 L742,158 L745,148 Z",
  "M758,255 L808,245 L848,250 L868,268 L865,298 L845,320 L812,330 L782,322 L760,302 L752,278 Z",
  "M882,305 L892,298 L898,308 L892,320 L882,318 Z",
  "M878,320 L888,318 L892,332 L882,342 L872,338 L872,328 Z",
  "M195,52 L225,45 L248,52 L250,68 L232,75 L210,72 L195,62 Z",
  "M178,72 L198,68 L205,75 L195,80 L178,78 Z",
];

export default function TravelMap() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"
      style={{ background: "#030712" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="tglow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <style>{`
            @keyframes tdotIn { from { opacity:0; transform:scale(0); } to { opacity:1; transform:scale(1); } }
            @keyframes tpulse { 0%,100% { opacity:.85; } 50% { opacity:1; } }
            @keyframes tring  { 0% { r:4; opacity:.55; } 100% { r:13; opacity:0; } }
            .tdot { animation: tdotIn .4s ease-out both; transform-box:fill-box; transform-origin:center; }
            .tcore { animation: tpulse 3s ease-in-out infinite; }
            .tring { animation: tring 2.8s ease-out infinite; }
          `}</style>
        </defs>

        <g stroke="#0d1829" strokeWidth=".5" fill="none">
          {[-150,-120,-90,-60,-30,0,30,60,90,120,150,180].map(lng => {
            const a = project(-80, lng);
            const b = project(80, lng);
            return <line key={lng} x1={a.x} y1={a.y} x2={b.x} y2={b.y}/>;
          })}
          {[-60,-30,0,30,60].map(lat => {
            const pts = Array.from({length:37}, (_,i) => project(lat, -180 + i*10));
            const d = pts.map((p,i) => `${i===0?"M":"L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
            return <path key={lat} d={d}/>;
          })}
        </g>

        {LAND_PATHS.map((d, i) => (
          <path key={i} d={d} fill="#0f1f35" stroke="#1a3050" strokeWidth=".7"/>
        ))}

        {LOCATIONS.map((loc, i) => {
          const { x, y } = project(loc.lat, loc.lng);
          return (
            <g key={loc.name} className="tdot" style={{ animationDelay: `${i * 0.1}s` }}
              filter="url(#tglow)">
              <title>{loc.name}</title>
              <circle className="tring" cx={x} cy={y} r={4}
                fill="none" stroke="#60a5fa" strokeWidth=".9"
                style={{ animationDelay: `${i * 0.25 + 0.8}s` }}/>
              <circle className="tcore" cx={x} cy={y} r={3}
                fill="#93c5fd"
                style={{ animationDelay: `${i * 0.1}s` }}/>
              <circle cx={x} cy={y} r={1.3} fill="white" opacity=".95"/>
            </g>
          );
        })}
      </svg>

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 50%, transparent 20%, rgba(3,7,18,0.65) 100%)"
      }}/>
    </div>
  );
}
