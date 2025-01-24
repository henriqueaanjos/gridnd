var p = Object.defineProperty, f = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? p(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    s.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => f(o, n(e));
import l, { forwardRef as w } from "react";
import d from "../lib/IconBase.mjs";
import C from "../defs/CrownSimple.mjs";
const I = w((o, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, o), { weights: C })));
I.displayName = "CrownSimple";
export {
  I as CrownSimple
};
