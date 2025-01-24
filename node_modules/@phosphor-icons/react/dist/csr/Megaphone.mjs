var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, p = (o, e) => i(o, n(e));
import g, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/Megaphone.mjs";
const w = h((o, e) => /* @__PURE__ */ g.createElement(d, p(m({ ref: e }, o), { weights: l })));
w.displayName = "Megaphone";
export {
  w as Megaphone
};
