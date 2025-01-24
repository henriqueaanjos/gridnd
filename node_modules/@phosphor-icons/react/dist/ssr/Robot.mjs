var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? i(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, a = (t, o) => {
  for (var e in o || (o = {}))
    R.call(o, e) && m(t, e, o[e]);
  if (r)
    for (var e of r(o))
      c.call(o, e) && m(t, e, o[e]);
  return t;
}, f = (t, o) => p(t, s(o));
import b, { forwardRef as d } from "react";
import l from "../lib/SSRBase.mjs";
import n from "../defs/Robot.mjs";
const w = d((t, o) => /* @__PURE__ */ b.createElement(l, f(a({ ref: o }, t), { weights: n })));
w.displayName = "Robot";
export {
  w as Robot
};
