var p = Object.defineProperty, s = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      R.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => s(r, c(e));
import d, { forwardRef as l } from "react";
import n from "../lib/SSRBase.mjs";
import v from "../defs/Perspective.mjs";
const w = l((r, e) => /* @__PURE__ */ d.createElement(n, i(a({ ref: e }, r), { weights: v })));
w.displayName = "Perspective";
export {
  w as Perspective
};
