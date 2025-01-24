var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var a = (r, o, e) => o in r ? f(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, t = (r, o) => {
  for (var e in o || (o = {}))
    s.call(o, e) && a(r, e, o[e]);
  if (m)
    for (var e of m(o))
      B.call(o, e) && a(r, e, o[e]);
  return r;
}, k = (r, o) => i(r, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/BookBookmark.mjs";
const n = R((r, o) => /* @__PURE__ */ c.createElement(d, k(t({ ref: o }, r), { weights: l })));
n.displayName = "BookBookmark";
export {
  n as BookBookmark
};
