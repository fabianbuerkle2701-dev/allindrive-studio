import{r as a,j as o}from"./content--Lbpy-z6.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),g=(e,r)=>{const t=a.forwardRef(({color:p="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:u="",children:s,...d},l)=>a.createElement("svg",{ref:l,...h,width:n,height:n,stroke:p,strokeWidth:c?Number(i)*24/Number(n):i,className:["lucide",`lucide-${f(e)}`,u].join(" "),...d},[...r.map(([m,x])=>a.createElement(m,x)),...Array.isArray(s)?s:[s]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=g("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),w="https://allindrive.netlify.app";function y({href:e="#kontakt",children:r="Zugang anfragen",className:t=""}){return o.jsx("a",{href:e,className:"inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base transition-transform duration-200 ease-out active:scale-[0.97] "+t,style:{background:"linear-gradient(123deg, #1F1206 7%, #B84A00 37%, #8F3A00 72%, #FF9300 100%)",boxShadow:"0px 4px 4px rgba(255, 147, 0, 0.25), 4px 4px 12px #C4590A inset",outline:"2px solid #FFFFFF",outlineOffset:"-3px"},children:r})}function v({href:e=w,children:r="In der App ansehen",className:t=""}){return o.jsxs("a",{href:e,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center rounded-full border-2 border-ink/70 text-ink font-semibold uppercase tracking-widest px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base gap-2 transition-colors duration-200 ease-out hover:bg-ink hover:text-paper active:scale-[0.97] "+t,children:[r,o.jsx(k,{"aria-hidden":"true",strokeWidth:2,className:"h-4 w-4 sm:h-5 sm:w-5"})]})}export{y as C,v as L,g as c};
