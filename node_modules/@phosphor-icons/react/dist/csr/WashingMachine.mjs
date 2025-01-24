var n = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, e, o) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, t = (a, e) => {
  for (var o in e || (e = {}))
    f.call(e, o) && i(a, o, e[o]);
  if (r)
    for (var o of r(e))
      h.call(e, o) && i(a, o, e[o]);
  return a;
}, m = (a, e) => s(a, c(e));
import p, { forwardRef as g } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/WashingMachine.mjs";
const w = g((a, e) => /* @__PURE__ */ p.createElement(d, m(t({ ref: e }, a), { weights: l })));
w.displayName = "WashingMachine";
export {
  w as WashingMachine
};
