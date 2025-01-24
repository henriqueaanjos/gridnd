var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, n(e));
import u, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import q from "../defs/MinusSquare.mjs";
const w = d((r, e) => /* @__PURE__ */ u.createElement(l, i(m({ ref: e }, r), { weights: q })));
w.displayName = "MinusSquare";
export {
  w as MinusSquare
};
