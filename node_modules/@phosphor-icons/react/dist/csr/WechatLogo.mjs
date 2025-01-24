var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var a = (e, o, t) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, m = (e, o) => {
  for (var t in o || (o = {}))
    s.call(o, t) && a(e, t, o[t]);
  if (r)
    for (var t of r(o))
      g.call(o, t) && a(e, t, o[t]);
  return e;
}, c = (e, o) => i(e, p(o));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/WechatLogo.mjs";
const w = n((e, o) => /* @__PURE__ */ h.createElement(d, c(m({ ref: o }, e), { weights: l })));
w.displayName = "WechatLogo";
export {
  w as WechatLogo
};
