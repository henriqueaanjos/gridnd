var s = Object.defineProperty, n = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      p.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => n(t, c(e));
import I, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Intersection.mjs";
const w = R((t, e) => /* @__PURE__ */ I.createElement(d, i(a({ ref: e }, t), { weights: l })));
w.displayName = "Intersection";
export {
  w as Intersection
};
