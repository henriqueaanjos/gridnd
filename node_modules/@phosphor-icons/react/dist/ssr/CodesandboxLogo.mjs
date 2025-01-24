var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    p.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      n.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => f(e, i(o));
import c, { forwardRef as g } from "react";
import x from "../lib/SSRBase.mjs";
import R from "../defs/CodesandboxLogo.mjs";
const b = g((e, o) => /* @__PURE__ */ c.createElement(x, s(m({ ref: o }, e), { weights: R })));
b.displayName = "CodesandboxLogo";
export {
  b as CodesandboxLogo
};
