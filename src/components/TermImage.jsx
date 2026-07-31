import React from 'react';

export const TermImage = ({ svgType, title, className = "w-full h-48" }) => {
  const renderSVG = () => {
    switch (svgType) {
      case 'jigsaw':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect width="400" height="240" fill="#0f172a" />
            <path d="M 120 70 L 260 70 C 290 70 300 100 280 120 L 250 140 L 150 140 Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="3" />
            <path d="M 150 70 Q 200 40 250 70" fill="none" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
            <path d="M 180 80 L 170 95 L 185 95 Z" fill="#ef4444" />
            <rect x="100" y="160" width="180" height="12" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <line x1="160" y1="140" x2="160" y2="195" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            <text x="200" y="218" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="600">
              Priamočiara píla / Jigsaw
            </text>
          </svg>
        );

      case 'chop-saw':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect width="400" height="240" fill="#0f172a" />
            <rect x="50" y="160" width="300" height="25" rx="4" fill="#334155" stroke="#64748b" strokeWidth="3" />
            <rect x="80" y="130" width="240" height="30" fill="#475569" />
            <path d="M 270 160 L 250 80 L 190 90" fill="none" stroke="#eab308" strokeWidth="10" strokeLinecap="round" />
            <circle cx="170" cy="110" r="45" fill="#e2e8f0" stroke="#ca8a04" strokeWidth="4" />
            <circle cx="170" cy="110" r="12" fill="#0f172a" />
            <text x="200" y="218" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Pokosová píla / Chop Saw
            </text>
          </svg>
        );

      case 'chainsaw':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect width="400" height="240" fill="#0f172a" />
            <rect x="70" y="90" width="110" height="70" rx="10" fill="#ea580c" stroke="#c2410c" strokeWidth="3" />
            <path d="M 80 90 Q 120 45 160 90" fill="none" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
            <rect x="180" y="110" width="160" height="30" rx="15" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
            <rect x="175" y="106" width="170" height="38" rx="19" fill="none" stroke="#ea580c" strokeWidth="3" strokeDasharray="6 4" />
            <text x="200" y="218" textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="600">
              Motorová píla / Chainsaw
            </text>
          </svg>
        );

      case 'spade':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <line x1="200" y1="30" x2="200" y2="140" stroke="#b45309" strokeWidth="12" strokeLinecap="round" />
            <rect x="160" y="20" width="80" height="16" rx="8" fill="#78350f" />
            <path d="M 160 140 L 240 140 L 230 200 L 200 215 L 170 200 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
            <text x="200" y="232" textAnchor="middle" fill="#cbd5e1" fontSize="13" fontWeight="600">
              Rýľ / Spade
            </text>
          </svg>
        );

      case 'shovel':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <line x1="200" y1="30" x2="200" y2="135" stroke="#b45309" strokeWidth="12" strokeLinecap="round" />
            <circle cx="200" cy="25" r="14" fill="none" stroke="#78350f" strokeWidth="6" />
            <path d="M 150 135 C 150 135, 140 190, 200 205 C 260 190, 250 135, 250 135 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
            <text x="200" y="228" textAnchor="middle" fill="#cbd5e1" fontSize="13" fontWeight="600">
              Lopata / Shovel
            </text>
          </svg>
        );

      case 'hammer':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <line x1="200" y1="70" x2="200" y2="200" stroke="#ea580c" strokeWidth="16" strokeLinecap="round" />
            <rect x="190" y="130" width="20" height="70" fill="#1e293b" rx="4" />
            <path d="M 120 60 L 230 60 L 230 90 L 190 90 Z" fill="#94a3b8" stroke="#475569" strokeWidth="3" />
            <path d="M 230 60 Q 280 65 270 100 L 250 90 Q 255 70 230 75 Z" fill="#94a3b8" />
            <text x="200" y="222" textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="600">
              Tesárske Kladivo / Claw Hammer
            </text>
          </svg>
        );

      case 'screwdriver':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="180" y="30" width="40" height="80" rx="10" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
            <rect x="192" y="110" width="16" height="85" fill="#cbd5e1" />
            <polygon points="192,195 208,195 200,205" fill="#64748b" />
            <text x="200" y="224" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="600">
              Skrutkovač / Screwdriver
            </text>
          </svg>
        );

      case 'pliers':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 150 110 L 120 200" stroke="#2563eb" strokeWidth="20" strokeLinecap="round" />
            <path d="M 250 110 L 280 200" stroke="#2563eb" strokeWidth="20" strokeLinecap="round" />
            <circle cx="200" cy="110" r="16" fill="#475569" stroke="#94a3b8" strokeWidth="3" />
            <polygon points="180,100 170,40 195,40 200,95" fill="#cbd5e1" />
            <polygon points="220,100 230,40 205,40 200,95" fill="#cbd5e1" />
            <text x="200" y="224" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="600">
              Kombinačky / Pliers
            </text>
          </svg>
        );

      case 'tape-measure':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="110" y="60" width="130" height="110" rx="20" fill="#eab308" stroke="#ca8a04" strokeWidth="4" />
            <circle cx="175" cy="115" r="30" fill="#1e293b" />
            <rect x="240" y="125" width="110" height="25" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            {[...Array(10)].map((_, i) => (
              <line key={i} x1={250 + i * 10} y1="125" x2={250 + i * 10} y2="137" stroke="#000" strokeWidth="2" />
            ))}
            <text x="200" y="218" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Svinovací meter / Tape Measure
            </text>
          </svg>
        );

      case 'crowbar':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 80 180 L 290 60 C 320 40, 340 60, 310 90" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
            <text x="200" y="218" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="600">
              Páčidlo (Pajcer) / Crowbar
            </text>
          </svg>
        );

      case 'nails':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <g transform="translate(100, 30) rotate(15)">
              <rect x="45" y="20" width="30" height="8" fill="#e2e8f0" rx="2" />
              <rect x="56" y="28" width="8" height="130" fill="#cbd5e1" />
              <polygon points="56,158 64,158 60,175" fill="#cbd5e1" />
            </g>
            <g transform="translate(200, 40) rotate(-20)">
              <rect x="45" y="20" width="30" height="8" fill="#e2e8f0" rx="2" />
              <rect x="56" y="28" width="8" height="130" fill="#cbd5e1" />
              <polygon points="56,158 64,158 60,175" fill="#cbd5e1" />
            </g>
            <text x="200" y="218" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="600">
              Stavebné Klince / Nails
            </text>
          </svg>
        );

      case 'screws':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="188" y="40" width="24" height="12" fill="#cbd5e1" rx="2" />
            <rect x="194" y="52" width="12" height="130" fill="#94a3b8" />
            {[...Array(9)].map((_, i) => (
              <path key={i} d={`M 190 ${65 + i * 13} L 210 ${70 + i * 13}`} stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
            ))}
            <text x="200" y="220" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="600">
              Skrutky (Šróby) / Wood Screws
            </text>
          </svg>
        );

      case 'wall-plugs':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="120" y="100" width="160" height="30" rx="6" fill="#ef4444" stroke="#991b1b" strokeWidth="3" />
            {[...Array(6)].map((_, i) => (
              <line key={i} x1={140 + i * 22} y1="95" x2={140 + i * 22} y2="135" stroke="#fff" strokeWidth="3" />
            ))}
            <text x="200" y="218" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="600">
              Hmoždinky / Wall Plugs
            </text>
          </svg>
        );

      case 'chemical-anchor':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="130" y="80" width="140" height="50" rx="8" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
            <polygon points="270,95 330,105 270,115" fill="#cbd5e1" />
            <text x="200" y="218" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="600">
              Chemická kotva / Chemical Anchor
            </text>
          </svg>
        );

      case 'threaded-rod':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="50" y="105" width="300" height="25" rx="3" fill="#94a3b8" />
            {[...Array(20)].map((_, i) => (
              <line key={i} x1={60 + i * 14} y1="100" x2={65 + i * 14} y2="135" stroke="#e2e8f0" strokeWidth="3" />
            ))}
            <text x="200" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="600">
              Závitová tyč / Threaded Rod
            </text>
          </svg>
        );

      case 'bolts-nuts':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <polygon points="120,80 150,60 180,80 180,110 150,130 120,110" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
            <circle cx="150" cy="95" r="16" fill="#0f172a" />
            <polygon points="240,110 270,90 300,110 300,140 270,160 240,140" fill="#cbd5e1" stroke="#475569" strokeWidth="3" />
            <circle cx="270" cy="125" r="16" fill="#0f172a" />
            <text x="200" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="600">
              Skrutky a Matice / Bolts & Nuts
            </text>
          </svg>
        );

      case 'structural-wood':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-amber-950/40">
            <rect x="50" y="60" width="300" height="35" fill="#b45309" stroke="#78350f" strokeWidth="3" rx="3" />
            <rect x="50" y="100" width="300" height="35" fill="#d97706" stroke="#78350f" strokeWidth="3" rx="3" />
            <rect x="50" y="140" width="300" height="35" fill="#b45309" stroke="#78350f" strokeWidth="3" rx="3" />
            <text x="200" y="215" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="600">
              Stavebné drevo / Structural Wood
            </text>
          </svg>
        );

      case 'soil-clay':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 30 160 Q 120 110 200 150 Q 280 190 370 140 L 370 200 L 30 200 Z" fill="#78350f" />
            <text x="200" y="222" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="600">
              Hlina a Zemina / Soil & Clay
            </text>
          </svg>
        );

      case 'formwork-oil':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="140" y="70" width="120" height="110" rx="12" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
            <rect x="180" y="45" width="40" height="25" fill="#0f172a" rx="4" />
            <text x="200" y="218" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Odbedňovací olej / Formwork Oil
            </text>
          </svg>
        );

      case 'paint-varnish':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="130" y="70" width="140" height="110" rx="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="4" />
            <ellipse cx="200" cy="70" rx="70" ry="15" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="3" />
            <text x="200" y="218" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="600">
              Farby a Laky / Paint & Varnish
            </text>
          </svg>
        );

      case 'gravel':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect width="400" height="240" fill="#0f172a" />
            <circle cx="100" cy="140" r="18" fill="#64748b" />
            <circle cx="150" cy="110" r="22" fill="#475569" />
            <circle cx="210" cy="150" r="20" fill="#94a3b8" />
            <circle cx="270" cy="120" r="25" fill="#64748b" />
            <circle cx="320" cy="160" r="16" fill="#475569" />
            <text x="200" y="218" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="600">
              Stavebný štrk / Crushed Gravel
            </text>
          </svg>
        );

      case 'sand':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 60 180 Q 200 90 340 180 Z" fill="#fef08a" stroke="#eab308" strokeWidth="3" />
            <text x="200" y="218" textAnchor="middle" fill="#fef08a" fontSize="14" fontWeight="600">
              Stavebný piesok / Building Sand
            </text>
          </svg>
        );

      case 'cement':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="120" y="60" width="160" height="120" rx="8" fill="#475569" stroke="#94a3b8" strokeWidth="4" />
            <rect x="140" y="100" width="120" height="40" fill="#ef4444" />
            <text x="200" y="125" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">CEMENT</text>
            <text x="200" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="600">
              Portlandský Cement / Cement
            </text>
          </svg>
        );

      case 'expanding-foam':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="160" y="60" width="80" height="130" rx="10" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
            <rect x="185" y="30" width="30" height="30" fill="#0f172a" />
            <text x="200" y="218" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Montážna PU pena / Expanding Foam
            </text>
          </svg>
        );

      case 'silicone-sealant':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="150" y="80" width="100" height="100" rx="6" fill="#cbd5e1" stroke="#64748b" strokeWidth="3" />
            <polygon points="200,20 185,80 215,80" fill="#38bdf8" />
            <text x="200" y="218" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="600">
              Silikónový tmel / Silicone Sealant
            </text>
          </svg>
        );

      case 'angle-grinder':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="130" y="80" width="130" height="40" rx="6" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
            <circle cx="130" cy="100" r="35" fill="#e2e8f0" stroke="#ca8a04" strokeWidth="4" />
            <text x="200" y="218" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="600">
              Uhlová brúska (Flexa) / Angle Grinder
            </text>
          </svg>
        );

      case 'cordless-drill':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="150" y="170" width="70" height="30" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="3" />
            <rect x="165" y="100" width="35" height="75" rx="6" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
            <rect x="120" y="60" width="150" height="45" rx="8" fill="#2563eb" stroke="#1d4ed8" strokeWidth="3" />
            <text x="200" y="220" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="600">
              Akumulátorová vŕtačka / Cordless Drill
            </text>
          </svg>
        );

      case 'concrete-rebar':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="40" y="50" width="320" height="140" rx="12" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <line x1="60" y1="90" x2="340" y2="90" stroke="#ea580c" strokeWidth="10" strokeLinecap="round" />
            <line x1="60" y1="150" x2="340" y2="150" stroke="#ea580c" strokeWidth="10" strokeLinecap="round" />
            <text x="200" y="215" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="600">
              Železobetón / Reinforced Concrete
            </text>
          </svg>
        );

      case 'formwork':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-amber-950/40">
            <rect x="50" y="40" width="140" height="160" fill="#b45309" stroke="#78350f" strokeWidth="4" rx="4" />
            <rect x="210" y="40" width="140" height="160" fill="#b45309" stroke="#78350f" strokeWidth="4" rx="4" />
            <text x="200" y="220" textAnchor="middle" fill="#fcd34d" fontSize="14" fontWeight="600">
              Debnenie / Formwork (Shuttering)
            </text>
          </svg>
        );

      case 'concrete-mixer':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <circle cx="120" cy="180" r="22" fill="#1e293b" stroke="#f97316" strokeWidth="5" />
            <circle cx="280" cy="180" r="22" fill="#1e293b" stroke="#f97316" strokeWidth="5" />
            <path d="M 140 100 L 200 40 L 260 100 L 230 140 L 170 140 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="4" />
            <text x="200" y="220" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="600">
              Miešačka betónu / Concrete Mixer
            </text>
          </svg>
        );

      case 'rebar':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-950">
            <rect x="40" y="100" width="320" height="40" rx="6" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            {[...Array(14)].map((_, i) => (
              <path key={i} d={`M ${55 + i * 22} 100 L ${70 + i * 22} 140`} stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
            ))}
            <text x="200" y="180" textAnchor="middle" fill="#f97316" fontSize="15" fontWeight="bold">
              Armovacia oceľ / Roxor / Rebar
            </text>
          </svg>
        );

      case 'foundation-slab':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="40" y="130" width="320" height="50" rx="6" fill="#475569" stroke="#64748b" strokeWidth="3" />
            <rect x="40" y="180" width="320" height="20" fill="#78350f" />
            <text x="200" y="220" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="600">
              Základová doska / Foundation Slab
            </text>
          </svg>
        );

      case 'concrete-pump':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="40" y="130" width="160" height="40" rx="4" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <path d="M 120 120 L 220 50 L 320 80 L 340 140" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />
            <text x="200" y="215" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="600">
              Betónové čerpadlo / Concrete Pump
            </text>
          </svg>
        );

      case 'roof-truss':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-amber-950/30">
            <polygon points="50,170 200,50 350,170" fill="none" stroke="#d97706" strokeWidth="8" strokeLinejoin="round" />
            <line x1="50" y1="170" x2="350" y2="170" stroke="#d97706" strokeWidth="8" />
            <text x="200" y="215" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="600">
              Strešný krov / Roof Truss
            </text>
          </svg>
        );

      case 'plywood':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-amber-950/30">
            <rect x="50" y="70" width="300" height="100" rx="4" fill="#d97706" stroke="#78350f" strokeWidth="3" />
            <text x="200" y="215" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="600">
              Preglejka / OSB Board
            </text>
          </svg>
        );

      case 'wooden-beam':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-amber-950/30">
            <rect x="40" y="90" width="320" height="60" rx="6" fill="#b45309" stroke="#78350f" strokeWidth="4" />
            <text x="200" y="215" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="600">
              Drevený trám / Wooden Beam
            </text>
          </svg>
        );

      case 'jackhammer':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-zinc-900">
            <rect x="130" y="40" width="140" height="16" rx="8" fill="#dc2626" />
            <rect x="180" y="56" width="40" height="90" rx="6" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="195,146 205,146 202,185 198,185" fill="#cbd5e1" />
            <text x="200" y="220" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="600">
              Zbíjačka / Jackhammer
            </text>
          </svg>
        );

      case 'excavator':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="70" y="165" width="150" height="35" rx="15" fill="#334155" stroke="#e2e8f0" strokeWidth="3" />
            <rect x="90" y="100" width="90" height="65" rx="8" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
            <path d="M 160 125 L 240 60 L 310 110" fill="none" stroke="#eab308" strokeWidth="14" strokeLinecap="round" />
            <text x="200" y="222" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Bager / Excavator
            </text>
          </svg>
        );

      case 'brick':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <g stroke="#1e293b" strokeWidth="3">
              <rect x="40" y="40" width="100" height="40" fill="#b91c1c" rx="3" />
              <rect x="145" y="40" width="100" height="40" fill="#991b1b" rx="3" />
              <rect x="250" y="40" width="100" height="40" fill="#b91c1c" rx="3" />
            </g>
            <text x="200" y="200" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="600">
              Pálená tehla / Clay Brick
            </text>
          </svg>
        );

      case 'spirit-level':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect x="30" y="90" width="340" height="50" rx="8" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
            <rect x="160" y="100" width="80" height="30" rx="15" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
            <circle cx="195" cy="115" r="10" fill="#ecfccb" stroke="#84cc16" strokeWidth="2" />
            <text x="200" y="180" textAnchor="middle" fill="#eab308" fontSize="14" fontWeight="600">
              Vodováha / Spirit Level
            </text>
          </svg>
        );

      case 'roof-tile':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 60 140 Q 130 90 200 140 Q 270 90 340 140 L 340 170 Q 270 120 200 170 Q 130 120 60 170 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="3" />
            <text x="200" y="218" textAnchor="middle" fill="#f97316" fontSize="14" fontWeight="600">
              Strešná škridla / Roof Tile
            </text>
          </svg>
        );

      case 'hard-hat':
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <path d="M 90 140 C 90 60, 310 60, 310 140 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="4" />
            <path d="M 70 140 Q 200 155 330 140 L 320 150 Q 200 170 80 150 Z" fill="#d97706" />
            <text x="200" y="200" textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="600">
              Ochranná prilba / Hard Hat
            </text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full bg-slate-900">
            <rect width="400" height="240" fill="#0f172a" />
            <path d="M 60 180 L 200 50 L 340 180 Z" fill="none" stroke="#3b82f6" strokeWidth="4" />
            <circle cx="200" cy="120" r="28" fill="none" stroke="#f97316" strokeWidth="4" />
            <text x="200" y="210" textAnchor="middle" fill="#cbd5e1" fontSize="14" fontWeight="600">
              {title}
            </text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden group shadow-inner ${className}`}>
      {renderSVG()}
    </div>
  );
};
