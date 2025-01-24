var i = Object.defineProperty, n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      c.call(e, t) && m(r, t, e[t]);
  return r;
}, f = (r, e) => n(r, p(e));
import R, { forwardRef as y } from "react";
import d from "../lib/IconBase.mjs";
import l from "../defs/KeyReturn.mjs";
const u = y((r, e) => /* @__PURE__ */ R.createElement(d, f(a({ ref: e }, r), { weights: l })));
u.displayName = "KeyReturn";
export {
  u as KeyReturn
};
