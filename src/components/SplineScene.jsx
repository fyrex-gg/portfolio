import { Suspense, lazy, useState, useEffect } from 'react'

// Lazy load Spline to reduce initial bundle
const Spline = lazy(() => import('@splinetool/react-spline'))

/**
 * SplineScene - 3D particle scene from Spline
 * Interactive 3D environment with optimized lazy loading
 */
function SplineScene() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Delay Spline load slightly to prioritize critical content
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!shouldLoad) {
    return (
      <div className="spline-scene-container">
        <div className="spline-loader" />
      </div>
    )
  }

  return (
    <div className="spline-scene-container">
      <Suspense fallback={<div className="spline-loader" />}>
        <Spline
          scene="https://prod.spline.design/3ff7b617-2fe9-46c7-8e06-b6d7c382f4db/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Suspense>
    </div>
  )
}

export default SplineScene
