var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      d.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import l, { forwardRef as w } from "react";
import n from "../lib/IconBase.mjs";
import B from "../defs/BowlFood.mjs";
const F = w((e, o) => /* @__PURE__ */ l.createElement(n, f(a({ ref: o }, e), { weights: B })));
F.displayName = "BowlFood";
export {
  F as BowlFood
};
