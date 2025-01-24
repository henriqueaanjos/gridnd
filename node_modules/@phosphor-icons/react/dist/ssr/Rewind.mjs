var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    R.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      d.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => p(r, s(e));
import n, { forwardRef as w } from "react";
import c from "../lib/SSRBase.mjs";
import l from "../defs/Rewind.mjs";
const S = w((r, e) => /* @__PURE__ */ n.createElement(c, i(a({ ref: e }, r), { weights: l })));
S.displayName = "Rewind";
export {
  S as Rewind
};
