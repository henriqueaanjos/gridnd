var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      w.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/FlowerLotus.mjs";
const u = R((e, o) => /* @__PURE__ */ c.createElement(d, s(a({ ref: o }, e), { weights: n })));
u.displayName = "FlowerLotus";
export {
  u as FlowerLotus
};
