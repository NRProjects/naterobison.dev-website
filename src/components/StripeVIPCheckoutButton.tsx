
function StripeBasicCheckoutButton() {
    const handleClick = () => {
        window.location.href = 'https://buy.stripe.com/00g29E23B3yCcg0289';
    }

    return (
        <div className="card">
            <div className="card-content">
                VIP
            </div>
            <button onClick={handleClick} className="checkout-button">
                Checkout
            </button>
        </div>
    )
}

export default StripeBasicCheckoutButton