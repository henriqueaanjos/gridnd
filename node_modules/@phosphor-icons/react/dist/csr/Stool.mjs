var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      l.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import n, { forwardRef as d } from "react";
import w from "../lib/IconBase.mjs";
import I from "../defs/Stool.mjs";
const R = d((t, o) => /* @__PURE__ */ n.createElement(w, f(a({ ref: o }, t), { weights: I })));
R.displayName = "Stool";
export {
  R as Stool
};
