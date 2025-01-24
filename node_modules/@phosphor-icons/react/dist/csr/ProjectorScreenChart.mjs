var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, c = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      s.call(r, o) && a(e, o, r[o]);
  return e;
}, m = (e, r) => i(e, n(r));
import h, { forwardRef as d } from "react";
import j from "../lib/IconBase.mjs";
import l from "../defs/ProjectorScreenChart.mjs";
const w = d((e, r) => /* @__PURE__ */ h.createElement(j, m(c({ ref: r }, e), { weights: l })));
w.displayName = "ProjectorScreenChart";
export {
  w as ProjectorScreenChart
};
