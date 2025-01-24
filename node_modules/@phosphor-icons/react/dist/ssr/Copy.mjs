var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      y.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Copy.mjs";
const w = d((e, o) => /* @__PURE__ */ R.createElement(l, p(a({ ref: o }, e), { weights: n })));
w.displayName = "Copy";
export {
  w as Copy
};
