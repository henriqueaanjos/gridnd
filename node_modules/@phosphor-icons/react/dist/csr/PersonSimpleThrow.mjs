var p = Object.defineProperty, s = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => s(o, f(e));
import l, { forwardRef as w } from "react";
import h from "../lib/IconBase.mjs";
import d from "../defs/PersonSimpleThrow.mjs";
const I = w((o, e) => /* @__PURE__ */ l.createElement(h, i(a({ ref: e }, o), { weights: d })));
I.displayName = "PersonSimpleThrow";
export {
  I as PersonSimpleThrow
};
