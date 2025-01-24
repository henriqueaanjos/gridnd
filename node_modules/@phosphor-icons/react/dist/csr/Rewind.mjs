var f = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, i = (o, e) => n(o, p(e));
import d, { forwardRef as w } from "react";
import R from "../lib/IconBase.mjs";
import l from "../defs/Rewind.mjs";
const I = w((o, e) => /* @__PURE__ */ d.createElement(R, i(a({ ref: e }, o), { weights: l })));
I.displayName = "Rewind";
export {
  I as Rewind
};
