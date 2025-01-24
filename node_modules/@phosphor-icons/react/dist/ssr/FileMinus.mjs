var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, i) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i, m = (r, e) => {
  for (var i in e || (e = {}))
    l.call(e, i) && t(r, i, e[i]);
  if (o)
    for (var i of o(e))
      n.call(e, i) && t(r, i, e[i]);
  return r;
}, a = (r, e) => f(r, p(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import u from "../defs/FileMinus.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, a(m({ ref: e }, r), { weights: u })));
w.displayName = "FileMinus";
export {
  w as FileMinus
};
