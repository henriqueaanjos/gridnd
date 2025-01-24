var p = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var o = (t, e, a) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a, s = (t, e) => {
  for (var a in e || (e = {}))
    c.call(e, a) && o(t, a, e[a]);
  if (r)
    for (var a of r(e))
      R.call(e, a) && o(t, a, e[a]);
  return t;
}, m = (t, e) => f(t, i(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import w from "../defs/CassetteTape.mjs";
const C = l((t, e) => /* @__PURE__ */ d.createElement(n, m(s({ ref: e }, t), { weights: w })));
C.displayName = "CassetteTape";
export {
  C as CassetteTape
};
