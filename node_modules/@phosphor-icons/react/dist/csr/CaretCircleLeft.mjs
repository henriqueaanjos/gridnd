var i = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, m = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(r, t, e[t]);
  if (o)
    for (var t of o(e))
      l.call(e, t) && a(r, t, e[t]);
  return r;
}, f = (r, e) => c(r, p(e));
import C, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/CaretCircleLeft.mjs";
const I = n((r, e) => /* @__PURE__ */ C.createElement(d, f(m({ ref: e }, r), { weights: w })));
I.displayName = "CaretCircleLeft";
export {
  I as CaretCircleLeft
};
