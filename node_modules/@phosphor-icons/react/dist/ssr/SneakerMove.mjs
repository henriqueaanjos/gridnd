var i = Object.defineProperty, p = Object.defineProperties;
var s = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    n.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      S.call(e, o) && t(r, o, e[o]);
  return r;
}, f = (r, e) => p(r, s(e));
import c, { forwardRef as R } from "react";
import d from "../lib/SSRBase.mjs";
import k from "../defs/SneakerMove.mjs";
const l = R((r, e) => /* @__PURE__ */ c.createElement(d, f(m({ ref: e }, r), { weights: k })));
l.displayName = "SneakerMove";
export {
  l as SneakerMove
};
