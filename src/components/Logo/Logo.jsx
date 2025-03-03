import s from "./style.module.css";
export function Logo({ img, title, subTitle }) {
  return (
    <>
      <div className={s.container}>
        <img src={img} className={s.img} />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subTitle}</div>
    </>
  );
}
