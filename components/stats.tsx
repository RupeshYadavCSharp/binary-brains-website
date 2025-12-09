const stats = [
  { value: "10,000+", label: "Students Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "50+", label: "Expert Instructors" },
  { value: "100+", label: "Industry Partners" },
]

export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
