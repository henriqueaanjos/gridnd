var f = Object.defineProperty, i = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, c = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      s.call(e, t) && a(o, t, e[t]);
  return o;
}, m = (o, e) => i(o, n(e));
import R, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/RocketLaunch.mjs";
const l = h((o, e) => /* @__PURE__ */ R.createElement(d, m(c({ ref: e }, o), { weights: k })));
l.displayName = "RocketLaunch";
export {
  l as RocketLaunch
};
