var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      l.call(o, r) && t(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import S, { forwardRef as g } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SlackLogo.mjs";
const k = g((e, o) => /* @__PURE__ */ S.createElement(R, c(m({ ref: o }, e), { weights: d })));
k.displayName = "SlackLogo";
export {
  k as SlackLogo
};
