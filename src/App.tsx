import css from "./App.module.css";
import * as icons from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { iconList } from "./assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const App: React.FC = (): JSX.Element => {
  const [isBtnDiasbled, setBtnDisabled] = useState<boolean>(false);
  const [icon, setIcon] = useState<(typeof iconList)[number]>("faHandPeace");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBtnDiasbled) {
      const randomIcon = iconList[Math.floor(Math.random() * iconList.length)];
      timer = setTimeout(() => {
        setIcon(randomIcon);
        setBtnDisabled(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isBtnDiasbled]);

  return (
    <>
      <header className={css.header}>
        <div className={css.header__container}>
          <p className={css.header__title}>Hello, DocuSketch! Thanks for opportunity &#59;&#41;</p>
        </div>
      </header>
      <main className={css.wrapper}>
        <FontAwesomeIcon className={css.icon} icon={icons[icon] as IconProp} />
        <button
          disabled={isBtnDiasbled}
          className={css.button}
          onClick={() => setBtnDisabled((prev) => !prev)}
        >
          Click to change icon {isBtnDiasbled}
        </button>
      </main>
    </>
  );
};

export default App;
