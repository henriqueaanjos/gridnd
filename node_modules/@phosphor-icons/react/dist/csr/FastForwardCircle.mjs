var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    p.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      d.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => c(e, f(r));
import l, { forwardRef as w } from "react";
import F from "../lib/IconBase.mjs";
import n from "../defs/FastForwardCircle.mjs";
const C = w((e, r) => /* @__PURE__ */ l.createElement(F, i(m({ ref: r }, e), { weights: n })));
C.displayName = "FastForwardCircle";
export {
  C as FastForwardCircle
};
