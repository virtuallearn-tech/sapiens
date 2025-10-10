interface LicenseProps {
  content: string
}

export function License({ content }: LicenseProps) {
  return (
    <div className="c-license">
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.95rem",
          lineHeight: "1.4",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
