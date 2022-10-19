import Stripe from "stripe";
import packageInfo from "../../package.json"

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY as string,
  {
    apiVersion: "2022-08-01",
    appInfo: {
      name: "Ignews",
      version: packageInfo.version
    }
  }
)