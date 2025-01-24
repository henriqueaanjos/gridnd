var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var t = (e, a, o) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o, m = (e, a) => {
  for (var o in a || (a = {}))
    s.call(a, o) && t(e, o, a[o]);
  if (r)
    for (var o of r(a))
      c.call(a, o) && t(e, o, a[o]);
  return e;
}, n = (e, a) => i(e, p(a));
import b, { forwardRef as d } from "react";
import l from "../lib/IconBase.mjs";
import w from "../defs/Kanban.mjs";
const I = d((e, a) => /* @__PURE__ */ b.createElement(l, n(m({ ref: a }, e), { weights: w })));
I.displayName = "Kanban";
export {
  I as Kanban
};
