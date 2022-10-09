import React from "react";
import Creator from "./Creator";

import { listOfCreators } from "../../config/constants";

type Props = {};

export default function Creators({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {listOfCreators.map((item) => (
        <Creator key={item.name} data={item} />
      ))}
    </div>
  );
}
