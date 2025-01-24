var i = Object.defineProperty, s = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, a = (t, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && m(t, e, r[e]);
  if (o)
    for (var e of o(r))
      w.call(r, e) && m(t, e, r[e]);
  return t;
}, f = (t, r) => s(t, p(r));
import R, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/ArrowsLeftRight.mjs";
const d = g((t, r) => /* @__PURE__ */ R.createElement(h, f(a({ ref: r }, t), { weights: n })));
d.displayName = "ArrowsLeftRight";
export {
  d as ArrowsLeftRight
};
