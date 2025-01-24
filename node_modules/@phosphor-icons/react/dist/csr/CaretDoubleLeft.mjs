var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import n, { forwardRef as b } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/CaretDoubleLeft.mjs";
const w = b((t, e) => /* @__PURE__ */ n.createElement(d, f(m({ ref: e }, t), { weights: u })));
w.displayName = "CaretDoubleLeft";
export {
  w as CaretDoubleLeft
};
