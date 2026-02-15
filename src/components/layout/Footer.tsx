import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50 py-16">
      <Container>
        <div className="space-y-6 text-center">
          <p className="text-sm font-medium text-neutral-900">
            The Butterfly Foundation &middot; Geneva, Switzerland
          </p>

          <div className="mx-auto max-w-xl space-y-2">
            <p className="text-xs leading-relaxed text-neutral-400">
              If you or someone you know is in crisis, please contact your local
              emergency services or a crisis helpline in your country.
            </p>
            <p className="text-xs text-neutral-400">
              US:{" "}
              <span className="text-neutral-500">
                988 Suicide &amp; Crisis Lifeline
              </span>{" "}
              &middot; UK:{" "}
              <span className="text-neutral-500">116 123 (Samaritans)</span>{" "}
              &middot; International:{" "}
              <a
                href="https://findahelpline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 underline underline-offset-2 hover:text-neutral-700"
              >
                findahelpline.com
              </a>
            </p>
          </div>

          <p className="text-xs text-neutral-300">
            &copy; {new Date().getFullYear()} The Butterfly Foundation
          </p>
        </div>
      </Container>
    </footer>
  );
}
