var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (a, e, o) => e in a ? l(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[e] = o, m = (a, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(a, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && t(a, o, e[o]);
  return a;
}, s = (a, e) => f(a, i(e));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Baseball.mjs";
const w = B((a, e) => /* @__PURE__ */ n.createElement(b, s(m({ ref: e }, a), { weights: d })));
w.displayName = "Baseball";
export {
  w as Baseball
};
