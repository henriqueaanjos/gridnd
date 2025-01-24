var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      n.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import y, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import u from "../defs/Layout.mjs";
const w = d((t, o) => /* @__PURE__ */ y.createElement(l, f(m({ ref: o }, t), { weights: u })));
w.displayName = "Layout";
export {
  w as Layout
};
