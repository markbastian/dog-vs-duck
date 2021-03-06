(ns dvd.game-launcher
  (:require
    [quil.core :as q #?@(:cljs [:include-macros true])]
    [quil.middleware :as m]
    [dvd.quil-renderer :as qr]
    [vecmath.quat :refer [rotz xform rot]]
    [vecmath.vec :refer [dot cross sub normalize scale add mag]]))

(defn setup []
  (q/smooth)
  (q/frame-rate 30)
  (let [dim 1.2
        world { :minx (- dim) :maxx dim :miny (- dim) :maxy dim }]
    {:world world
     :dt 0.01
     :dog-pos [1.0 0.0 0.0]
     :duck-pos [0.0 0.0 0.0]
     :dog-speed 381}))

(defn sim [{:keys [duck-pos dog-pos dog-speed dt] :as state}]
  (let [double-dog-speed (/ dog-speed 100.0)
        direct-time (- 1.0 (mag duck-pos))
        direct-intersect (normalize duck-pos)
        arclength (Math/acos (dot dog-pos duck-pos))
        dog-time (/ arclength double-dog-speed)
        v (if (< direct-time dog-time)
            direct-intersect
            (normalize (sub duck-pos dog-pos)))
        new-duck-pos (add duck-pos (scale v dt))
        theta (* dt double-dog-speed)
        d (dot duck-pos dog-pos)
        new-dog-pos (if (zero? d)
                      (xform (rotz theta) dog-pos)
                      (xform (rot theta (normalize (cross dog-pos duck-pos))) dog-pos))]
    (into state
          {:dog-pos new-dog-pos
           :duck-pos (if (> (mag new-duck-pos) 1.1) [0.0 0.0 0.0] new-duck-pos)})))

(defn launch-sketch [{:keys[width height host]}]
  (q/sketch
    :title "Dog vs. Duck"
    #?@(:cljs [:host host])
    :setup setup
    :draw qr/draw
    :update sim
    :key-pressed (fn [state {:keys [key]}]
                   (case key
                     :up (update state :dog-speed inc)
                     :down (update state :dog-speed dec)
                     state))
    :middleware [m/fun-mode]
    :size [width height]))

#?(:clj (launch-sketch { :width 600 :height 600 :num-boids 100 }))

#?(:cljs (defn ^:export launch-app[host width height num-boids]
           (launch-sketch { :width width :height height :host host :num-boids num-boids })))