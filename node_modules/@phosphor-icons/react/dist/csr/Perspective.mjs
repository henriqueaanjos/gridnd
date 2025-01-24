var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      n.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => s(r, c(e));
import d, { forwardRef as l } from "react";
import v from "../lib/IconBase.mjs";
import w from "../defs/Perspective.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(v, i(a({ ref: e }, r), { weights: w })));
I.displayName = "Perspective";
export {
  I as Perspective
};
