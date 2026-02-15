import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-surface py-16">
      <Container>
        <div className="space-y-6 text-center">
          <p className="text-sm font-medium text-text-main">
            The Butterfly Foundation &middot; Geneva, Switzerland
          </p>

          <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-tertiary">
            <span>501(c)(3) Public Charity</span>
            <span>&middot;</span>
            <a
              href="#accord"
              className="text-text-secondary underline underline-offset-2 hover:text-text-main"
            >
              The Accord
            </a>
            <span>&middot;</span>
            <span>Scientific Advisory</span>
            <span>&middot;</span>
            <span>Gift Acceptance Policy</span>
          </div>

          <div className="mx-auto max-w-xl space-y-2">
            <p className="text-xs leading-relaxed text-text-tertiary">
              If you or someone you know is in crisis, please contact your local
              emergency services or a crisis helpline in your country.
            </p>
            <p className="text-xs text-text-tertiary">
              US:{" "}
              <span className="text-text-secondary">
                988 Suicide &amp; Crisis Lifeline
              </span>{" "}
              &middot; UK:{" "}
              <span className="text-text-secondary">116 123 (Samaritans)</span>{" "}
              &middot; International:{" "}
              <a
                href="https://findahelpline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary underline underline-offset-2 hover:text-text-main"
              >
                findahelpline.com
              </a>
            </p>
          </div>

          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} The Butterfly Foundation
          </p>
        </div>
      </Container>
    </footer>
  );
}
