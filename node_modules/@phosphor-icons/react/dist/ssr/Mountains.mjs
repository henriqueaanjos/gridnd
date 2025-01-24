var s = Object.defineProperty, n = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    p.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && a(t, e, o[e]);
  return t;
}, i = (t, o) => n(t, f(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import u from "../defs/Mountains.mjs";
const w = d((t, o) => /* @__PURE__ */ R.createElement(l, i(m({ ref: o }, t), { weights: u })));
w.displayName = "Mountains";
export {
  w as Mountains
};
