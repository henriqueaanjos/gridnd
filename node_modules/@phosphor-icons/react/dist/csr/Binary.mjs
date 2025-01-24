var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, r, o) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, m = (e, r) => {
  for (var o in r || (r = {}))
    s.call(r, o) && t(e, o, r[o]);
  if (a)
    for (var o of a(r))
      c.call(r, o) && t(e, o, r[o]);
  return e;
}, i = (e, r) => n(e, p(r));
import y, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Binary.mjs";
const w = B((e, r) => /* @__PURE__ */ y.createElement(d, i(m({ ref: r }, e), { weights: l })));
w.displayName = "Binary";
export {
  w as Binary
};
