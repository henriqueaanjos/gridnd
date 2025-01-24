var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var m = (o, r, t) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t, a = (o, r) => {
  for (var t in r || (r = {}))
    c.call(r, t) && m(o, t, r[t]);
  if (e)
    for (var t of e(r))
      g.call(r, t) && m(o, t, r[t]);
  return o;
}, i = (o, r) => f(o, s(r));
import h, { forwardRef as y } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/Copyright.mjs";
const l = y((o, r) => /* @__PURE__ */ h.createElement(R, i(a({ ref: r }, o), { weights: d })));
l.displayName = "Copyright";
export {
  l as Copyright
};
