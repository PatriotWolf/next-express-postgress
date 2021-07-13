import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Divider,
  useTheme,
  Button,
} from "@material-ui/core";
import { observer } from "mobx-react";

import ProductList from "components/product/ProductList";
import CartList from "components/cart/CartList";
import { useStores } from "store";
import { ProductProps } from "store/productStore";
import { PromotionRedeemedProps } from "store/cartStore";
import Banner from "components/common/Banner";

const CheckoutPage: React.FC = observer(() => {
  const { productStore, cartStore } = useStores();
  const [promoCode, setPromoCode] = useState(``);
  const theme = useTheme();

  const onAddToCart = (product: ProductProps) => {
    cartStore.addToCart(product);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPromoCode(value);
  };

  return (
    <Container component="main">
      <Grid
        container
        spacing={2}
        style={{
          boxSizing: `border-box`,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            boxSizing: `border-box`,
          }}
        >
          <Paper
            style={{
              padding: theme.spacing(1),
            }}
          >
            <Typography variant="h4">Product</Typography>
            <ProductList
              productList={productStore.productList}
              onAddToCard={onAddToCart}
            />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            boxSizing: `border-box`,
          }}
        >
          <Paper
            style={{
              padding: theme.spacing(1),
            }}
          >
            <Typography variant="h4">Summary</Typography>

            <CartList
              productList={cartStore.entryList}
              removeCart={(id: string) => cartStore.removeFromCart(id)}
            />
            <Box
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                padding: `${theme.spacing(1)}px`,
              }}
            >
              <TextField
                value={promoCode}
                id="promocode"
                name="promocode"
                placeholder="Promo Code"
                label="Promo Code"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => cartStore.redeemPromo(promoCode)}
              >
                redeem
              </Button>
            </Box>
            {cartStore.promotionRedeemedList.length > 0 &&
              cartStore.promotionRedeemedList.map(
                (promotionData: PromotionRedeemedProps) => (
                  <Banner key={promotionData.name} {...promotionData} />
                )
              )}
            <Box
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                padding: `${theme.spacing(1)}px`,
              }}
            >
              <Typography variant="body1">Subtotal</Typography>
              <Typography>${cartStore.subtotal.toFixed(2)}</Typography>
            </Box>
            <Box
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                padding: `${theme.spacing(1)}px`,
              }}
            >
              <Typography variant="body1">Discount</Typography>
              <Typography
                color={cartStore.subtotal > 0 ? "error" : "textPrimary"}
              >
                ${cartStore.discount.toFixed(2)}
              </Typography>
            </Box>
            <Divider />
            <Box
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                padding: `${theme.spacing(1)}px`,
              }}
            >
              <Typography variant="body1">Total</Typography>
              <Typography>${cartStore.total.toFixed(2)}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
});
export default CheckoutPage;
