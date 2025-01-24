var n = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && t(o, r, e[r]);
  if (m)
    for (var r of m(e))
      c.call(e, r) && t(o, r, e[r]);
  return o;
}, i = (o, e) => p(o, s(e));
import l, { forwardRef as R } from "react";
import d from "../lib/IconBase.mjs";
import u from "../defs/PersonSimpleRun.mjs";
const w = R((o, e) => /* @__PURE__ */ l.createElement(d, i(a({ ref: e }, o), { weights: u })));
w.displayName = "PersonSimpleRun";
export {
  w as PersonSimpleRun
};
