var l = Object.defineProperty, f = Object.defineProperties;
var i = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    p.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      s.call(e, o) && t(r, o, e[o]);
  return r;
}, c = (r, e) => f(r, i(e));
import S, { forwardRef as B } from "react";
import R from "../lib/SSRBase.mjs";
import d from "../defs/SoccerBall.mjs";
const n = B((r, e) => /* @__PURE__ */ S.createElement(R, c(m({ ref: e }, r), { weights: d })));
n.displayName = "SoccerBall";
export {
  n as SoccerBall
};
