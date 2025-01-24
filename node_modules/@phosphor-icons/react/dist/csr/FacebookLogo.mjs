var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    s.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      g.call(o, r) && t(e, r, o[r]);
  return e;
}, c = (e, o) => i(e, p(o));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import k from "../defs/FacebookLogo.mjs";
const l = b((e, o) => /* @__PURE__ */ n.createElement(d, c(m({ ref: o }, e), { weights: k })));
l.displayName = "FacebookLogo";
export {
  l as FacebookLogo
};
