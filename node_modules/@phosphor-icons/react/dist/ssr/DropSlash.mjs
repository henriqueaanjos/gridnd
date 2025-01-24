var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? s(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      S.call(r, e) && t(o, e, r[e]);
  return o;
}, p = (o, r) => f(o, i(r));
import c, { forwardRef as h } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/DropSlash.mjs";
const n = h((o, r) => /* @__PURE__ */ c.createElement(R, p(m({ ref: r }, o), { weights: d })));
n.displayName = "DropSlash";
export {
  n as DropSlash
};
