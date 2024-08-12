# FlavorFinder

## Overview

Welcome to **FlavorFinder**! This application is designed to help users discover and order their favorite foods. Explore various food categories, view detailed information about individual items, manage your shopping cart, and place orders. FlavorFinder also integrates map features for location-based services and is optimized for a seamless experience across different devices.

## Project Structure

The project is organized as follows:

- `src/`
  - `components/`
    - `Dashboard/`
      - `Searchbar.jsx`: A component for searching food items.
      - `FilterButtons.jsx`: Provides filter buttons for sorting food items.
      - `Results.jsx`: Displays search results.
    - `OrderScreen.jsx`: Displays the order process and status.
    - `OrderSummary.jsx`: Shows a summary of the order details.
    - `StatusModal.jsx`: A modal that displays the order status.
    - `FoodRibbon.jsx`: Displays food categories.
    - `FoodCard.jsx`: Shows detailed information about individual food items.
  - `slices/`
    - `authSlice.js`: Manages user authentication, including login and logout actions.
    - `cartSlice.js`: Handles shopping cart state, including adding and removing items and managing shipping address.
    - `foodDataApiSlice.js`: Manages food data, including fetching, filtering, and sorting.
    - `orderSlice.js`: Manages order creation, fetching, and updates.
    - `tipsSlice.js`: Manages tips amount.
  - `utils/`
    - `foodMenuFetch.js`: Utility functions for fetching food data from the API.
    - `orderHelper.js`: Utility functions for managing orders.
    - `cartUtils.js`: Utility functions for managing the cart.
  - `assets/`
    - `chicken-avatar.svg`
    - `pig-avatar.svg`
    - `cow-avatar.svg`
  - `App.jsx`: Main app component that includes routing and context providers.
  - `index.jsx`: Entry point for the React application.

## Features

- **User Authentication:** Login, logout, and manage user sessions.
- **Food Management:** Browse and search food items, view details, and filter results.
- **Shopping Cart:** Add items to the cart, manage quantities, and save shipping address.
- **Order Processing:** Place orders, view order summaries, and track order status.
- **Map Integration:** View locations and directions related to food orders (if applicable).
- **Responsive Design:** Optimized for various screen sizes and devices.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

Navigate to the project directory:

```
cd <project-directory>
```
Install dependencies:

```
npm install
```

## Usage

Start the development server:

```
npm start
```

Open your browser and navigate to:

```
http://localhost:3000
```

## Our Team

Made with love by Chingus!

- Suruchi Patki: [GitHub](https://github.com/Supatki) / [LinkedIn](https://linkedin.com/in/Suruchipatki)

- Ross Clettenberg: [GitHub](https://github.com/RossaMania) / [LinkedIn](https://www.linkedin.com/in/ross-clettenberg/)

- Nandhini Ravichandran: [GitHub](https://github.com/Nandhini0123) / [LinkedIn](https://www.linkedin.com/in/nandhini-ravichandran-9b11272b1/)

- Kayla Kenney: [GitHub](https://github.com/k-kenney) / [LinkedIn](https://www.linkedin.com/in/teachertotechie/)