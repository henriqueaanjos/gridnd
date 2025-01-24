var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    n.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, i = (t, o) => f(t, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import w from "../defs/Option.mjs";
const O = d((t, o) => /* @__PURE__ */ R.createElement(l, i(a({ ref: o }, t), { weights: w })));
O.displayName = "Option";
export {
  O as Option
};
