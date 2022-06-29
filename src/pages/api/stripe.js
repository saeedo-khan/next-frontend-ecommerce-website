import { formImageToUrl } from '../../../utility/url'
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    console.log(req.body)
    try {
        const params = {
          submit_type: 'pay',
          mode: 'payment',
          payment_method_types: ['card'],
          billing_address_collection: 'auto',
          shipping_options: [
              { shipping_rate: 'shr_1L5WAGEi7TFo3wCqSXVacJTZ'},
              { shipping_rate: 'shr_1L5WBoEi7TFo3wCqPfEX9udZ'}
          ],
          line_items: req.body.map((item)=> {
            const img = item.cartItem.data.attributes.image.data.attributes.formats.medium
            const newImg = formImageToUrl(img)
            return{
              price_data:{
                currency: 'usd',
                product_data: {
                  name: item.cartItem.data.attributes.title,
                  images: [newImg]
                },
                unit_amount: item.cartItem.data.attributes.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.qty
            }
          }),
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/canceled`,
        }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}