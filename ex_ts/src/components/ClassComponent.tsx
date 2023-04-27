export type ClassComponents = {
  href: string;
  text: string;
};

export default function ClassComponent() {
  return (
    <li>
      <a href="http://www.google.com">
        <p>go to Google</p>
      </a>
    </li>
  );
}
