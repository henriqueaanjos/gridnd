var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      B.call(o, r) && m(e, r, o[r]);
  return e;
}, s = (e, o) => i(e, p(o));
import R, { forwardRef as d } from "react";
import k from "../lib/SSRBase.mjs";
import l from "../defs/Books.mjs";
const n = d((e, o) => /* @__PURE__ */ R.createElement(k, s(a({ ref: o }, e), { weights: l })));
n.displayName = "Books";
export {
  n as Books
};
