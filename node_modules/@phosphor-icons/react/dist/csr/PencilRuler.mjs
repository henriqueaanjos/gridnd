var c = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      p.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => l(r, f(e));
import s, { forwardRef as R } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/PencilRuler.mjs";
const w = R((r, e) => /* @__PURE__ */ s.createElement(d, i(a({ ref: e }, r), { weights: u })));
w.displayName = "PencilRuler";
export {
  w as PencilRuler
};
