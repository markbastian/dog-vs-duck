(ns lander.terrain)

(defn terrain-height [x t]
  (let [xmin (-> t first first)
        dt (Math/abs (apply - (map first (take 2 t))))
        i (int (/ (- x xmin) dt))
        xi (get-in t [i 0])
        yi (get-in t [i 1])
        xf (get-in t [(inc i) 0])
        yf (get-in t [(inc i) 1])]
    (if xf
      (+ yi (* (- yf yi) (/ (- x xi) (- xf xi))))
      yi)))

(defn double-indices-1d [cells]
  (zipmap (map #(* 2 %) (keys cells)) (vals cells)))

(defn gap-fill [cells roughness]
  (for [i (range 1 (dec (* 2 (count cells))) 2)
        :let [x (* 0.5 (reduce + (map cells ((juxt inc dec) i))))]]
    [i (+ x (* roughness (dec (* 2.0 (rand)))))]))

(defn subdivide [{ :keys [roughness cells]}]
  (let [c (double-indices-1d cells)
        gaps (gap-fill c roughness)]
    { :roughness (* 0.5 roughness) :cells (into c gaps)}))

(defn generate [ic steps] (nth (iterate subdivide ic) steps))

(defn gen-real [ic steps minx maxx]
  (vec (let [{ :keys [cells] } (generate ic steps)
             m (apply min (vals cells))]
         (sort
           (zipmap
             (map #(+ minx (* (- maxx minx) (double (/ % (dec (count cells)))))) (keys cells))
             (map #(- % m) (vals cells)))))))