var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    l.call(e, o) && t(r, o, e[o]);
  if (m)
    for (var o of m(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, i = (r, e) => f(r, s(e));
import w, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import R from "../defs/CrownSimple.mjs";
const d = S((r, e) => /* @__PURE__ */ w.createElement(c, i(a({ ref: e }, r), { weights: R })));
d.displayName = "CrownSimple";
export {
  d as CrownSimple
};
