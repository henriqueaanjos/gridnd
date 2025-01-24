var c = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var m = (o, r, e) => r in o ? c(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, a = (o, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && m(o, e, r[e]);
  if (t)
    for (var e of t(r))
      s.call(r, e) && m(o, e, r[e]);
  return o;
}, l = (o, r) => f(o, i(r));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Scroll.mjs";
const w = R((o, r) => /* @__PURE__ */ S.createElement(d, l(a({ ref: r }, o), { weights: n })));
w.displayName = "Scroll";
export {
  w as Scroll
};
