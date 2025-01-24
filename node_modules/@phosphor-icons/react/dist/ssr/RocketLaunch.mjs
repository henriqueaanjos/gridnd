var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var a = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && a(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && a(o, t, e[t]);
  return o;
}, c = (o, e) => i(o, p(e));
import n, { forwardRef as h } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/RocketLaunch.mjs";
const l = h((o, e) => /* @__PURE__ */ n.createElement(d, c(m({ ref: e }, o), { weights: k })));
l.displayName = "RocketLaunch";
export {
  l as RocketLaunch
};
