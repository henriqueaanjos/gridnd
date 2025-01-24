var s = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => i(t, p(e));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/SubsetOf.mjs";
const w = d((t, e) => /* @__PURE__ */ b.createElement(l, f(a({ ref: e }, t), { weights: u })));
w.displayName = "SubsetOf";
export {
  w as SubsetOf
};
