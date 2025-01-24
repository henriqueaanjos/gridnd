var p = Object.defineProperty, s = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      n.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => s(t, i(e));
import N, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/NotSupersetOf.mjs";
const w = d((t, e) => /* @__PURE__ */ N.createElement(l, f(a({ ref: e }, t), { weights: u })));
w.displayName = "NotSupersetOf";
export {
  w as NotSupersetOf
};
