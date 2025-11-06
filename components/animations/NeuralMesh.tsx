'use client'

import { useEffect, useRef } from 'react'

export default function NeuralMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasElement = canvasRef.current
    if (!canvasElement) return

    const ctx = canvasElement.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Node class
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * canvasElement.width
        this.y = Math.random() * canvasElement.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvasElement.width) this.vx *= -1
        if (this.y < 0 || this.y > canvasElement.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 215, 0, 0.3)'
        ctx.fill()
      }
    }

    // Create nodes
    const nodeCount = window.innerWidth < 768 ? 30 : 50
    const nodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node())
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)

      // Update and draw nodes
      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            const opacity = (1 - distance / maxDistance) * 0.2
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

