var p = Object.defineProperty, l = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var i = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && i(r, t, e[t]);
  if (a)
    for (var t of a(e))
      f.call(e, t) && i(r, t, e[t]);
  return r;
}, m = (r, e) => l(r, S(e));
import s, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/SquareSplitVertical.mjs";
const q = R((r, e) => /* @__PURE__ */ s.createElement(d, m(o({ ref: e }, r), { weights: n })));
q.displayName = "SquareSplitVertical";
export {
  q as SquareSplitVertical
};
