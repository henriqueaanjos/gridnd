var n = Object.defineProperty, f = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? n(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => f(r, p(e));
import d, { forwardRef as l } from "react";
import x from "../lib/IconBase.mjs";
import w from "../defs/TextUnderline.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(x, i(a({ ref: e }, r), { weights: w })));
I.displayName = "TextUnderline";
export {
  I as TextUnderline
};
