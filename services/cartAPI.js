const api_url = "http://localhost:5001/cart";

class CartAPI {
    static async addToCart(productId) {
        const response = await fetch(`${api_url}/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async removeFromCart(productId) {
        const response = await fetch(`${api_url}/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async getCart() {
        try {
          const response = await fetch(api_url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Failed to fetch cart:', error);
          throw error; // or return an error state
        }
      }
      
}

export default CartAPI;
