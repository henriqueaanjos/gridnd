var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, f(e));
import l, { forwardRef as P } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/MapPinPlus.mjs";
const w = P((o, e) => /* @__PURE__ */ l.createElement(d, i(m({ ref: e }, o), { weights: u })));
w.displayName = "MapPinPlus";
export {
  w as MapPinPlus
};
