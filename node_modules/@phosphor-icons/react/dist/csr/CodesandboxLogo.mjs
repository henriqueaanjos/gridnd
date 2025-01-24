var d = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? d(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && t(e, r, o[r]);
  if (a)
    for (var r of a(o))
      p.call(o, r) && t(e, r, o[r]);
  return e;
}, s = (e, o) => f(e, i(o));
import c, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import b from "../defs/CodesandboxLogo.mjs";
const l = g((e, o) => /* @__PURE__ */ c.createElement(x, s(m({ ref: o }, e), { weights: b })));
l.displayName = "CodesandboxLogo";
export {
  l as CodesandboxLogo
};
