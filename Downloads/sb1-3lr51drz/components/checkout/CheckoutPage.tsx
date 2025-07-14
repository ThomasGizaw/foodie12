'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Wallet, DollarSign, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    notes: '',
    paymentMethod: 'cash'
  });

  const deliveryFee = 2.99;
  const tax = 0; // Assuming total is 0 for now as cart context is removed
  const finalTotal = deliveryFee + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setOrderCompleted(true);
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (orderCompleted) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your order has been placed successfully. We'll start preparing your food right away.
          </p>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order ID:</span>
                  <span className="text-gray-600">#FD{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="text-gray-600">${finalTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Delivery ETA:</span>
                  <span className="text-gray-600">25-35 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span className="text-orange-500 font-medium">Preparing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={() => router.push('/')}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* This section will need to be updated if items are no longer available */}
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${0.00}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Address */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    placeholder="Enter your delivery address"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special instructions for your order..."
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value: string) => handleChange('paymentMethod', value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                    <DollarSign className="h-4 w-4" />
                    Cash on Delivery
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center gap-2 cursor-pointer">
                    <Wallet className="h-4 w-4" />
                    Mobile Payment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    Credit/Debit Card
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.address}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
          >
            {isSubmitting ? 'Processing...' : `Confirm Order - $${finalTotal.toFixed(2)}`}
          </Button>
        </form>
      </div>
    </div>
  );
}