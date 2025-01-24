var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      c.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => n(r, p(e));
import w, { forwardRef as L } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/ArrowLineLeft.mjs";
const A = L((r, e) => /* @__PURE__ */ w.createElement(d, f(a({ ref: e }, r), { weights: l })));
A.displayName = "ArrowLineLeft";
export {
  A as ArrowLineLeft
};
