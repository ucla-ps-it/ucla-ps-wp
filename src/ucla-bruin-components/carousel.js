function _inheritsLoose(t, n) {
  (t.prototype = Object.create(n.prototype)), _setPrototypeOf((t.prototype.constructor = t), n);
}

function _setPrototypeOf(t, n) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(t, n) {
      return (t.__proto__ = n), t;
    })(t, n);
}

function _defineProperties(t, n) {
  for (var e = 0; e < n.length; e++) {
    var i = n[e];
    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}

function _createClass(t, n, e) {
  return n && _defineProperties(t.prototype, n), e && _defineProperties(t, e), t;
}

function _extends() {
  return (_extends =
    Object.assign ||
    function(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e,
          i = arguments[n];
        for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
      }
      return t;
    }).apply(this, arguments);
}
/*!
 * Splide.js
 * Version  : 2.4.24
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
!(function(t, n) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = n()) : "function" == typeof define && define.amd ? define(n) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Splide = n());
})(this, function() {
  "use strict";
  var b = Object.keys;

  function v(e, i) {
    b(e).some(function(t, n) {
      return i(e[t], t, n);
    });
  }

  function p(n) {
    return b(n).map(function(t) {
      return n[t];
    });
  }

  function i(t) {
    return "object" == typeof t;
  }

  function s(t, n) {
    var e = _extends({}, t);
    return (
      v(n, function(t, n) {
        i(t) ? (i(e[n]) || (e[n] = {}), (e[n] = s(e[n], t))) : (e[n] = t);
      }),
      e
    );
  }

  function o(t) {
    return Array.isArray(t) ? t : [t];
  }

  function y(t, n, e) {
    return Math.min(Math.max(t, e < n ? e : n), e < n ? n : e);
  }

  function h(t, n) {
    var e = 0;
    return t.replace(/%s/g, function() {
      return o(n)[e++];
    });
  }

  function w(t) {
    var n = typeof t;
    return "number" == n && 0 < t ? parseFloat(t) + "px" : "string" == n ? t : "";
  }

  function g(t) {
    return t < 10 ? "0" + t : t;
  }

  function x(t, n) {
    var e;
    return "string" == typeof n && (S((e = l("div", {})), { position: "absolute", width: n }), E(t, e), (n = e.clientWidth), _(e)), +n || 0;
  }

  function u(t, n) {
    return t ? t.querySelector(n.split(" ")[0]) : null;
  }

  function m(t, n) {
    return c(t, n)[0];
  }

  function c(t, n) {
    return t ?
      p(t.children).filter(function(t) {
        return z(t, n.split(" ")[0]) || t.tagName === n;
      }) : [];
  }

  function l(t, n) {
    var e = document.createElement(t);
    return (
      v(n, function(t, n) {
        return I(e, n, t);
      }),
      e
    );
  }

  function f(t) {
    var n = l("div", {});
    return (n.innerHTML = t), n.firstChild;
  }

  function _(t) {
    o(t).forEach(function(t) {
      var n;
      !t || ((n = t.parentElement) && n.removeChild(t));
    });
  }

  function E(t, n) {
    t && t.appendChild(n);
  }

  function k(t, n) {
    var e;
    t && n && (e = n.parentElement) && e.insertBefore(t, n);
  }

  function S(e, t) {
    e &&
      v(t, function(t, n) {
        null !== t && (e.style[n] = t);
      });
  }

  function e(n, t, e) {
    n &&
      o(t).forEach(function(t) {
        t && n.classList[e ? "remove" : "add"](t);
      });
  }

  function P(t, n) {
    e(t, n, !1);
  }

  function C(t, n) {
    e(t, n, !0);
  }

  function z(t, n) {
    return !!t && t.classList.contains(n);
  }

  function I(t, n, e) {
    t && t.setAttribute(n, e);
  }

  function M(t, n) {
    return t ? t.getAttribute(n) : "";
  }

  function O(t, n) {
    o(n).forEach(function(n) {
      o(t).forEach(function(t) {
        return t && t.removeAttribute(n);
      });
    });
  }

  function T(t) {
    return t.getBoundingClientRect();
  }

  function a(u, c) {
    var d, f;
    return {
      mount: function() {
        (d = c.Elements.list),
        u.on(
          "transitionend",
          function(t) {
            t.target === d && f && f();
          },
          d
        );
      },
      start: function(t, n, e, i, o) {
        var r = u.options,
          s = c.Controller.edgeIndex,
          a = r.speed;
        (f = o), u.is(A) && ((0 === e && s <= n) || (s <= e && 0 === n)) && (a = r.rewindSpeed || a), S(d, { transition: "transform " + a + "ms " + r.easing, transform: "translate(" + i.x + "px," + i.y + "px)" });
      },
    };
  }

  function d(e, s) {
    function a(t) {
      var n = e.options;
      S(s.Elements.slides[t], { transition: "opacity " + n.speed + "ms " + n.easing });
    }
    return {
      mount: function() {
        a(e.index);
      },
      start: function(t, n, e, i, o) {
        var r = s.Elements.track;
        S(r, { height: w(r.clientHeight) }),
          a(n),
          setTimeout(function() {
            o(), S(r, { height: "" });
          });
      },
    };
  }
  var A = "slide",
    L = "loop",
    W = "fade";

  function H(t) {
    console.error("[SPLIDE] " + t);
  }

  function q(t, n) {
    if (!t) throw new Error(n);
  }
  var t = "splide",
    j = { active: "is-active", visible: "is-visible", loading: "is-loading" },
    D = {
      type: "slide",
      rewind: !1,
      speed: 400,
      rewindSpeed: 0,
      waitForTransition: !0,
      width: 0,
      height: 0,
      fixedWidth: 0,
      fixedHeight: 0,
      heightRatio: 0,
      autoWidth: !1,
      autoHeight: !1,
      perPage: 1,
      perMove: 0,
      clones: 0,
      start: 0,
      focus: !1,
      gap: 0,
      padding: 0,
      arrows: !0,
      arrowPath: "",
      pagination: !0,
      autoplay: !1,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      lazyLoad: !1,
      preloadPages: 1,
      easing: "cubic-bezier(.42,.65,.27,.99)",
      keyboard: "global",
      drag: !0,
      dragAngleThreshold: 30,
      swipeDistanceThreshold: 150,
      flickVelocityThreshold: 0.6,
      flickPower: 600,
      flickMaxPages: 1,
      direction: "ltr",
      cover: !1,
      accessibility: !0,
      slideFocus: !0,
      isNavigation: !1,
      trimSpace: !0,
      updateOnMove: !1,
      throttle: 100,
      destroy: !1,
      breakpoints: !1,
      classes: {
        root: t,
        slider: t + "__slider",
        track: t + "__track",
        list: t + "__list",
        slide: t + "__slide",
        container: t + "__slide__container",
        arrows: t + "__arrows",
        arrow: t + "__arrow",
        prev: t + "__arrow--prev",
        next: t + "__arrow--next",
        pagination: t + "__pagination",
        page: t + "__pagination__page",
        clone: t + "__slide--clone",
        progress: t + "__progress",
        bar: t + "__progress__bar",
        autoplay: t + "__autoplay",
        play: t + "__play",
        pause: t + "__pause",
        spinner: t + "__spinner",
        sr: t + "__sr",
      },
      i18n: { prev: "Previous slide", next: "Next slide", first: "Go to first slide", last: "Go to last slide", slideX: "Go to slide %s", pageX: "Go to page %s", play: "Start autoplay", pause: "Pause autoplay" },
    },
    N = Object.freeze({ __proto__: null, CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 }),
    t = (function() {
      function t(t, n, e) {
        function i(t) {
          t.elm && t.elm.removeEventListener(t.event, t.handler, t.options);
        }
        var o, r;
        void 0 === n && (n = {}),
          void 0 === e && (e = {}),
          (this.root = t instanceof Element ? t : document.querySelector(t)),
          q(this.root, "An invalid element/selector was given."),
          (this.Components = null),
          (this.Event =
            ((o = []), {
              on: function(t, n, e, i) {
                void 0 === e && (e = null),
                  void 0 === i && (i = {}),
                  t.split(" ").forEach(function(t) {
                    e && e.addEventListener(t, n, i), o.push({ event: t, handler: n, elm: e, options: i });
                  });
              },
              off: function(t, e) {
                void 0 === e && (e = null),
                  t.split(" ").forEach(function(n) {
                    o = o.filter(function(t) {
                      return !t || t.event !== n || t.elm !== e || (i(t), !1);
                    });
                  });
              },
              emit: function(n) {
                for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) e[i - 1] = arguments[i];
                o.forEach(function(t) {
                  t.elm || t.event.split(".")[0] !== n || t.handler.apply(t, e);
                });
              },
              destroy: function() {
                o.forEach(i), (o = []);
              },
            })),
          (this.State =
            ((r = 1), {
              set: function(t) {
                r = t;
              },
              is: function(t) {
                return t === r;
              },
            })),
          (this.STATES = N),
          (this._o = s(D, n)),
          (this._i = 0),
          (this._c = e),
          (this._e = {}),
          (this._t = null);
      }
      var n = t.prototype;
      return (
        (n.mount = function(t, n) {
          var e,
            i,
            o = this;
          void 0 === t && (t = this._e),
            void 0 === n && (n = this._t),
            this.State.set(1),
            (this._e = t),
            (this._t = n),
            (this.Components =
              ((t = s((e = this)._c, t)),
                (n = n),
                (i = {}),
                v(t, function(t, n) {
                  i[n] = t(e, i, n.toLowerCase());
                }),
                (n = n || (e.is(W) ? d : a)),
                (i.Transition = n(e, i)),
                i));
          try {
            v(this.Components, function(t, n) {
              var e = t.required;
              void 0 === e || e ? t.mount && t.mount() : delete o.Components[n];
            });
          } catch (t) {
            return void H(t.message);
          }
          var r = this.State;
          return (
            r.set(2),
            v(this.Components, function(t) {
              t.mounted && t.mounted();
            }),
            this.emit("mounted"),
            r.set(3),
            this.emit("ready"),
            S(this.root, { visibility: "visible" }),
            this.on("move drag", function() {
              return r.set(4);
            }).on("moved dragged", function() {
              return r.set(3);
            }),
            this
          );
        }),
        (n.sync = function(t) {
          return (this.sibling = t), this;
        }),
        (n.on = function(t, n, e, i) {
          return this.Event.on(t, n, (e = void 0 === e ? null : e), (i = void 0 === i ? {} : i)), this;
        }),
        (n.off = function(t, n) {
          return this.Event.off(t, (n = void 0 === n ? null : n)), this;
        }),
        (n.emit = function(t) {
          for (var n, e = arguments.length, i = new Array(1 < e ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
          return (n = this.Event).emit.apply(n, [t].concat(i)), this;
        }),
        (n.go = function(t, n) {
          return void 0 === n && (n = this.options.waitForTransition), (this.State.is(3) || (this.State.is(4) && !n)) && this.Components.Controller.go(t, !1), this;
        }),
        (n.is = function(t) {
          return t === this._o.type;
        }),
        (n.add = function(t, n) {
          return this.Components.Elements.add(t, (n = void 0 === n ? -1 : n), this.refresh.bind(this)), this;
        }),
        (n.remove = function(t) {
          return this.Components.Elements.remove(t), this.refresh(), this;
        }),
        (n.refresh = function() {
          return this.emit("refresh:before").emit("refresh").emit("resize"), this;
        }),
        (n.destroy = function(n) {
          var t = this;
          if ((void 0 === n && (n = !0), !this.State.is(1)))
            return (
              p(this.Components)
              .reverse()
              .forEach(function(t) {
                t.destroy && t.destroy(n);
              }),
              this.emit("destroy", n),
              this.Event.destroy(),
              this.State.set(5),
              this
            );
          this.on("ready", function() {
            return t.destroy(n);
          });
        }),
        _createClass(t, [{
            key: "index",
            get: function() {
              return this._i;
            },
            set: function(t) {
              this._i = parseInt(t);
            },
          },
          {
            key: "length",
            get: function() {
              return this.Components.Elements.length;
            },
          },
          {
            key: "options",
            get: function() {
              return this._o;
            },
            set: function(t) {
              var n = this.State.is(1);
              n || this.emit("update"), (this._o = s(this._o, t)), n || this.emit("updated", this._o);
            },
          },
          {
            key: "classes",
            get: function() {
              return this._o.classes;
            },
          },
          {
            key: "i18n",
            get: function() {
              return this._o.i18n;
            },
          },
        ]),
        t
      );
    })(),
    R = "rtl",
    B = "ttb",
    F = "update.slide",
    G = Math.floor,
    X = Math.abs;

  function V(t, n) {
    var e;
    return function() {
      e =
        e ||
        setTimeout(function() {
          t(), (e = null);
        }, n);
    };
  }

  function n(n, e, i) {
    function o(t) {
      c || (r || ((r = t), a && a < 1 && (r -= a * e)), (a = (s = t - r) / e), e <= s && ((r = 0), (a = 1), n()), i && i(a), u(o));
    }
    var r,
      s,
      a,
      u = window.requestAnimationFrame,
      c = !0;
    return {
      pause: function() {
        (c = !0), (r = 0);
      },
      play: function(t) {
        (r = 0), t && (a = 0), c && ((c = !1), u(o));
      },
    };
  }
  var U = Math.abs,
    Y = 1,
    J = 2,
    K = 3,
    Q = "move.page",
    Z = "updated.page refresh.page",
    $ = "data-splide-lazy",
    tt = "data-splide-lazy-srcset",
    nt = "aria-current",
    et = "aria-controls",
    it = "aria-label",
    ot = "aria-hidden",
    rt = "tabindex",
    r = { ltr: { ArrowLeft: "<", ArrowRight: ">", Left: "<", Right: ">" }, rtl: { ArrowLeft: ">", ArrowRight: "<", Left: ">", Right: "<" }, ttb: { ArrowUp: "<", ArrowDown: ">", Up: "<", Down: ">" } },
    st = "move.sync",
    at = "mouseup touchend",
    ut = [" ", "Enter", "Spacebar"],
    ct = {
      Options: function(t) {
        var n = M(t.root, "data-splide");
        if (n)
          try {
            t.options = JSON.parse(n);
          } catch (t) {
            H(t.message);
          }
        return {
          mount: function() {
            t.State.is(1) && (t.index = t.options.start);
          },
        };
      },
      Breakpoints: function(i) {
        var o,
          r,
          s = i.options.breakpoints,
          n = V(t, 50),
          a = [];

        function t() {
          var t,
            n,
            e = (n = a.filter(function(t) {
              return t.mql.matches;
            })[0]) ?
            n.point :
            -1;
          e !== r && ((r = e), (t = i.State), (e = (n = s[e] || o).destroy) ? ((i.options = o), i.destroy("completely" === e)) : (t.is(5) && i.mount(), (i.options = n)));
        }
        return {
          required: s && matchMedia,
          mount: function() {
            (a = Object.keys(s)
              .sort(function(t, n) {
                return +t - +n;
              })
              .map(function(t) {
                return { point: t, mql: matchMedia("(max-width:" + t + "px)") };
              })),
            this.destroy(!0),
              addEventListener("resize", n),
              (o = i.options),
              t();
          },
          destroy: function(t) {
            t && removeEventListener("resize", n);
          },
        };
      },
      Controller: function(r, e) {
        var s, i, a;

        function o() {
          return !1 !== s.focus;
        }
        return (a = {
          mount: function() {
            (s = r.options),
            (i = r.is(L)),
            r
              .on("move", function(t) {
                r.index = t;
              })
              .on("updated refresh", function(t) {
                (s = t || s), (r.index = y(r.index, 0, a.edgeIndex));
              });
          },
          go: function(t, n) {
            t = this.trim(this.parse(t));
            e.Track.go(t, this.rewind(t), n);
          },
          parse: function(t) {
            var n = r.index,
              e = String(t).match(/([+\-<>]+)(\d+)?/),
              i = e ? e[1] : "",
              o = e ? parseInt(e[2]) : 0;
            switch (i) {
              case "+":
                n += o || 1;
                break;
              case "-":
                n -= o || 1;
                break;
              case ">":
              case "<":
                n = (function(t, n, e) {
                  if (-1 < t) return a.toIndex(t);
                  (t = s.perMove), (e = e ? -1 : 1);
                  if (t) return n + t * e;
                  return a.toIndex(a.toPage(n) + e);
                })(o, n, "<" === i);
                break;
              default:
                n = parseInt(t);
            }
            return n;
          },
          toIndex: function(t) {
            if (o()) return t;
            var n = r.length,
              e = s.perPage,
              t = t * e;
            return (t = n - e <= (t -= (this.pageLength * e - n) * G(t / n)) && t < n ? n - e : t);
          },
          toPage: function(t) {
            if (o()) return t;
            var n = r.length,
              e = s.perPage;
            return G(n - e <= t && t < n ? (n - 1) / e : t / e);
          },
          trim: function(t) {
            return (t = !i ? (s.rewind ? this.rewind(t) : y(t, 0, this.edgeIndex)) : t);
          },
          rewind: function(t) {
            var n = this.edgeIndex;
            if (i) {
              for (; n < t;) t -= n + 1;
              for (; t < 0;) t += n + 1;
            } else n < t ? (t = 0) : t < 0 && (t = n);
            return t;
          },
          isRtl: function() {
            return s.direction === R;
          },
          get pageLength() {
            var t = r.length;
            return o() ? t : Math.ceil(t / s.perPage);
          },
          get edgeIndex() {
            var t = r.length;
            return t ? (o() || s.isNavigation || i ? t - 1 : t - s.perPage) : 0;
          },
          get prevIndex() {
            var t = r.index - 1;
            return -1 < (t = i || s.rewind ? this.rewind(t) : t) ? t : -1;
          },
          get nextIndex() {
            var t = r.index + 1;
            return (i || s.rewind) && (t = this.rewind(t)), (r.index < t && t <= this.edgeIndex) || 0 === t ? t : -1;
          },
        });
      },
      Elements: function(l, i) {
        var t,
          n,
          o = l.root,
          r = l.classes,
          h = [];

        function s() {
          var t = r.root,
            n = l.options;
          return [t + "--" + n.type, t + "--" + n.direction, n.drag ? t + "--draggable" : "", n.isNavigation ? t + "--nav" : "", j.active];
        }

        function a(t) {
          return m(o, t) || m(n.slider, t);
        }
        return (
          o.id || ((window.splide = window.splide || {}), (t = window.splide.uid || 0), (window.splide.uid = ++t), (o.id = "splide" + g(t))),
          (n = {
            mount: function() {
              var t = this;
              this.init(),
                l
                .on("refresh", function() {
                  t.destroy(), t.init();
                })
                .on("updated", function() {
                  C(o, s()), P(o, s());
                });
            },
            destroy: function() {
              h.forEach(function(t) {
                  t.destroy();
                }),
                (h = []),
                C(o, s());
            },
            init: function() {
              var e = this;
              !(function() {
                (n.slider = m(o, r.slider)), (n.track = u(o, "." + r.track)), (n.list = m(n.track, r.list)), q(n.track && n.list, "Track or list was not found."), (n.slides = c(n.list, r.slide));
                var t = a(r.arrows);
                n.arrows = { prev: u(t, "." + r.prev), next: u(t, "." + r.next) };
                t = a(r.autoplay);
                (n.bar = u(a(r.progress), "." + r.bar)), (n.play = u(t, "." + r.play)), (n.pause = u(t, "." + r.pause)), (n.track.id = n.track.id || o.id + "-track"), (n.list.id = n.list.id || o.id + "-list");
              })(),
              P(o, s()),
                this.slides.forEach(function(t, n) {
                  e.register(t, n, -1);
                });
            },
            register: function(t, n, e) {
              var o,
                i,
                r,
                s,
                a,
                u,
                c,
                t =
                ((i = n),
                  (r = e),
                  (s = t),
                  (u = (o = l).options.updateOnMove),
                  (c = "ready.slide updated.slide resized.slide moved.slide" + (u ? " move.slide" : "")),
                  (a = {
                    slide: s,
                    index: i,
                    realIndex: r,
                    container: m(s, o.classes.container),
                    isClone: -1 < r,
                    mount: function() {
                      var t = this;
                      this.isClone || (s.id = o.root.id + "-slide" + g(i + 1)),
                        o
                        .on(c, function() {
                          return t.update();
                        })
                        .on(F, f)
                        .on(
                          "click",
                          function() {
                            return o.emit("click", t);
                          },
                          s
                        ),
                        u &&
                        o.on("move.slide", function(t) {
                          t === r && d(!0, !1);
                        }),
                        S(s, { display: "" }),
                        (this.styles = M(s, "style") || "");
                    },
                    destroy: function() {
                      o.off(c).off(F).off("click", s), C(s, p(j)), f(), O(this.container, "style");
                    },
                    update: function() {
                      d(this.isActive(), !1), d(this.isVisible(), !0);
                    },
                    isActive: function() {
                      return o.index === i;
                    },
                    isVisible: function() {
                      var t = this.isActive();
                      if (o.is(W) || t) return t;
                      var n = Math.ceil,
                        e = T(o.Components.Elements.track),
                        t = T(s);
                      return o.options.direction === B ? e.top <= t.top && t.bottom <= n(e.bottom) : e.left <= t.left && t.right <= n(e.right);
                    },
                    isWithin: function(t, n) {
                      t = Math.abs(t - i);
                      return (t = !o.is(A) && !this.isClone ? Math.min(t, o.length - t) : t) < n;
                    },
                  }));

              function d(t, n) {
                var e = n ? "visible" : "active",
                  i = j[e];
                t ? (P(s, i), o.emit(e, a)) : z(s, i) && (C(s, i), o.emit(n ? "hidden" : "inactive", a));
              }

              function f() {
                I(s, "style", a.styles);
              }
              t.mount(), h.push(t);
            },
            getSlide: function(n) {
              return h.filter(function(t) {
                return t.index === n;
              })[0];
            },
            getSlides: function(t) {
              return t ?
                h :
                h.filter(function(t) {
                  return !t.isClone;
                });
            },
            getSlidesByPage: function(t) {
              var n = i.Controller.toIndex(t),
                t = l.options,
                e = !1 !== t.focus ? 1 : t.perPage;
              return h.filter(function(t) {
                t = t.index;
                return n <= t && t < n + e;
              });
            },
            add: function(t, n, e) {
              var i, o, r, s;
              (t = "string" == typeof t ? f(t) : t) instanceof Element &&
                ((i = this.slides[n]),
                  S(t, { display: "none" }),
                  i ? (k(t, i), this.slides.splice(n, 0, t)) : (E(this.list, t), this.slides.push(t)),
                  (o = function() {
                    e && e(t);
                  }),
                  (s = (n = (n = t).querySelectorAll("img")).length) ?
                  ((r = 0),
                    v(n, function(t) {
                      t.onload = t.onerror = function() {
                        ++r === s && o();
                      };
                    })) :
                  o());
            },
            remove: function(t) {
              _(this.slides.splice(t, 1)[0]);
            },
            each: function(t) {
              h.forEach(t);
            },
            get length() {
              return this.slides.length;
            },
            get total() {
              return h.length;
            },
          })
        );
      },
      Track: function(r, s) {
        var e,
          n,
          o,
          a,
          i = r.options.direction === B,
          u = r.is(W),
          c = r.options.direction === R,
          d = !1,
          f = c ? 1 : -1;

        function l(t, n, e, i) {
          S(o, { transition: "" }), (d = !1), u || a.jump(n), i || r.emit("moved", n, e, t);
        }

        function h(t) {
          return a.trim(a.toPosition(t));
        }
        return (a = {
          sign: f,
          mount: function() {
            (n = s.Elements), (e = s.Layout), (o = n.list);
          },
          mounted: function() {
            var t = this;
            u ||
              (this.jump(0),
                r.on("mounted resize updated", function() {
                  t.jump(r.index);
                }));
          },
          go: function(t, n, e) {
            var i = h(t),
              o = r.index;
            (r.State.is(4) && d) ||
            ((d = t !== n),
              e || r.emit("move", n, o, t),
              1 <= Math.abs(i - this.position) || u ?
              s.Transition.start(t, n, o, this.toCoord(i), function() {
                l(t, n, o, e);
              }) :
              t !== o && "move" === r.options.trimSpace ?
              s.Controller.go(t + t - o, e) :
              l(t, n, o, e));
          },
          jump: function(t) {
            this.translate(h(t));
          },
          translate: function(t) {
            S(o, { transform: "translate" + (i ? "Y" : "X") + "(" + t + "px)" });
          },
          cancel: function() {
            r.is(L) ? this.shift() : this.translate(this.position), S(o, { transition: "" });
          },
          shift: function() {
            var t = X(this.position),
              n = X(this.toPosition(0)),
              e = X(this.toPosition(r.length)),
              i = e - n;
            t < n ? (t += i) : e < t && (t -= i), this.translate(f * t);
          },
          trim: function(t) {
            return !r.options.trimSpace || r.is(L) ? t : y(t, f * (e.totalSize() - e.size - e.gap), 0);
          },
          toIndex: function(e) {
            var i = this,
              o = 0,
              r = 1 / 0;
            return (
              n.getSlides(!0).forEach(function(t) {
                var n = t.index,
                  t = X(i.toPosition(n) - e);
                t < r && ((r = t), (o = n));
              }),
              o
            );
          },
          toCoord: function(t) {
            return { x: i ? 0 : t, y: i ? t : 0 };
          },
          toPosition: function(t) {
            var n = e.totalSize(t) - e.slideSize(t) - e.gap;
            return f * (n + this.offset(t));
          },
          offset: function(t) {
            var n = r.options.focus,
              t = e.slideSize(t);
            return "center" === n ? -(e.size - t) / 2 : -(parseInt(n) || 0) * (t + e.gap);
          },
          get position() {
            var t = i ? "top" : c ? "right" : "left";
            return T(o)[t] - (T(n.track)[t] - e.padding[t] * f);
          },
        });
      },
      Clones: function(o, t) {
        var n,
          s = [],
          e = 0,
          a = t.Elements;

        function i() {
          n.destroy(),
            (function(e) {
              var i = a.length,
                o = a.register;
              if (i) {
                for (var r = a.slides; r.length < e;) r = r.concat(r);
                r.slice(0, e).forEach(function(t, n) {
                    t = u(t);
                    E(a.list, t), s.push(t), o(t, n + i, n % i);
                  }),
                  r.slice(-e).forEach(function(t, n) {
                    t = u(t);
                    k(t, r[0]), s.push(t), o(t, n - e, (i + n - (e % i)) % i);
                  });
              }
            })((e = r()));
        }

        function r() {
          var t = o.options;
          if (t.clones) return t.clones;
          var n = t.autoWidth || t.autoHeight ? a.length : t.perPage,
            e = t.direction === B ? "Height" : "Width",
            i = x(o.root, t["fixed" + e]);
          return (n = i ? Math.ceil(a.track["client" + e] / i) : n) * (t.drag ? t.flickMaxPages + 1 : 1);
        }

        function u(t) {
          t = t.cloneNode(!0);
          return P(t, o.classes.clone), O(t, "id"), t;
        }
        return (n = {
          mount: function() {
            var t = this;
            o.is(L) &&
              (i(),
                o
                .on("refresh:before", function() {
                  t.destroy();
                })
                .on("refresh", i)
                .on("resize", function() {
                  e !== r() && (t.destroy(), o.refresh());
                }));
          },
          destroy: function() {
            _(s), (s = []);
          },
          get clones() {
            return s;
          },
          get length() {
            return s.length;
          },
        });
      },
      Layout: function(t, n) {
        var i,
          e,
          o,
          r,
          s,
          a,
          u,
          c,
          d,
          f,
          l,
          h,
          p,
          g = n.Elements,
          m = t.options.direction === B;

        function v() {
          i.init(),
            S(t.root, { maxWidth: w(t.options.width) }),
            g.each(function(t) {
              t.slide.style[i.margin] = w(i.gap);
            }),
            y();
        }

        function y() {
          var n = t.options;
          i.resize(), S(g.track, { height: w(i.height) });
          var e = n.autoHeight ? null : w(i.slideHeight());
          g.each(function(t) {
              S(t.container, { height: e }), S(t.slide, { width: n.autoWidth ? null : w(i.slideWidth(t.index)), height: t.container ? null : e });
            }),
            t.emit("resized");
        }
        return (i =
          ((e = {
              mount: function() {
                t
                  .on(
                    "resize load",
                    V(function() {
                      t.emit("resize");
                    }, t.options.throttle),
                    window
                  )
                  .on("resize", y)
                  .on("updated refresh", v),
                  v(),
                  (this.totalSize = m ? this.totalHeight : this.totalWidth),
                  (this.slideSize = m ? this.slideHeight : this.slideWidth);
              },
              destroy: function() {
                O([g.list, g.track], "style");
              },
              get size() {
                return m ? this.height : this.width;
              },
            }),
            (o = m ?
              ((d = t),
                (h = n.Elements),
                (p = d.root), {
                  margin: "marginBottom",
                  init: function() {
                    this.resize();
                  },
                  resize: function() {
                    (l = d.options), (f = h.track), (this.gap = x(p, l.gap));
                    var t = l.padding,
                      n = x(p, t.top || t),
                      t = x(p, t.bottom || t);
                    (this.padding = { top: n, bottom: t }), S(f, { paddingTop: w(n), paddingBottom: w(t) });
                  },
                  totalHeight: function(t) {
                    void 0 === t && (t = d.length - 1);
                    t = h.getSlide(t);
                    return t ? T(t.slide).bottom - T(h.list).top + this.gap : 0;
                  },
                  slideWidth: function() {
                    return x(p, l.fixedWidth || this.width);
                  },
                  slideHeight: function(t) {
                    if (l.autoHeight) {
                      var n = h.getSlide(t);
                      return n ? n.slide.offsetHeight : 0;
                    }
                    n = l.fixedHeight || (this.height + this.gap) / l.perPage - this.gap;
                    return x(p, n);
                  },
                  get width() {
                    return f.clientWidth;
                  },
                  get height() {
                    var t = l.height || this.width * l.heightRatio;
                    return q(t, '"height" or "heightRatio" is missing.'), x(p, t) - this.padding.top - this.padding.bottom;
                  },
                }) :
              ((r = t),
                (a = n.Elements),
                (u = r.root), {
                  margin: "margin" + ((c = r.options).direction === R ? "Left" : "Right"),
                  height: 0,
                  init: function() {
                    this.resize();
                  },
                  resize: function() {
                    (c = r.options), (s = a.track), (this.gap = x(u, c.gap));
                    var t = c.padding,
                      n = x(u, t.left || t),
                      t = x(u, t.right || t);
                    (this.padding = { left: n, right: t }), S(s, { paddingLeft: w(n), paddingRight: w(t) });
                  },
                  totalWidth: function(t) {
                    void 0 === t && (t = r.length - 1);
                    var n = a.getSlide(t),
                      e = 0;
                    return n && ((t = T(n.slide)), (n = T(a.list)), (e = c.direction === R ? n.right - t.left : t.right - n.left), (e += this.gap)), e;
                  },
                  slideWidth: function(t) {
                    if (c.autoWidth) {
                      var n = a.getSlide(t);
                      return n ? n.slide.offsetWidth : 0;
                    }
                    n = c.fixedWidth || (this.width + this.gap) / c.perPage - this.gap;
                    return x(u, n);
                  },
                  slideHeight: function() {
                    var t = c.height || c.fixedHeight || this.width * c.heightRatio;
                    return x(u, t);
                  },
                  get width() {
                    return s.clientWidth - this.padding.left - this.padding.right;
                  },
                })),
            b(o).forEach(function(t) {
              e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
            }),
            e));
      },
      Drag: function(a, u) {
        var e,
          i,
          o,
          r,
          n,
          c = u.Track,
          d = u.Controller,
          s = a.options.direction === B,
          f = s ? "y" : "x";

        function l(t) {
          n.disabled || r || h(t);
        }

        function h(t) {
          (e = c.toCoord(c.position)), (i = m(t, {})), (o = i);
        }

        function p(t) {
          var n;
          i &&
            ((o = m(t, i)),
              r ?
              (t.cancelable && t.preventDefault(),
                a.is(W) ||
                ((n = e[f] + o.offset[f]),
                  c.translate(
                    (function(t) {
                      {
                        var n, e, i;
                        a.is(A) &&
                          ((n = c.sign),
                            (e = n * c.trim(c.toPosition(0))),
                            (i = n * c.trim(c.toPosition(d.edgeIndex))),
                            (t *= n) < e ? (t = e - 7 * Math.log(e - t)) : i < t && (t = i + 7 * Math.log(t - i)),
                            (t *= n));
                      }
                      return t;
                    })(n)
                  ))) :
              (function(t) {
                t = t.offset;
                if (a.State.is(4) && a.options.waitForTransition) return !1;
                t = (180 * Math.atan(U(t.y) / U(t.x))) / Math.PI;
                s && (t = 90 - t);
                return t < a.options.dragAngleThreshold;
              })(o) && (a.emit("drag", i), (r = !0), c.cancel(), h(t)));
        }

        function g() {
          (i = null),
          r &&
            (a.emit("dragged", o),
              (function(t) {
                var n = t.velocity[f],
                  e = U(n); {
                  var i, o, r, s;
                  0 < e &&
                    ((i = a.options),
                      (o = a.index),
                      (r = n < 0 ? -1 : 1),
                      (s = o),
                      a.is(W) ||
                      ((n = c.position), e > i.flickVelocityThreshold && U(t.offset[f]) < i.swipeDistanceThreshold && (n += r * Math.min(e * i.flickPower, u.Layout.size * (i.flickMaxPages || 1))), (s = c.toIndex(n))),
                      s === o && 0.1 < e && (s = o + r * c.sign),
                      a.is(A) && (s = y(s, 0, d.edgeIndex)),
                      d.go(s, i.isNavigation));
                }
              })(o),
              (r = !1));
        }

        function m(t, n) {
          var e = t.timeStamp,
            i = t.touches,
            o = i ? i[0] : t,
            r = o.clientX,
            i = o.clientY,
            t = n.to || {},
            o = t.x,
            t = t.y,
            t = { x: r - (void 0 === o ? r : o), y: i - (void 0 === t ? i : t) },
            n = e - (n.time || 0);
          return { to: { x: r, y: i }, offset: t, time: e, velocity: { x: t.x / n, y: t.y / n } };
        }
        return (n = {
          disabled: !1,
          mount: function() {
            var t = this,
              n = u.Elements,
              e = n.track;
            a.on("touchstart mousedown", l, e)
              .on("touchmove mousemove", p, e, { passive: !1 })
              .on("touchend touchcancel mouseleave mouseup dragend", g, e)
              .on("mounted refresh", function() {
                v(n.list.querySelectorAll("img, a"), function(t) {
                  a.off("dragstart", t).on(
                    "dragstart",
                    function(t) {
                      t.preventDefault();
                    },
                    t, { passive: !1 }
                  );
                });
              })
              .on("mounted updated", function() {
                t.disabled = !a.options.drag;
              });
          },
        });
      },
      Click: function(t, n) {
        var e = !1;

        function i(t) {
          e && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation());
        }
        return {
          required: t.options.drag,
          mount: function() {
            t.on("click", i, n.Elements.track, { capture: !0 })
              .on("drag", function() {
                e = !0;
              })
              .on("dragged", function() {
                setTimeout(function() {
                  e = !1;
                });
              });
          },
        };
      },
      Autoplay: function(o, t, e) {
        var i,
          r,
          s = [],
          a = t.Elements;

        function u(t, n, e, i) {
          t.forEach(function(t) {
            o.on(
              n,
              function() {
                r[i ? "play" : "pause"](e);
              },
              t
            );
          });
        }
        return (r = {
          required: o.options.autoplay,
          mount: function() {
            var t = o.options;
            a.slides.length > t.perPage &&
              ((i = n(
                  function() {
                    o.go(">");
                  },
                  t.interval,
                  function(t) {
                    o.emit(e + ":playing", t), a.bar && S(a.bar, { width: 100 * t + "%" });
                  }
                )),
                (function() {
                  var t = o.options,
                    n = o.sibling,
                    n = [o.root, n ? n.root : null];
                  t.pauseOnHover && (u(n, "mouseleave", Y, !0), u(n, "mouseenter", Y, !1));
                  t.pauseOnFocus && (u(n, "focusout", J, !0), u(n, "focusin", J, !1));
                  a.play &&
                    o.on(
                      "click",
                      function() {
                        r.play(J), r.play(K);
                      },
                      a.play
                    );
                  a.pause && u([a.pause], "click", K, !1);
                  o.on("move refresh", function() {
                    r.play();
                  }).on("destroy", function() {
                    r.pause();
                  });
                })(),
                this.play());
          },
          play: function(n) {
            void 0 === n && (n = 0),
              (s = s.filter(function(t) {
                return t !== n;
              })).length || (o.emit(e + ":play"), i.play(o.options.resetProgress));
          },
          pause: function(t) {
            void 0 === t && (t = 0), i.pause(), -1 === s.indexOf(t) && s.push(t), 1 === s.length && o.emit(e + ":pause");
          },
        });
      },
      Cover: function(t, e) {
        function n(n) {
          e.Elements.each(function(t) {
            t = m(t.slide, "IMG") || m(t.container, "IMG");
            t && t.src && i(t, n);
          });
        }

        function i(t, n) {
          S(t.parentElement, { background: n ? "" : 'center/cover no-repeat url("' + t.src + '")' }), S(t, { display: n ? "" : "none" });
        }
        return {
          required: t.options.cover,
          mount: function() {
            t.on("lazyload:loaded", function(t) {
                i(t, !1);
              }),
              t.on("mounted updated refresh", function() {
                return n(!1);
              });
          },
          destroy: function() {
            n(!0);
          },
        };
      },
      Arrows: function(i, o, r) {
        var s,
          a,
          t,
          e = i.classes,
          u = i.root,
          c = o.Elements;

        function n() {
          var t = o.Controller,
            n = t.prevIndex,
            e = t.nextIndex,
            t = i.length > i.options.perPage || i.is(L);
          (s.disabled = n < 0 || !t), (a.disabled = e < 0 || !t), i.emit(r + ":updated", s, a, n, e);
        }

        function d(t) {
          return f(
            '<button class="' +
            e.arrow +
            " " +
            (t ? e.prev : e.next) +
            '" type="button"><svg xmlns="http://www.w3.org/2000/svg"\tviewBox="0 0 40 40"\twidth="40"\theight="40"><path d="' +
            (i.options.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
            '" />'
          );
        }
        return {
          required: i.options.arrows,
          mount: function() {
            (s = c.arrows.prev),
            (a = c.arrows.next),
            (s && a) ||
            !i.options.arrows ||
              ((s = d(!0)),
                (a = d(!1)),
                (t = !0),
                (function() {
                  var t = l("div", { class: e.arrows });
                  E(t, s), E(t, a);
                  var n = c.slider,
                    n = "slider" === i.options.arrows && n ? n : u;
                  k(t, n.firstElementChild);
                })()),
              s &&
              a &&
              i
              .on(
                "click",
                function() {
                  i.go("<");
                },
                s
              )
              .on(
                "click",
                function() {
                  i.go(">");
                },
                a
              )
              .on("mounted move updated refresh", n),
              (this.arrows = { prev: s, next: a });
          },
          mounted: function() {
            i.emit(r + ":mounted", s, a);
          },
          destroy: function() {
            O([s, a], "disabled"), t && _(s.parentElement);
          },
        };
      },
      Pagination: function(s, n, i) {
        var a,
          u = {},
          c = n.Elements;

        function d(t, n) {
          var e = a.getItem(n),
            n = a.getItem(t),
            t = j.active;
          e && C(e.button, t), n && P(n.button, t), s.emit(i + ":updated", u, e, n);
        }
        return (a = {
          mount: function() {
            var n,
              o,
              r,
              t,
              e = s.options.pagination;
            e &&
              ((n = s.options),
                (o = s.classes),
                (r = l("ul", { class: o.pagination })),
                (t = c
                  .getSlides(!1)
                  .filter(function(t) {
                    return !1 !== n.focus || t.index % n.perPage == 0;
                  })
                  .map(function(t, n) {
                    var e = l("li", {}),
                      i = l("button", { class: o.page, type: "button" });
                    return (
                      E(e, i),
                      E(r, e),
                      s.on(
                        "click",
                        function() {
                          s.go(">" + n);
                        },
                        i
                      ), { li: e, button: i, page: n, Slides: c.getSlidesByPage(n) }
                    );
                  })),
                (u = { list: r, items: t }),
                (t = c.slider),
                E("slider" === e && t ? t : s.root, u.list),
                s.on(Q, d)),
              s.off(Z).on(Z, function() {
                a.destroy(), s.options.pagination && (a.mount(), a.mounted());
              });
          },
          mounted: function() {
            var t;
            s.options.pagination && ((t = s.index), s.emit(i + ":mounted", u, this.getItem(t)), d(t, -1));
          },
          destroy: function() {
            _(u.list),
              u.items &&
              u.items.forEach(function(t) {
                s.off("click", t.button);
              }),
              s.off(Q),
              (u = {});
          },
          getItem: function(t) {
            return u.items[n.Controller.toPage(t)];
          },
          get data() {
            return u;
          },
        });
      },
      LazyLoad: function(o, t, r) {
        var n,
          e,
          i = o.options,
          s = "sequential" === i.lazyLoad;

        function a() {
          (e = []), (n = 0);
        }

        function u(n) {
          (n = isNaN(n) ? o.index : n),
          (e = e.filter(function(t) {
            return !t.Slide.isWithin(n, i.perPage * (i.preloadPages + 1)) || (c(t.img, t.Slide), !1);
          }))[0] || o.off("moved." + r);
        }

        function c(t, n) {
          P(n.slide, j.loading);
          var e = l("span", { class: o.classes.spinner });
          E(t.parentElement, e),
            (t.onload = function() {
              f(t, e, n, !1);
            }),
            (t.onerror = function() {
              f(t, e, n, !0);
            }),
            I(t, "srcset", M(t, tt) || ""),
            I(t, "src", M(t, $) || "");
        }

        function d() {
          var t;
          n < e.length && c((t = e[n]).img, t.Slide), n++;
        }

        function f(t, n, e, i) {
          C(e.slide, j.loading), i || (_(n), S(t, { display: "" }), o.emit(r + ":loaded", t).emit("resize")), s && d();
        }
        return {
          required: i.lazyLoad,
          mount: function() {
            o.on("mounted refresh", function() {
                a(),
                  t.Elements.each(function(n) {
                    v(n.slide.querySelectorAll("[" + $ + "], [" + tt + "]"), function(t) {
                      t.src || t.srcset || (e.push({ img: t, Slide: n }), S(t, { display: "none" }));
                    });
                  }),
                  s && d();
              }),
              s || o.on("mounted refresh moved." + r, u);
          },
          destroy: a,
        };
      },
      Keyboard: function(i) {
        var o;
        return {
          mount: function() {
            i.on("mounted updated", function() {
              var t = i.options,
                n = i.root,
                e = r[t.direction],
                t = t.keyboard;
              o && (i.off("keydown", o), O(n, rt)),
                t &&
                ("focused" === t ? I((o = n), rt, 0) : (o = document),
                  i.on(
                    "keydown",
                    function(t) {
                      e[t.key] && i.go(e[t.key]);
                    },
                    o
                  ));
            });
          },
        };
      },
      Sync: function(i) {
        var o = i.sibling,
          t = o && o.options.isNavigation;

        function r() {
          i.on(st, function(t, n, e) {
            o.off(st).go(o.is(L) ? e : t, !1), s();
          });
        }

        function s() {
          o.on(st, function(t, n, e) {
            i.off(st).go(i.is(L) ? e : t, !1), r();
          });
        }

        function n() {
          o.Components.Elements.each(function(t) {
            var n = t.slide,
              e = t.index;
            i.off(at, n).on(
                at,
                function(t) {
                  (t.button && 0 !== t.button) || a(e);
                },
                n
              ),
              i.off("keyup", n).on(
                "keyup",
                function(t) {
                  -1 < ut.indexOf(t.key) && (t.preventDefault(), a(e));
                },
                n, { passive: !1 }
              );
          });
        }

        function a(t) {
          i.State.is(3) && o.go(t);
        }
        return {
          required: !!o,
          mount: function() {
            r(),
              s(),
              t &&
              (n(),
                i.on("refresh", function() {
                  setTimeout(function() {
                    n(), o.emit("navigation:updated", i);
                  });
                }));
          },
          mounted: function() {
            t && o.emit("navigation:mounted", i);
          },
        };
      },
      A11y: function(r, n) {
        var s = r.i18n,
          o = n.Elements,
          e = [ot, rt, et, it, nt, "role"];

        function i(t, n) {
          I(t, ot, !n), r.options.slideFocus && I(t, rt, n ? 0 : -1);
        }

        function t(t, n) {
          var e = o.track.id;
          I(t, et, e), I(n, et, e);
        }

        function a(t, n, e, i) {
          var o = r.index,
            e = -1 < e && o < e ? s.last : s.prev,
            o = -1 < i && i < o ? s.first : s.next;
          I(t, it, e), I(n, it, o);
        }

        function u(t, n) {
          n && I(n.button, nt, !0),
            t.items.forEach(function(t) {
              var n = r.options,
                e = h(!1 === n.focus && 1 < n.perPage ? s.pageX : s.slideX, t.page + 1),
                n = t.button,
                t = t.Slides.map(function(t) {
                  return t.slide.id;
                });
              I(n, et, t.join(" ")), I(n, it, e);
            });
        }

        function c(t, n, e) {
          n && O(n.button, nt), e && I(e.button, nt, !0);
        }

        function d(i) {
          o.each(function(t) {
            var n = t.slide,
              e = t.realIndex;
            l(n) || I(n, "role", "button");
            (e = -1 < e ? e : t.index), (t = h(s.slideX, e + 1)), (e = i.Components.Elements.getSlide(e));
            I(n, it, t), e && I(n, et, e.slide.id);
          });
        }

        function f(t, n) {
          t = t.slide;
          n ? I(t, nt, !0) : O(t, nt);
        }

        function l(t) {
          return "BUTTON" === t.tagName;
        }
        return {
          required: r.options.accessibility,
          mount: function() {
            r
              .on("visible", function(t) {
                i(t.slide, !0);
              })
              .on("hidden", function(t) {
                i(t.slide, !1);
              })
              .on("arrows:mounted", t)
              .on("arrows:updated", a)
              .on("pagination:mounted", u)
              .on("pagination:updated", c)
              .on("refresh", function() {
                O(n.Clones.clones, e);
              }),
              r.options.isNavigation &&
              r
              .on("navigation:mounted navigation:updated", d)
              .on("active", function(t) {
                f(t, !0);
              })
              .on("inactive", function(t) {
                f(t, !1);
              }),
              ["play", "pause"].forEach(function(t) {
                var n = o[t];
                n && (l(n) || I(n, "role", "button"), I(n, et, o.track.id), I(n, it, s[t]));
              });
          },
          destroy: function() {
            var t = n.Arrows,
              t = t ? t.arrows : {};
            O(o.slides.concat([t.prev, t.next, o.play, o.pause]), e);
          },
        };
      },
    };
  return (function(e) {
    function t(t, n) {
      return e.call(this, t, n, ct) || this;
    }
    return _inheritsLoose(t, e), t;
  })(t);
});