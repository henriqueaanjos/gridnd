var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && a(r, t, e[t]);
  return r;
}, i = (r, e) => n(r, p(e));
import d, { forwardRef as l } from "react";
import q from "../lib/IconBase.mjs";
import u from "../defs/UniteSquare.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(q, i(m({ ref: e }, r), { weights: u })));
w.displayName = "UniteSquare";
export {
  w as UniteSquare
};
