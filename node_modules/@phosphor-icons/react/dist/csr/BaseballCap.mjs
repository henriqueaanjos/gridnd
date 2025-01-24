var s = Object.defineProperty, l = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    i.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, p = (e, a) => l(e, f(a));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/BaseballCap.mjs";
const w = B((e, a) => /* @__PURE__ */ n.createElement(b, p(m({ ref: a }, e), { weights: d })));
w.displayName = "BaseballCap";
export {
  w as BaseballCap
};
