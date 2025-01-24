var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var f = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    l.call(e, a) && f(r, a, e[a]);
  if (o)
    for (var a of o(e))
      n.call(e, a) && f(r, a, e[a]);
  return r;
}, m = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/AirplaneTakeoff.mjs";
const w = R((r, e) => /* @__PURE__ */ c.createElement(d, m(t({ ref: e }, r), { weights: k })));
w.displayName = "AirplaneTakeoff";
export {
  w as AirplaneTakeoff
};
