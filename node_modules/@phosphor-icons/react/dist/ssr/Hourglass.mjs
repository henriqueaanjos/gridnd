var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var s = (o, r, e) => r in o ? f(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, t = (o, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && s(o, e, r[e]);
  if (a)
    for (var e of a(r))
      c.call(r, e) && s(o, e, r[e]);
  return o;
}, m = (o, r) => i(o, p(r));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/Hourglass.mjs";
const u = R((o, r) => /* @__PURE__ */ g.createElement(d, m(t({ ref: r }, o), { weights: n })));
u.displayName = "Hourglass";
export {
  u as Hourglass
};
