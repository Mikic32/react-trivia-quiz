import classes from "./Difficulty.module.css";
const Setting: React.FC<{
  isActive: boolean;
  title: string;
  className: string;
  onClick: () => void;
}> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes["difficulty-setting"]} ${
        props.isActive && classes["setting-active"]
      }`}
    >
      <figure className={`${classes.smiley} ${props.className}`}></figure>
      <span>{props.title}</span>
    </div>
  );
};

export default Setting;
