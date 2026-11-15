export default function NotFound() {
  return (
    <main className="shell section-pad">
      <p className="eyebrow">404 / A little off course</p>
      <h1 style={{ fontSize: "clamp(50px, 9vw, 120px)", marginBottom: 30 }}>
        Not here.
        <br />
        Still curious?
      </h1>
      <a className="button lime" href="/">
        Back to the portfolio ↗
      </a>
    </main>
  );
}
