interface HDPlaceholderProps {
  width: number
  height: number
  text?: string
  className?: string
}

export default function HDPlaceholder({ width, height, text, className }: HDPlaceholderProps) {
  // Generate a random gradient
  const gradientColors = [
    ["#CCFF00", "#00FFCC"],
    ["#CCFF00", "#FF00CC"],
    ["#00CCFF", "#CCFF00"],
    ["#CC00FF", "#FFCC00"],
    ["#00FFCC", "#CC00FF"],
  ]

  const randomGradient = gradientColors[Math.floor(Math.random() * gradientColors.length)]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div
        className="absolute inset-0 animate-background-pan"
        style={{
          background: `linear-gradient(45deg, ${randomGradient[0]}, ${randomGradient[1]}, ${randomGradient[0]})`,
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 cyberpunk-grid opacity-30" />
      {text && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-black font-bold text-lg">{text}</span>
        </div>
      )}
    </div>
  )
}
