"use client";


import { Button } from "@nextui-org/button";

import useCounterStore from "../store/counter";

export const ButtonCounter = () => {
  const numOfBears = useCounterStore(((state) => state.bears))
  const increaseBear = useCounterStore((state) => state.increase)

  return (
    <Button radius="full" onPress={() => increaseBear(1)}>
      Bear Count is {numOfBears}
    </Button>
  );
};
