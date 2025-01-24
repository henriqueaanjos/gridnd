var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var a = (r, o, t) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t, m = (r, o) => {
  for (var t in o || (o = {}))
    n.call(o, t) && a(r, t, o[t]);
  if (e)
    for (var t of e(o))
      S.call(o, t) && a(r, t, o[t]);
  return r;
}, s = (r, o) => i(r, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/MoonStars.mjs";
const w = R((r, o) => /* @__PURE__ */ c.createElement(d, s(m({ ref: o }, r), { weights: l })));
w.displayName = "MoonStars";
export {
  w as MoonStars
};
