var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, r) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r, m = (e, a) => {
  for (var r in a || (a = {}))
    s.call(a, r) && t(e, r, a[r]);
  if (o)
    for (var r of o(a))
      c.call(a, r) && t(e, r, a[r]);
  return e;
}, n = (e, a) => i(e, p(a));
import R, { forwardRef as b } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/Kanban.mjs";
const w = b((e, a) => /* @__PURE__ */ R.createElement(d, n(m({ ref: a }, e), { weights: l })));
w.displayName = "Kanban";
export {
  w as Kanban
};
