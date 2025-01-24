var l = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (r, e, i) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    g.call(e, i) && o(r, i, e[i]);
  if (t)
    for (var i of t(e))
      h.call(e, i) && o(r, i, e[i]);
  return r;
}, a = (r, e) => c(r, f(e));
import p, { forwardRef as s } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/HighlighterCircle.mjs";
const n = s((r, e) => /* @__PURE__ */ p.createElement(R, a(m({ ref: e }, r), { weights: d })));
n.displayName = "HighlighterCircle";
export {
  n as HighlighterCircle
};
