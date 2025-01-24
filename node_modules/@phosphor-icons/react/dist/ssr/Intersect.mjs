var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    p.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && m(t, r, e[r]);
  return t;
}, s = (t, e) => f(t, i(e));
import I, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Intersect.mjs";
const w = R((t, e) => /* @__PURE__ */ I.createElement(d, s(a({ ref: e }, t), { weights: l })));
w.displayName = "Intersect";
export {
  w as Intersect
};
