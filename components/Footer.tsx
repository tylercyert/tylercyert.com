export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        &copy; {new Date().getFullYear()} Tyler Cyert
        {" · "}
        <a href="mailto:tyler@tylercyert.com">tyler@tylercyert.com</a>
        {" · "}
        <a href="https://linkedin.com/in/tyler-cyert" target="_blank" rel="noopener noreferrer">linkedin</a>
        {" · "}
        <a href="https://github.com/tylercyert" target="_blank" rel="noopener noreferrer">github</a>
      </div>
    </footer>
  );
}
