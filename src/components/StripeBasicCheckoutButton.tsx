
function StripeBasicCheckoutButton() {
    const handleClick = () => {
        window.location.href = 'https://buy.stripe.com/14kdSm37Fedg2FqeUW';
    }

    return (
        <div className="card">
            <div className="card-content">
                BASIC
            </div>
            <button onClick={handleClick} className="checkout-button">
                Checkout
            </button>
        </div>
    )
}

export default StripeBasicCheckoutButton