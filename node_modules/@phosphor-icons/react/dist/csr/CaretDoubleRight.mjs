var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var a = (t, e, o) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && a(t, o, e[o]);
  if (r)
    for (var o of r(e))
      l.call(e, o) && a(t, o, e[o]);
  return t;
}, i = (t, e) => p(t, s(e));
import R, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/CaretDoubleRight.mjs";
const b = g((t, e) => /* @__PURE__ */ R.createElement(h, i(m({ ref: e }, t), { weights: n })));
b.displayName = "CaretDoubleRight";
export {
  b as CaretDoubleRight
};
