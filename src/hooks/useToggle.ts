  import { useState } from "react";
  
  const useToggle = (initialState : any) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue((current: any) => !current) };
    return [toggleValue, toggler]
  };

  export default useToggle