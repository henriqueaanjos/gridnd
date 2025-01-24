var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var s = (o, r, e) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, t = (o, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && s(o, e, r[e]);
  if (a)
    for (var e of a(r))
      h.call(r, e) && s(o, e, r[e]);
  return o;
}, m = (o, r) => f(o, p(r));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Crosshair.mjs";
const w = d((o, r) => /* @__PURE__ */ R.createElement(l, m(t({ ref: r }, o), { weights: n })));
w.displayName = "Crosshair";
export {
  w as Crosshair
};
