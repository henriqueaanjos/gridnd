var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && a(e, o, r[o]);
  if (t)
    for (var o of t(r))
      n.call(r, o) && a(e, o, r[o]);
  return e;
}, c = (e, r) => i(e, p(r));
import S, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/ProjectorScreenChart.mjs";
const j = h((e, r) => /* @__PURE__ */ S.createElement(R, c(m({ ref: r }, e), { weights: d })));
j.displayName = "ProjectorScreenChart";
export {
  j as ProjectorScreenChart
};
