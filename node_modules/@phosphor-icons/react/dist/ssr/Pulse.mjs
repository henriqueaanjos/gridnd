var i = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m = (t, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && a(t, r, e[r]);
  if (o)
    for (var r of o(e))
      l.call(e, r) && a(t, r, e[r]);
  return t;
}, s = (t, e) => f(t, p(e));
import R, { forwardRef as d } from "react";
import n from "../lib/SSRBase.mjs";
import u from "../defs/Pulse.mjs";
const w = d((t, e) => /* @__PURE__ */ R.createElement(n, s(m({ ref: e }, t), { weights: u })));
w.displayName = "Pulse";
export {
  w as Activity,
  w as Pulse
};
