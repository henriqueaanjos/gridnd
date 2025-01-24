var f = Object.defineProperty, c = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var r = (t, o, i) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[o] = i, a = (t, o) => {
  for (var i in o || (o = {}))
    p.call(o, i) && r(t, i, o[i]);
  if (e)
    for (var i of e(o))
      s.call(o, i) && r(t, i, o[i]);
  return t;
}, m = (t, o) => c(t, n(o));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Notification.mjs";
const I = d((t, o) => /* @__PURE__ */ N.createElement(l, m(a({ ref: o }, t), { weights: w })));
I.displayName = "Notification";
export {
  I as Notification
};
