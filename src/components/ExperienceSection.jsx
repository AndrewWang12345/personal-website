import { ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-16">
          {/* Experience 1 */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src="/logos/western.jpg"
              alt="Western University"
              className="w-60 h-60 object-contain"
            />
            <div className="text-left space-y-2">
              <h3 className="text-xl font-semibold">
                Machine Learning Engineer @{" "}
                <a
                  href="https://globalmeteornetwork.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Western University GMN <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Jan – Apr 2025</p>
              <p className="text-muted-foreground">
                Built a full-stack system and ML model to visualize and track satellite contrails
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 pt-1">
                <li>Built and deployed full-stack geospatial applications using FastAPI, React, and Mapbox to visualize contrails, flight paths, cameras, and fields of views over a span of 6 years, with server-side acceleration using Redis caching and Cython optimization.</li>
                <li>Developed cloud-integrated backends for secure media delivery from Google Cloud Storage and remote SSH servers, parallelized KML parsing for dynamic station field-of-view rendering.</li>
                <li>Trained Mask R-CNN models using Detectron2 for instance segmentation and implemented HDBScan clustering for 3D contrail tracking and successfully identified over 1000 contrails</li>
                <li>Achieved 80% detection accuracy, 95% tracking accuracy, and 8% false positives.</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src="/logos/h2o.jpg"
              alt="H2O Geomatics"
              className="w-60 h-60 object-contain"
            />
            <div className="text-left space-y-2">
              <h3 className="text-xl font-semibold">
                Python Programmer @{" "}
                <a
                  href="https://h2ogeomatics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  H2O Geomatics <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Sept – Dec 2023</p>
              <p className="text-muted-foreground">
                Optimized satellite imagery processing pipeline
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 pt-1">
                <li>Achieved x15 speedup in satellite picture analytics pipeline using Cython and parallelization</li>
                <li>Developed an uncertainty-aware raster merging algorithm using maximum confidence selection to generate global maps for 1000+ days of satellite imagery.</li>
                <li>Reduced memory and I/O overhead with Numba, memory-mapping, and low-level optimizations</li>
                <li>Cleaned up and modularized Python code using object-oriented programming</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src="/logos/environment.jpg"
              alt="Environment Canada"
              className="w-60 h-60 object-contain"
            />
            <div className="text-left space-y-2">
              <h3 className="text-xl font-semibold">
                Data Science @{" "}
                <a
                  href="https://weather.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Environment Canada <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">Jan – Apr 2023</p>
              <p className="text-muted-foreground">
                Delivered analytics on precipitation sensors accuracy for the Meteorological Service of Canada.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 pt-1">
                <li>Verified numerical detections from 4 years worth of precipitation data collected by over 900 weather station time series across Canada</li>
                <li>Used Scikit-Learn to built Multivariate Polynomial Regression and KNN classifier ML models to identify 30 potential sensor malfunctions</li>
                <li>Filtered Canadian stations from American stations using custom geolocation scripts in Python and AWK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
