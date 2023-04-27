import type { FC, ReactNode } from "react";

export type PProps = {
  children?: ReactNode;
};

const P: FC<PProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <p children={children} />
    </div>
  );
};

export default P;
