var p = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, o, r) => o in t ? p(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, a = (t, o) => {
  for (var r in o || (o = {}))
    l.call(o, r) && m(t, r, o[r]);
  if (e)
    for (var r of e(o))
      c.call(o, r) && m(t, r, o[r]);
  return t;
}, f = (t, o) => i(t, s(o));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import n from "../defs/DropHalfBottom.mjs";
const w = R((t, o) => /* @__PURE__ */ B.createElement(d, f(a({ ref: o }, t), { weights: n })));
w.displayName = "DropHalfBottom";
export {
  w as DropHalfBottom
};
