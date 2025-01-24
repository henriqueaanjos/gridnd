var i = Object.defineProperty, f = Object.defineProperties;
var h = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (r, e, a) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[e] = a, t = (r, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && s(r, a, e[a]);
  if (o)
    for (var a of o(e))
      l.call(e, a) && s(r, a, e[a]);
  return r;
}, m = (r, e) => f(r, h(e));
import n, { forwardRef as P } from "react";
import S from "../lib/SSRBase.mjs";
import c from "../defs/PushPinSlash.mjs";
const R = P((r, e) => /* @__PURE__ */ n.createElement(S, m(t({ ref: e }, r), { weights: c })));
R.displayName = "PushPinSlash";
export {
  R as PushPinSlash
};
