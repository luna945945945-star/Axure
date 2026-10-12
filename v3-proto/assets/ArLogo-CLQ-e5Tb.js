import{An as e,Kn as t,Or as n,bn as r,wn as i}from"./vendor-naive-CpvyjugV.js";import{t as a}from"./_plugin-vue_export-helper-BJ1fRKRD.js";import{i as o,nn as s}from"./main-BWbVHf5k.js";var c=`0 0 394 403`,l=82,u=`M128 24L40 224H74L92 184H164L182 224H216L128 24ZM107 148L128 98L149 148H107Z`,d=`M128 72H176C200 72 216 87 216 108C216 126 204 138 184 143L220 224H183L152 153H128V128H172C181 128 188 121 188 111C188 101 181 96 172 96H128V72Z`,f=`translate(15 28) scale(1.4)`;function p(e={}){let{decorative:t=!0,idPrefix:n=`ar-brand`,isDark:r=!1,label:i=`AR`,themeColor:a}=e,s=o(a,r),p={background:`${n}-bg`,glow:`${n}-glow`,glyph:`${n}-glyph`,shadow:`${n}-shadow`,surface:`${n}-surface`,dot:`${n}-dot`},h=r?.44:.32,g=m(i);return`
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="${c}"
  fill="none"
  ${t?`aria-hidden="true"`:`role="img" aria-label="${g}"`}
>
  ${t?``:`<title>${g}</title>`}
  <defs>
    <linearGradient id="${p.background}" x1="34" y1="364" x2="356" y2="39" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${s.backgroundStart}" />
      <stop offset="0.58" stop-color="${s.backgroundMid}" />
      <stop offset="1" stop-color="${s.backgroundEnd}" />
    </linearGradient>
    <radialGradient id="${p.glow}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(328 31) rotate(121) scale(301 274)">
      <stop offset="0" stop-color="${s.backgroundGlowStart}" />
      <stop offset="1" stop-color="${s.backgroundGlowEnd}" />
    </radialGradient>
    <linearGradient id="${p.surface}" x1="97" y1="41" x2="297" y2="185" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${s.surfaceStart}" />
      <stop offset="1" stop-color="${s.surfaceEnd}" />
    </linearGradient>
    <linearGradient id="${p.glyph}" x1="14%" y1="0" x2="84%" y2="100%">
      <stop offset="0" stop-color="${s.glyphStart}" />
      <stop offset="1" stop-color="${s.glyphEnd}" />
    </linearGradient>
    <linearGradient id="${p.dot}" x1="18%" y1="6%" x2="82%" y2="92%">
      <stop offset="0" stop-color="${s.glyphStart}" />
      <stop offset="0.24" stop-color="${s.dotStart}" />
      <stop offset="1" stop-color="${s.dotEnd}" />
    </linearGradient>
    <filter id="${p.shadow}" x="-20%" y="-18%" width="150%" height="180%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="${s.shadowColor}" flood-opacity="${h}" />
    </filter>
  </defs>
  <rect width="394" height="403" rx="${l}" fill="url(#${p.background})" />
  <rect width="394" height="403" rx="${l}" fill="url(#${p.glow})" />
  <rect width="394" height="403" rx="${l}" fill="url(#${p.surface})" />
  <rect
    x="1.5"
    y="1.5"
    width="391"
    height="400"
    rx="${l-1.5}"
    stroke="${s.outlineColor}"
    stroke-opacity="${r?.2:.28}"
    stroke-width="1.5"
  />
  <g filter="url(#${p.shadow})" transform="${f}">
    <path d="${u}" fill="url(#${p.glyph})" />
    <path d="${d}" fill="url(#${p.glyph})" />
  </g>
</svg>`.trim()}function m(e){return e.replace(/[<>&"]/g,e=>{switch(e){case`<`:return`&lt;`;case`>`:return`&gt;`;case`&`:return`&amp;`;default:return`&quot;`}})}var h=[`innerHTML`],g=a(e({__name:`ArLogo`,props:{size:{default:32},color:{},decorative:{type:Boolean,default:!0},label:{default:`AR`}},setup(e){let a=0,o=e,c=s(),l=`ar-logo-${a++}`,u=r(()=>({aspectRatio:`394 / 403`,height:f(o.size)})),d=r(()=>p({decorative:o.decorative,idPrefix:l,isDark:!1,label:o.label,themeColor:o.color||c.appearance.themeColor}));function f(e){return typeof e==`number`?`${e}px`:e}return(e,r)=>(t(),i(`span`,{class:`ar-logo`,style:n(u.value),innerHTML:d.value},null,12,h))}}),[[`__scopeId`,`data-v-7ca952a1`]]);export{g as t};