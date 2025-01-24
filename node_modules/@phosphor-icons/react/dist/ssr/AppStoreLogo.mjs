var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    S.call(o, r) && p(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && p(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/AppStoreLogo.mjs";
const n = R((e, o) => /* @__PURE__ */ g.createElement(d, a(m({ ref: o }, e), { weights: l })));
n.displayName = "AppStoreLogo";
export {
  n as AppStoreLogo
};
