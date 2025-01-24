var f = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, i = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && a(t, r, e[r]);
  return t;
}, m = (t, e) => c(t, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/Certificate.mjs";
const I = l((t, e) => /* @__PURE__ */ d.createElement(w, m(i({ ref: e }, t), { weights: C })));
I.displayName = "Certificate";
export {
  I as Certificate
};
