import { currencyFormatter } from "../../util/formatting.js";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li>
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>{price}</span>
        <button>+</button>
      </p>
    </li>
  );
}
