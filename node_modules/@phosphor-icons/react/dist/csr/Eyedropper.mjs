var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (p)
    for (var o of p(e))
      d.call(e, o) && t(r, o, e[o]);
  return r;
}, a = (r, e) => i(r, s(e));
import n, { forwardRef as y } from "react";
import E from "../lib/IconBase.mjs";
import l from "../defs/Eyedropper.mjs";
const w = y((r, e) => /* @__PURE__ */ n.createElement(E, a(m({ ref: e }, r), { weights: l })));
w.displayName = "Eyedropper";
export {
  w as Eyedropper
};
