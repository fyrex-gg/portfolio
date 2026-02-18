import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Smoothly shifts camera toward mouse position
 */
function MouseCameraTracker({ mouseRef }) {
  useFrame(({ camera }) => {
    const m = mouseRef.current
    camera.position.x += (m.x * 1.5 - camera.position.x) * 0.04
    camera.position.y += (m.y * 1.0 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

/**
 * Flow field particles — move along curl-noise-like paths, repel from cursor
 */
function FlowParticles({ mouseRef }) {
  const points = useRef()
  const particleCount = 3500

  const { positions, colors, phases } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const phases = new Float32Array(particleCount)

    const palette = [
      [0.38, 0.40, 0.94], // indigo
      [0.49, 0.30, 0.98], // violet
      [0.30, 0.52, 1.00], // blue-violet
      [0.60, 0.33, 1.00], // purple
      [0.22, 0.68, 0.97], // electric blue
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3]     = (Math.random() - 0.5) * 28
      positions[i3 + 1] = (Math.random() - 0.5) * 18
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      phases[i] = Math.random() * Math.PI * 2

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i3]     = c[0]
      colors[i3 + 1] = c[1]
      colors[i3 + 2] = c[2]
    }

    return { positions, colors, phases }
  }, [])

  useFrame(({ clock }) => {
    if (!points.current) return
    const time = clock.getElapsedTime()
    const pos = points.current.geometry.attributes.position.array
    const { x: mx, y: my } = mouseRef.current

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const x  = pos[i3]
      const y  = pos[i3 + 1]
      const ph = phases[i]

      // Layered sine approximation of curl noise
      const nx = x * 0.2 + time * 0.25
      const ny = y * 0.2 + time * 0.2
      const flowAngle =
        Math.sin(nx + ph) * Math.PI +
        Math.cos(ny + ph * 0.7) * Math.PI

      const speed = 0.013
      pos[i3]     += Math.cos(flowAngle) * speed
      pos[i3 + 1] += Math.sin(flowAngle) * speed

      // Mouse repulsion
      const dx    = x - mx
      const dy    = y - my
      const dist2 = dx * dx + dy * dy
      if (dist2 < 14 && dist2 > 0.01) {
        const dist  = Math.sqrt(dist2)
        const force = (Math.sqrt(14) - dist) / Math.sqrt(14) * 0.07
        pos[i3]     += (dx / dist) * force
        pos[i3 + 1] += (dy / dist) * force
      }

      // Wrap edges
      if (pos[i3]     >  14) pos[i3]     = -14
      else if (pos[i3]     < -14) pos[i3]     =  14
      if (pos[i3 + 1] >   9) pos[i3 + 1] =  -9
      else if (pos[i3 + 1] <  -9) pos[i3 + 1] =   9
    }

    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color"    count={particleCount} array={colors}    itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.82}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Distant starfield — slow rotation, gives depth
 */
function StarField() {
  const points = useRef()
  const count  = 700

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3]     = (Math.random() - 0.5) * 55
      pos[i3 + 1] = (Math.random() - 0.5) * 38
      pos[i3 + 2] = -10 - Math.random() * 6
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.z = clock.getElapsedTime() * 0.007
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#c4b5fd"
        transparent
        opacity={0.38}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Three independently rotating rings as a focal accent
 */
function GlowRings() {
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (r1.current) { r1.current.rotation.x = t * 0.12; r1.current.rotation.y = t * 0.08 }
    if (r2.current) { r2.current.rotation.x = -t * 0.10; r2.current.rotation.z = t * 0.13 }
    if (r3.current) { r3.current.rotation.y = -t * 0.09; r3.current.rotation.z = -t * 0.07 }
  })

  return (
    <group>
      <mesh ref={r1}>
        <torusGeometry args={[3.0, 0.018, 6, 160]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.32} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[2.0, 0.012, 6, 120]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.24} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={r3}>
        <torusGeometry args={[1.2, 0.010, 6, 90]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.28} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  )
}

/**
 * ParticleScene — flow field + starfield + glow rings, mouse-reactive
 */
function ParticleScene() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x:  ((e.clientX / window.innerWidth)  * 2 - 1) * 13,
        y: -((e.clientY / window.innerHeight) * 2 - 1) * 9,
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="hero-scene-container">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 70 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <MouseCameraTracker mouseRef={mouseRef} />
        <ambientLight intensity={0.15} />
        <pointLight position={[0, 0, 5]} intensity={3} color="#6366f1" />

        <StarField />
        <FlowParticles mouseRef={mouseRef} />
        <GlowRings />
      </Canvas>
    </div>
  )
}

export default ParticleScene
