var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var n = (e, o, m) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: m }) : e[o] = m, t = (e, o) => {
  for (var m in o || (o = {}))
    p.call(o, m) && n(e, m, o[m]);
  if (r)
    for (var m of r(o))
      s.call(o, m) && n(e, m, o[m]);
  return e;
}, a = (e, o) => c(e, f(o));
import I, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PhoneIncoming.mjs";
const l = g((e, o) => /* @__PURE__ */ I.createElement(h, a(t({ ref: o }, e), { weights: d })));
l.displayName = "PhoneIncoming";
export {
  l as PhoneIncoming
};
