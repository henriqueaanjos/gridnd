var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, l = (o, e) => i(o, p(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import u from "../defs/Skull.mjs";
const w = d((o, e) => /* @__PURE__ */ n.createElement(k, l(a({ ref: e }, o), { weights: u })));
w.displayName = "Skull";
export {
  w as Skull
};
