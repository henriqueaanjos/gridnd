var i = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      l.call(e, t) && m(o, t, e[t]);
  return o;
}, f = (o, e) => s(o, c(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import u from "../defs/MouseLeftClick.mjs";
const w = d((o, e) => /* @__PURE__ */ n.createElement(k, f(a({ ref: e }, o), { weights: u })));
w.displayName = "MouseLeftClick";
export {
  w as MouseLeftClick
};
