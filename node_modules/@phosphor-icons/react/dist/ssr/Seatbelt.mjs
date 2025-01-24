var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var o = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    l.call(e, r) && o(t, r, e[r]);
  if (a)
    for (var r of a(e))
      S.call(e, r) && o(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import c, { forwardRef as R } from "react";
import b from "../lib/SSRBase.mjs";
import d from "../defs/Seatbelt.mjs";
const n = R((t, e) => /* @__PURE__ */ c.createElement(b, f(m({ ref: e }, t), { weights: d })));
n.displayName = "Seatbelt";
export {
  n as Seatbelt
};
