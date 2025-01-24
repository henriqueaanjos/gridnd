var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    p.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      c.call(o, t) && a(r, t, o[t]);
  return r;
}, s = (r, o) => i(r, n(o));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/MoonStars.mjs";
const M = l((r, o) => /* @__PURE__ */ d.createElement(w, s(m({ ref: o }, r), { weights: I })));
M.displayName = "MoonStars";
export {
  M as MoonStars
};
