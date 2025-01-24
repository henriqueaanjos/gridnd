var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      n.call(e, r) && a(t, r, e[r]);
  return t;
}, f = (t, e) => p(t, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import C from "../defs/CaretLeft.mjs";
const I = l((t, e) => /* @__PURE__ */ d.createElement(w, f(m({ ref: e }, t), { weights: C })));
I.displayName = "CaretLeft";
export {
  I as CaretLeft
};
