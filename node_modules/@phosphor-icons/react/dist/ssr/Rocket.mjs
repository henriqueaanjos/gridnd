var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      R.call(e, t) && m(o, t, e[t]);
  return o;
}, c = (o, e) => i(o, p(e));
import d, { forwardRef as k } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Rocket.mjs";
const w = k((o, e) => /* @__PURE__ */ d.createElement(l, c(a({ ref: e }, o), { weights: n })));
w.displayName = "Rocket";
export {
  w as Rocket
};
