var f = Object.defineProperty, i = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var t = (r, e, o) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[e] = o, m = (r, e) => {
  for (var o in e || (e = {}))
    c.call(e, o) && t(r, o, e[o]);
  if (a)
    for (var o of a(e))
      n.call(e, o) && t(r, o, e[o]);
  return r;
}, s = (r, e) => i(r, p(e));
import d, { forwardRef as l } from "react";
import w from "../lib/IconBase.mjs";
import G from "../defs/UserGear.mjs";
const I = l((r, e) => /* @__PURE__ */ d.createElement(w, s(m({ ref: e }, r), { weights: G })));
I.displayName = "UserGear";
export {
  I as UserGear
};
