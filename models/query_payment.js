module.exports = `SELECT
customers.id customer_id,
subscriptions.id subscription_id,
customers.first_name,
customers.last_name,
customers.email,
subscriptions.title,
subscription_products.price,
customers.mercadopago_customer_id,
customer_cards.mercadopago_card_id,
customer_cards.issuer_id,
customer_cards.payment_method_id,
customer_subscriptions.id customer_subscriptions_id,
customer_subscriptions.current_billing,
customer_subscriptions.next_billing,
CASE WHEN subscriptions.frequency_type='days' THEN
DATE_ADD(CASE WHEN customer_subscriptions.current_billing=0 THEN CURDATE() ELSE customer_subscriptions.current_billing END, INTERVAL subscriptions.frequency DAY)
ELSE
DATE_ADD(CASE WHEN customer_subscriptions.current_billing=0 THEN CURDATE() ELSE customer_subscriptions.current_billing END, INTERVAL subscriptions.frequency MONTH)
END next_billing_on_approve
FROM customers,customer_subscriptions,subscriptions,customer_cards,subscription_products
WHERE customer_subscriptions.customer_id=customers.id
AND customer_subscriptions.subscription_id=subscriptions.id
AND customer_cards.customer_id=customers.id
AND subscription_products.subscription_id=subscriptions.id
AND customer_subscriptions.next_billing <= CURDATE()
AND customer_subscriptions.billing_attempts < 3
AND customer_cards.status='active'
GROUP BY customers.id, subscriptions.id`;
