var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var a = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, m = (t, o) => {
  for (var e in o || (o = {}))
    c.call(o, e) && a(t, e, o[e]);
  if (r)
    for (var e of r(o))
      B.call(o, e) && a(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import R, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Boat.mjs";
const w = d((t, o) => /* @__PURE__ */ R.createElement(l, f(m({ ref: o }, t), { weights: n })));
w.displayName = "Boat";
export {
  w as Boat
};
