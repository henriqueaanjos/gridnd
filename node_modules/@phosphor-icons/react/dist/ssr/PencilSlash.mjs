var s = Object.defineProperty, l = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (r, e, a) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, m = (r, e) => {
  for (var a in e || (e = {}))
    f.call(e, a) && t(r, a, e[a]);
  if (o)
    for (var a of o(e))
      p.call(e, a) && t(r, a, e[a]);
  return r;
}, i = (r, e) => l(r, c(e));
import n, { forwardRef as S } from "react";
import h from "../lib/SSRBase.mjs";
import R from "../defs/PencilSlash.mjs";
const d = S((r, e) => /* @__PURE__ */ n.createElement(h, i(m({ ref: e }, r), { weights: R })));
d.displayName = "PencilSlash";
export {
  d as PencilSlash
};
