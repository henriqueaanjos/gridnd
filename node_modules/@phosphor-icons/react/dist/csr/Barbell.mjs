var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    s.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      c.call(e, o) && t(r, o, e[o]);
  return r;
}, l = (r, e) => i(r, p(e));
import n, { forwardRef as B } from "react";
import b from "../lib/IconBase.mjs";
import d from "../defs/Barbell.mjs";
const w = B((r, e) => /* @__PURE__ */ n.createElement(b, l(m({ ref: e }, r), { weights: d })));
w.displayName = "Barbell";
export {
  w as Barbell
};
