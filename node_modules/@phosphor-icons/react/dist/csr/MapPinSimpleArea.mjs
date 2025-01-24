var t = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, i = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (m)
    for (var a of m(e))
      c.call(e, a) && o(r, a, e[a]);
  return r;
}, p = (r, e) => f(r, n(e));
import l, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import A from "../defs/MapPinSimpleArea.mjs";
const I = d((r, e) => /* @__PURE__ */ l.createElement(w, p(i({ ref: e }, r), { weights: A })));
I.displayName = "MapPinSimpleArea";
export {
  I as MapPinSimpleArea
};
