var c = Object.defineProperty, d = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    h.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => d(r, f(e));
import s, { forwardRef as l } from "react";
import n from "../lib/IconBase.mjs";
import k from "../defs/ShieldCheckered.mjs";
const w = l((r, e) => /* @__PURE__ */ s.createElement(n, i(a({ ref: e }, r), { weights: k })));
w.displayName = "ShieldCheckered";
export {
  w as ShieldCheckered
};
