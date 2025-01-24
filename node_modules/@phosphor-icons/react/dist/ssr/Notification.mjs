var f = Object.defineProperty, c = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var r = (t, o, i) => o in t ? f(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[o] = i, a = (t, o) => {
  for (var i in o || (o = {}))
    s.call(o, i) && r(t, i, o[i]);
  if (e)
    for (var i of e(o))
      n.call(o, i) && r(t, i, o[i]);
  return t;
}, m = (t, o) => c(t, p(o));
import N, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Notification.mjs";
const w = R((t, o) => /* @__PURE__ */ N.createElement(d, m(a({ ref: o }, t), { weights: l })));
w.displayName = "Notification";
export {
  w as Notification
};
