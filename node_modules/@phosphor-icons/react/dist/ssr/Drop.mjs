var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      R.call(r, e) && m(o, e, r[e]);
  return o;
}, p = (o, r) => i(o, s(r));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/Drop.mjs";
const D = l((o, r) => /* @__PURE__ */ d.createElement(n, p(a({ ref: r }, o), { weights: w })));
D.displayName = "Drop";
export {
  D as Drop
};
