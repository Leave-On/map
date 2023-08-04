import { FC, ReactElement } from "react";
import cls from "./MainLayout.module.scss";

interface MainLayoutProps {
  left: ReactElement;
  right: ReactElement;
}

export const MainLayout: FC<MainLayoutProps> = ({ left, right }) => {
  return (
    <div className={cls.MainLayout}>
      <div className={cls.left}>{left}</div>
      <div className={cls.right}>{right}</div>
    </div>
  );
};
