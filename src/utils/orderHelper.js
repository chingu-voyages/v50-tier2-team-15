// Helper functions to interact with local storage for orders
export const saveOrderToLocalStorage = (order) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
};

export const getOrderFromLocalStorage = (orderId) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return orders.find(order => order.id === orderId);
};

export const getAllOrdersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};

export const updateOrderInLocalStorage = (updatedOrder) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const updatedOrders = orders.map(order => order.id === updatedOrder.id ? updatedOrder : order);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};

export const deleteOrderFromLocalStorage = (orderId) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const updatedOrders = orders.filter(order => order.id !== orderId);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};