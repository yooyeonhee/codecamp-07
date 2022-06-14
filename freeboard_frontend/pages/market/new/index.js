import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/unit/market/productWrite/productWrite.container";

function MarketNewPage() {
  return <ProductWrite />;
}

export default withAuth(MarketNewPage);
