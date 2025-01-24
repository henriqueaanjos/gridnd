var l = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var o = (r, e, a) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    s.call(e, a) && o(r, a, e[a]);
  if (f)
    for (var a of f(e))
      n.call(e, a) && o(r, a, e[a]);
  return r;
}, m = (r, e) => i(r, p(e));
import u, { forwardRef as S } from "react";
import c from "../lib/SSRBase.mjs";
import g from "../defs/ShuffleAngular.mjs";
const h = S((r, e) => /* @__PURE__ */ u.createElement(c, m(t({ ref: e }, r), { weights: g })));
h.displayName = "ShuffleAngular";
export {
  h as ShuffleAngular
};
