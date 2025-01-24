var p = Object.defineProperty, c = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (t, e, m) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, a = (t, e) => {
  for (var m in e || (e = {}))
    s.call(e, m) && r(t, m, e[m]);
  if (o)
    for (var m of o(e))
      l.call(e, m) && r(t, m, e[m]);
  return t;
}, i = (t, e) => c(t, f(e));
import n, { forwardRef as E } from "react";
import d from "../lib/IconBase.mjs";
import j from "../defs/EjectSimple.mjs";
const w = E((t, e) => /* @__PURE__ */ n.createElement(d, i(a({ ref: e }, t), { weights: j })));
w.displayName = "EjectSimple";
export {
  w as EjectSimple
};
