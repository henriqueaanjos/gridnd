var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, m = (e, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && t(e, r, o[r]);
  if (p)
    for (var r of p(o))
      c.call(o, r) && t(e, r, o[r]);
  return e;
}, a = (e, o) => i(e, s(o));
import g, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/AppleLogo.mjs";
const w = R((e, o) => /* @__PURE__ */ g.createElement(d, a(m({ ref: o }, e), { weights: n })));
w.displayName = "AppleLogo";
export {
  w as AppleLogo
};
