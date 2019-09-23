module.exports = `SELECT
customers.id customer_id,
subscriptions.id subscription_id,
customers.first_name,
customers.last_name,
customers.email,
subscriptions.title,
subscription_products.price,
customer_cards.mercadopago_card_id,
customer_cards.public_key,
CONCAT(customer_cards.first_six_digits,'XXXXXX',customer_cards.last_four_digits) card,
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
AND customer_subscriptions.next_billing <= CURDATE()`;
