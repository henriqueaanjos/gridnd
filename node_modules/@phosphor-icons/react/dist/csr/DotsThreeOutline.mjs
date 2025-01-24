var s = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, o) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && m(t, o, e[o]);
  if (r)
    for (var o of r(e))
      c.call(e, o) && m(t, o, e[o]);
  return t;
}, i = (t, e) => f(t, n(e));
import l, { forwardRef as h } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/DotsThreeOutline.mjs";
const w = h((t, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, t), { weights: u })));
w.displayName = "DotsThreeOutline";
export {
  w as DotsThreeOutline
};
