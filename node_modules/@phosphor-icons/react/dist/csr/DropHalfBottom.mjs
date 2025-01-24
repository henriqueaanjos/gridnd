var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, a = (t, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(t, r, o[r]);
  if (e)
    for (var r of e(o))
      l.call(o, r) && m(t, r, o[r]);
  return t;
}, f = (t, o) => i(t, s(o));
import n, { forwardRef as B } from "react";
import d from "../lib/IconBase.mjs";
import w from "../defs/DropHalfBottom.mjs";
const D = B((t, o) => /* @__PURE__ */ n.createElement(d, f(a({ ref: o }, t), { weights: w })));
D.displayName = "DropHalfBottom";
export {
  D as DropHalfBottom
};
