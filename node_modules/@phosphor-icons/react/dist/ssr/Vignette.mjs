var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => p(t, s(e));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Vignette.mjs";
const w = R((t, e) => /* @__PURE__ */ g.createElement(d, i(a({ ref: e }, t), { weights: l })));
w.displayName = "Vignette";
export {
  w as Vignette
};
