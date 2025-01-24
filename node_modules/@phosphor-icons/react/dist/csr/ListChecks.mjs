var i = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var s = (t, e, o) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, m = (t, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && s(t, o, e[o]);
  if (r)
    for (var o of r(e))
      h.call(e, o) && s(t, o, e[o]);
  return t;
}, a = (t, e) => c(t, f(e));
import n, { forwardRef as d } from "react";
import k from "../lib/IconBase.mjs";
import l from "../defs/ListChecks.mjs";
const w = d((t, e) => /* @__PURE__ */ n.createElement(k, a(m({ ref: e }, t), { weights: l })));
w.displayName = "ListChecks";
export {
  w as ListChecks
};
