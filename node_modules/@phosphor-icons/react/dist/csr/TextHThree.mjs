var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    c.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      T.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => p(r, s(e));
import h, { forwardRef as n } from "react";
import x from "../lib/IconBase.mjs";
import d from "../defs/TextHThree.mjs";
const l = n((r, e) => /* @__PURE__ */ h.createElement(x, f(a({ ref: e }, r), { weights: d })));
l.displayName = "TextHThree";
export {
  l as TextHThree
};
