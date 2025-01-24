var s = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      d.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, p(e));
import l, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/Headlights.mjs";
const w = g((t, e) => /* @__PURE__ */ l.createElement(h, i(m({ ref: e }, t), { weights: n })));
w.displayName = "Headlights";
export {
  w as Headlights
};
