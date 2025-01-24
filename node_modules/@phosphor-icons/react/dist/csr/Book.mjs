var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? i(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    c.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      n.call(o, r) && m(e, r, o[r]);
  return e;
}, f = (e, o) => p(e, s(o));
import B, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/Book.mjs";
const w = d((e, o) => /* @__PURE__ */ B.createElement(k, f(a({ ref: o }, e), { weights: l })));
w.displayName = "Book";
export {
  w as Book
};
