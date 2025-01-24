var f = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var a = (t, r, o) => r in t ? f(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o, m = (t, r) => {
  for (var o in r || (r = {}))
    c.call(r, o) && a(t, o, r[o]);
  if (e)
    for (var o of e(r))
      w.call(r, o) && a(t, o, r[o]);
  return t;
}, i = (t, r) => p(t, s(r));
import R, { forwardRef as g } from "react";
import h from "../lib/IconBase.mjs";
import n from "../defs/ArrowFatRight.mjs";
const d = g((t, r) => /* @__PURE__ */ R.createElement(h, i(m({ ref: r }, t), { weights: n })));
d.displayName = "ArrowFatRight";
export {
  d as ArrowFatRight
};
