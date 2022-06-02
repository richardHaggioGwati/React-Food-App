import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItem = (
		<ul className={classes['cart-items']}>
			{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
    );
    
    return <Modal onClick={props.onHide}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>36.55</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onHide} className={classes['button--alt']}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>
    </Modal>
};

export default Cart