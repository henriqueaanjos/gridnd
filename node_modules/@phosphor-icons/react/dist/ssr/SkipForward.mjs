var p = Object.defineProperty, f = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var t = (o, r, e) => r in o ? p(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, m = (o, r) => {
  for (var e in r || (r = {}))
    d.call(r, e) && t(o, e, r[e]);
  if (a)
    for (var e of a(r))
      w.call(r, e) && t(o, e, r[e]);
  return o;
}, i = (o, r) => f(o, s(r));
import S, { forwardRef as c } from "react";
import R from "../lib/SSRBase.mjs";
import k from "../defs/SkipForward.mjs";
const l = c((o, r) => /* @__PURE__ */ S.createElement(R, i(m({ ref: r }, o), { weights: k })));
l.displayName = "SkipForward";
export {
  l as SkipForward
};
