var p = Object.defineProperty, S = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var a = (t, e, m) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[e] = m, o = (t, e) => {
  for (var m in e || (e = {}))
    f.call(e, m) && a(t, m, e[m]);
  if (r)
    for (var m of r(e))
      s.call(e, m) && a(t, m, e[m]);
  return t;
}, i = (t, e) => S(t, c(e));
import l, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/StackSimple.mjs";
const n = R((t, e) => /* @__PURE__ */ l.createElement(d, i(o({ ref: e }, t), { weights: k })));
n.displayName = "StackSimple";
export {
  n as StackSimple
};
