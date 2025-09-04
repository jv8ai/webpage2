export const AffiliateClick = {
  create: async () => console.log('AffiliateClick.create called')
};

export const User = {
  me: async () => null,
  login: async () => console.log('User.login called'),
  logout: async () => console.log('User.logout called')
};