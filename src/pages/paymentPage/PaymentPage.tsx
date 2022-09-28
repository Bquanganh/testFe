import Header from '../../components/header/Header';
import CardProduct from '../../components/products/cardProduct/CardProduct';
import { useAppSelector } from '../../redux/store/store';
import './paymentPage.scss';

function PaymentPage() {
  const subProduct = useAppSelector(state => state.products.products);
  const sumPrice = useAppSelector(state => state.products.total);
  return (
    <div className="payment">
      <Header></Header>
      <div className="payment-container">
        <h1>Checkout ({subProduct.length} items)</h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>123 React Lane</p>
            <p>Istanbul, TR</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {subProduct.map(item => (
              <CardProduct id={item.id} title={item.title} img={item.img} price={item.price} rating={item.rating} />
            ))}
          </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment-details">
                <div className="payment-container_credit">
                  <i className="fa-regular fa-credit-card"></i>
                  <input
                    className='number-card' 
                    type="text" 
                    inputMode='numeric' 
                    placeholder='Số thẻ'/>
                  <input className='number-date'type="text" placeholder='MM /YY' maxLength={4}/>
                  <input className='number-date' type="text" placeholder='CVC' maxLength={4}/>
                </div>
                <div className="payment-container_price">
                  <h3>Order Total:${sumPrice.toFixed(2)}</h3>
                  <button>
                        Buy Now
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default PaymentPage;
