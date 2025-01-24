var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    T.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import h, { forwardRef as x } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/TextHThree.mjs";
const l = x((r, e) => /* @__PURE__ */ h.createElement(R, f(a({ ref: e }, r), { weights: d })));
l.displayName = "TextHThree";
export {
  l as TextHThree
};
