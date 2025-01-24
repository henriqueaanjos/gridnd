var p = Object.defineProperty, l = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var i = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, t = (r, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && i(r, o, e[o]);
  return r;
}, m = (r, e) => l(r, n(e));
import k, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import B from "../defs/LinkSimpleHorizontalBreak.mjs";
const R = S((r, e) => /* @__PURE__ */ k.createElement(c, m(t({ ref: e }, r), { weights: B })));
R.displayName = "LinkSimpleHorizontalBreak";
export {
  R as LinkSimpleHorizontalBreak
};
