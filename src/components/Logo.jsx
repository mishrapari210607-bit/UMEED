// UMEED brand lockup: official emblem + wordmark.

export default function Logo({ compact = false }) {
  return (
    <a href="#top" className="logo" aria-label="UMEED home">
      <span className="logo__mark" aria-hidden="true">
        <img src="/umeed-mark.png" alt="" width="42" height="40" />
      </span>
      {!compact && (
        <span className="logo__text">
          <strong>UMEED</strong>
          <em>Emergency Response Network</em>
        </span>
      )}
    </a>
  )
}
