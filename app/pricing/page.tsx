import { title } from "@/config/variants/primitives";

import { ButtonCounter } from "./components/ButtonCounter";
import TodoList from "./components/TodoList";

// import { Counter } from "@cp/counter";


export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <ButtonCounter />
      <TodoList />
    </div>
  );
}
