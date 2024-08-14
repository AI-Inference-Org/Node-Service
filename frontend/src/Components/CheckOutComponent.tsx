import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6 ">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="text-2xl font-bold">GPT-3</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <p className="font-medium">Price</p>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              <div>
                <p className="font-medium">Seller</p>
                <p className="text-muted-foreground">John Doe</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <p className="font-medium">Seller Wallet Address</p>
                <p className="text-muted-foreground">
                  0x123456789abcdef0123456789abcdef01234567
                </p>
              </div>
              <div>
                <p className="font-medium">Amount to Pay</p>
                <p className="text-2xl font-bold">$99.99</p>
              </div>
              <Button className="w-full">Pay Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
