var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, o, e) => o in r ? i(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, m = (r, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && t(r, e, o[e]);
  if (a)
    for (var e of a(o))
      d.call(o, e) && t(r, e, o[e]);
  return r;
}, f = (r, o) => p(r, s(o));
import l, { forwardRef as n } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/MapTrifold.mjs";
const M = n((r, o) => /* @__PURE__ */ l.createElement(w, f(m({ ref: o }, r), { weights: I })));
M.displayName = "MapTrifold";
export {
  M as MapTrifold
};
