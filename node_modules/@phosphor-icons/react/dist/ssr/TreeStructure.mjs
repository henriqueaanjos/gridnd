var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
var m = (r, e, t) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, a = (r, e) => {
  for (var t in e || (e = {}))
    s.call(e, t) && m(r, t, e[t]);
  if (o)
    for (var t of o(e))
      u.call(e, t) && m(r, t, e[t]);
  return r;
}, c = (r, e) => i(r, p(e));
import S, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import l from "../defs/TreeStructure.mjs";
const n = R((r, e) => /* @__PURE__ */ S.createElement(d, c(a({ ref: e }, r), { weights: l })));
n.displayName = "TreeStructure";
export {
  n as TreeStructure
};
