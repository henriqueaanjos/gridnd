var i = Object.defineProperty, s = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, a = (t, r) => {
  for (var e in r || (r = {}))
    R.call(r, e) && m(t, e, r[e]);
  if (o)
    for (var e of o(r))
      w.call(r, e) && m(t, e, r[e]);
  return t;
}, f = (t, r) => s(t, p(r));
import c, { forwardRef as g } from "react";
import h from "../lib/SSRBase.mjs";
import d from "../defs/ArrowsLeftRight.mjs";
const l = g((t, r) => /* @__PURE__ */ c.createElement(h, f(a({ ref: r }, t), { weights: d })));
l.displayName = "ArrowsLeftRight";
export {
  l as ArrowsLeftRight
};
