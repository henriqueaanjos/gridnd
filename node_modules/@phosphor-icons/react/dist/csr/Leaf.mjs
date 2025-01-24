var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? i(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, m = (o, e) => {
  for (var r in e || (e = {}))
    c.call(e, r) && t(o, r, e[r]);
  if (a)
    for (var r of a(e))
      n.call(e, r) && t(o, r, e[r]);
  return o;
}, f = (o, e) => p(o, s(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Leaf.mjs";
const L = l((o, e) => /* @__PURE__ */ d.createElement(w, f(m({ ref: e }, o), { weights: I })));
L.displayName = "Leaf";
export {
  L as Leaf
};
