export default function Background2({ children }) {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
        backgroundRepeat: 'repeat',
      }}
    >
      {children}
    </div>
  );
}
