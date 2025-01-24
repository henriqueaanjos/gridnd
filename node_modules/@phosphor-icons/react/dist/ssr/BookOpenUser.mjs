var s = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (o, e, r) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r, a = (o, e) => {
  for (var r in e || (e = {}))
    n.call(e, r) && m(o, r, e[r]);
  if (t)
    for (var r of t(e))
      c.call(e, r) && m(o, r, e[r]);
  return o;
}, p = (o, e) => f(o, i(e));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/BookOpenUser.mjs";
const l = R((o, e) => /* @__PURE__ */ B.createElement(d, p(a({ ref: e }, o), { weights: k })));
l.displayName = "BookOpenUser";
export {
  l as BookOpenUser
};
