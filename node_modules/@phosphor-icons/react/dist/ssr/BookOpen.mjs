var f = Object.defineProperty, i = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (e, o, r) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, a = (e, o) => {
  for (var r in o || (o = {}))
    n.call(o, r) && m(e, r, o[r]);
  if (t)
    for (var r of t(o))
      c.call(o, r) && m(e, r, o[r]);
  return e;
}, p = (e, o) => i(e, s(o));
import B, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/BookOpen.mjs";
const l = R((e, o) => /* @__PURE__ */ B.createElement(d, p(a({ ref: o }, e), { weights: k })));
l.displayName = "BookOpen";
export {
  l as BookOpen
};
