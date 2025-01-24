var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      T.call(e, o) && m(t, o, e[o]);
  return t;
}, f = (t, e) => p(t, s(e));
import n, { forwardRef as x } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/TextT.mjs";
const w = x((t, e) => /* @__PURE__ */ n.createElement(d, f(a({ ref: e }, t), { weights: l })));
w.displayName = "TextT";
export {
  w as TextT
};
