var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (a, o, t) => o in a ? c(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t, m = (a, o) => {
  for (var t in o || (o = {}))
    n.call(o, t) && r(a, t, o[t]);
  if (e)
    for (var t of e(o))
      s.call(o, t) && r(a, t, o[t]);
  return a;
}, p = (a, o) => f(a, i(o));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/SnapchatLogo.mjs";
const w = h((a, o) => /* @__PURE__ */ g.createElement(d, p(m({ ref: o }, a), { weights: l })));
w.displayName = "SnapchatLogo";
export {
  w as SnapchatLogo
};
