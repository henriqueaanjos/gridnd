var c = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      b.call(e, o) && m(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, p(e));
import l, { forwardRef as S } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Scribble.mjs";
const n = S((r, e) => /* @__PURE__ */ l.createElement(R, i(a({ ref: e }, r), { weights: d })));
n.displayName = "Scribble";
export {
  n as Scribble
};
