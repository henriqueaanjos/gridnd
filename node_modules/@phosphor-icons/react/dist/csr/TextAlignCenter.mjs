var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, a = (t, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(t, r, e[r]);
  if (o)
    for (var r of o(e))
      c.call(e, r) && m(t, r, e[r]);
  return t;
}, i = (t, e) => f(t, p(e));
import l, { forwardRef as g } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextAlignCenter.mjs";
const w = g((t, e) => /* @__PURE__ */ l.createElement(x, i(a({ ref: e }, t), { weights: d })));
w.displayName = "TextAlignCenter";
export {
  w as TextAlignCenter
};
