import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int, $isSoldout: Boolean) {
    fetchUseditems(search: $search, page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const BEST_FETCH_USED_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
    }
  }
`;
