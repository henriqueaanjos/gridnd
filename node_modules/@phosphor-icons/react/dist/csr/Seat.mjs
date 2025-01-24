var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Seat.mjs";
const R = l((t, e) => /* @__PURE__ */ d.createElement(w, f(m({ ref: e }, t), { weights: I })));
R.displayName = "Seat";
export {
  R as Seat
};
