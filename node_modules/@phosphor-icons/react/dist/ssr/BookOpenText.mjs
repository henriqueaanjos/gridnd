var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    n.call(e, t) && m(o, t, e[t]);
  if (r)
    for (var t of r(e))
      c.call(e, t) && m(o, t, e[t]);
  return o;
}, p = (o, e) => i(o, s(e));
import x, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/BookOpenText.mjs";
const k = B((o, e) => /* @__PURE__ */ x.createElement(R, p(a({ ref: e }, o), { weights: d })));
k.displayName = "BookOpenText";
export {
  k as BookOpenText
};
