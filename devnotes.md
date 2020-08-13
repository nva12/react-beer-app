# Component structure

- App
  - Header
  - FilterableProductsGrid
    - SearchBar
    - ProductsGrid
      - ProductCard
        - FavouriteIcon
        - ProductDetails
          - ProductImage
          - ProductTitle
          - ProductExcerpt

First build a static version without state

Then add state: FilterableProductsGrid should own the state (user search to filter)
