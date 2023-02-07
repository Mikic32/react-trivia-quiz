const Setting: React.FC<{
  isActive: boolean;
  title: string;
  className: string;
  onClick: () => void;
}> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={"difficulty-setting " + (props.isActive && "setting-active")}
    >
      <figure className={props.className}></figure>
      <span>{props.title}</span>
    </div>
  );
};

export default Setting;
