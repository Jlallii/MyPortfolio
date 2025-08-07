// components/common/Button.jsx
export default function Button({ text, link, target = "_self" }) {
  return (
    <a className="button" href={link} target={target}>
      {text}
    </a>
  );
}