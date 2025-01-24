var p = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, o) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, a = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(r, o, e[o]);
  if (t)
    for (var o of t(e))
      n.call(e, o) && m(r, o, e[o]);
  return r;
}, f = (r, e) => s(r, i(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/SubsetProperOf.mjs";
const w = d((r, e) => /* @__PURE__ */ b.createElement(l, f(a({ ref: e }, r), { weights: u })));
w.displayName = "SubsetProperOf";
export {
  w as SubsetProperOf
};
