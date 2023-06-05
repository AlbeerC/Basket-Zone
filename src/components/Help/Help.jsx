import './Help.scss'

function Help () {

    return (
        <section className='help'>
            <h2>Help</h2>
            <article className="help-article">
                <h3>Delivery and Shipping</h3>
                <div className="texts">
                    <p>US Deliveries</p>
                    <p>US Standard Delivery: Delivery takes 1-3 working days from when the order leaves our warehouse. This option will not guarantee delivery on a specific date and may be left in a safe location. Please allow at least 6 working days should you need to contact our Customer Service for tracking purposes.</p>
                    <p>US Express Delivery: Express Delivery takes 1 working day from when the order leaves our warehouse. The order will need to be placed before 8pm, without any personalization or badge printing for the quickest shipping time frame. The Shipping Method chosen at checkout determines how quickly your order will be delivered once it leaves our warehouse.</p>
                    <p>If an order includes a personalised item, this may lengthen the despatch time of your order, regardless of which delivery service is selected. The estimated despatch time of your order will be indicated at checkout.</p>
                </div>
            </article>

            <article className="help-article">
                <h3>Return Information</h3>
                <div className="texts">
                    <p>How to return your order:</p>
                    <p>1. Visit our Returns Portal and follow the instructions provided. Please have your Order Number and Postal Code ready to complete this process. This was sent to you in your Order Confirmation email.</p>
                    <p>2. Once you have completed the return steps on screen, select your return method and download the returns label provided.</p>
                    <p>3. Attach the provided label to your return package and drop it off at the nearest drop off point.</p>
                    <p>Once your package begins transit you will be able to track the progress of your return via the Returns Portal. As a reminder, it can take up to 14 working days for your refund to be processed.</p>
                </div>
            </article>

            <article className="help-article">
                <h3>Promotions</h3>
                <div className="texts">
                    <p>After placing an order with us, you will be among the first to be notified of private sales, clearance events, new products, and special event merchandise that may be of interest to you.</p>
                    <p>We feature promotions daily on our site. Once you have a promotion you would like to use, simply apply the code provided on our homepage at the final step of checkout and you will see the discount deduct automatically from your cart total. These promotions are offered daily, so please continue to check back with us often for any new offers.</p>
                    <p>Please note: You can only utilise one promotion per order. For some of our site promotions, certain brands or merchandise (based on availability or other factors) may be excluded. If your item is excluded from one of our promotions, you will not see a discount for this item at checkout. If your item is returned or cancelled, you will not be refunded the amount of the coupon code used.</p>
                </div>
            </article>

            <article className="help-article">
                <h3>Your Security</h3>
                <div className="texts">
                    <p>How do we protect your Data?</p>
                    <p>We use state-of-the-art encryption technology to protect your credit card/personal information. You can place your order(s) using Secure Socket Layer (SSL) encryption.</p>
                    <p>Digital certificates encrypt data using SSL technology, which is the industry-standard method for protecting Web communications. The SSL security protocol provides data encryption, server authentication, message integrity and optional client authentication for a TCP/IP connection. Because SSL is built into all major browsers and Web servers, simply installing a digital certificate turns on their SSL capabilities.</p>
                    <p>To shop with us, you need to enable cookies on your browser.</p>
                </div>
            </article>

            <article className="help-article">
                <h3>Tracking Your Order</h3>
                <div className="texts">
                    <p>For any order, you can at any time log into your account on our site and review your current order status as well as the tracking information if your order is eligible for tracking.</p>
                    <p>Once your order ships from our facility you will receive a confirmation email. Depending on the method and destination of your order will determine if your shipping confirmation contains tracking.</p>
                    <p>Please Note: If your order includes a personalised item, this may add an additional 3 working days to your processing timeframe. Regardless of which delivery method you selected at the time of checkout, we will still need an additional 3 days to process your personalisation.</p>
                </div>
            </article>
        </section>
    )
}

export default Help