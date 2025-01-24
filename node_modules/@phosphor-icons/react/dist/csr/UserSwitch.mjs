var s = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      w.call(e, t) && m(r, t, e[t]);
  return r;
}, i = (r, e) => c(r, f(e));
import h, { forwardRef as n } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/UserSwitch.mjs";
const I = n((r, e) => /* @__PURE__ */ h.createElement(d, i(a({ ref: e }, r), { weights: l })));
I.displayName = "UserSwitch";
export {
  I as UserSwitch
};
